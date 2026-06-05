
import { useEffect, useRef, useState } from "react";
import {
  X,
  Send,
  Star,
  Copy,
  Check,
} from "lucide-react";

const BOT_DELAY = 600;
const TYPING_DELAY = 900;

const OPTIONS = {
    "Order Support": {
      icon: "📦",
      options: [
        "Order not placed",
        "Order delayed",
        "Track my order",
        "Wrong product received",
      ],
      replies: {
        "Order not placed":
          "Please check your internet connection and try placing your order again.",
        "Order delayed":
          "Your AgriShop order is currently in transit and will arrive soon.",
        "Track my order":
          "Please enter your Order ID and we will help you track it.",
        "Wrong product received":
          "We're sorry for the inconvenience. A replacement request can be initiated.",
      },
    },
  
    "Seeds & Fertilizers": {
      icon: "🌱",
      options: [
        "Seed quality issue",
        "Fertilizer issue",
        "Usage guidance",
        "Crop recommendation",
      ],
      replies: {
        "Seed quality issue":
          "Please share the product details and batch number for verification.",
        "Fertilizer issue":
          "Our agronomy support team will assist you shortly.",
        "Usage guidance":
          "Please tell us your crop name and growth stage.",
        "Crop recommendation":
          "Share your crop and location for better recommendations.",
      },
    },
  
    "Payment Support": {
      icon: "💳",
      options: [
        "Payment failed",
        "Money deducted",
        "Refund status",
        "Double payment",
      ],
      replies: {
        "Payment failed":
          "Please try again using another payment method.",
        "Money deducted":
          "Your amount will be auto-refunded within 3–5 business days.",
        "Refund status":
          "Refunds usually take 5–7 business days.",
        "Double payment":
          "A refund request has been generated.",
      },
    },
  
    "Delivery Support": {
      icon: "🚚",
      options: [
        "Delivery delayed",
        "Change address",
        "Order not received",
        "Courier issue",
      ],
      replies: {
        "Delivery delayed":
          "Your shipment is on the way. Sorry for the delay.",
        "Change address":
          "Address can be changed before dispatch.",
        "Order not received":
          "We are checking with the logistics partner.",
        "Courier issue":
          "We have escalated the issue.",
      },
    },
  };

const MAIN_CATEGORIES = [
  ...Object.keys(OPTIONS).map((k) => ({
    label: k,
    icon: OPTIONS[k].icon,
  })),
  { label: "Other", icon: "💬" },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-black">
        M
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-pink-400"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StarRating({ onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-2 mt-1">
      <p className="text-gray-300 text-xs">
        Rate your support experience:
      </p>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => {
              setSelected(s);
              onRate(s);
            }}
            className="transition-transform hover:scale-125"
          >
            <Star
              size={24}
              className={
                s <= (hovered || selected)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-500"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Chatbox() {
  const bottomRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [step, setStep] = useState("WELCOME");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rated, setRated] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [copied, setCopied] = useState(false);

  const TICKET_REF =
    "MS-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBot = (text, extra = {}) => {
    setIsTyping(false);

    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text,
        ...extra,
      },
    ]);
  };

  const addUser = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text,
      },
    ]);
  };

  const botSay = (text, delay = BOT_DELAY, extra = {}) => {
    setTimeout(() => {
      setIsTyping(true);

      setTimeout(() => {
        addBot(text, extra);
      }, TYPING_DELAY);
    }, delay);
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      initChat();
    }
  }, [open]);

  const initChat = () => {
    botSay("👋 Welcome to AgriShop Farmer Support.", 300);

    setTimeout(() => {
      botSay("How can we help you today?");

      setTimeout(() => {
        setCurrentOptions(MAIN_CATEGORIES);
        setStep("MAIN");
      }, 1800);
    }, 0);
  };

  const handleOption = (option) => {
    const label =
      typeof option === "string"
        ? option
        : option.label;

    addUser(label);

    setCurrentOptions([]);
    setShowInput(false);

    if (step === "MAIN") {
      if (label === "Other") {
        botSay("Please describe your issue.");

        setTimeout(() => {
          setShowInput(true);
        }, 1500);
      } else {
        setCurrentCategory(label);

        botSay(
          `Please choose a specific issue from "${label}"`
        );

        setTimeout(() => {
          setCurrentOptions(
            OPTIONS[label].options
          );

          setStep("SUB");
        }, 1500);
      }
    } else if (step === "SUB") {
      botSay(
        OPTIONS[currentCategory].replies[label]
      );

      setTimeout(() => {
        askSolved();
      }, 1800);
    } else if (step === "SOLVED") {
      handleSolved(label);
    }
  };

  const askSolved = () => {
    botSay("Was your issue resolved?", 0);

    setTimeout(() => {
      setCurrentOptions([
        "✅ Yes",
        "❌ No",
      ]);

      setStep("SOLVED");
    }, 1500);
  };

  const handleSolved = (answer) => {
    if (answer === "✅ Yes") {
      botSay(
        "Thank you for contacting AgriShop Farmer Support ❤️"
      );

      setTimeout(() => {
        setShowRating(true);
      }, 1200);
    } else {
      botSay(
        "Please raise a support ticket."
      );

      setTimeout(() => {
        setShowTicketForm(true);
      }, 1500);
    }
  };

  const submitTicket = () => {
    if (!orderId.trim()) return;

    addUser(`Order ID: ${orderId}`);

    setShowTicketForm(false);

    botSay(
      `✅ Ticket generated successfully.`,
      0,
      {
        ticketRef: TICKET_REF,
      }
    );
  };

  const submitFreeText = () => {
    if (!inputText.trim()) return;

    addUser(inputText);

    setInputText("");
    setShowInput(false);

    botSay(
      "Thank you. Our support team will contact you soon."
    );
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(TICKET_REF);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100% {
            transform: translateY(0);
          }

          30% {
            transform: translateY(-6px);
          }
        }
      `}</style>

      {/* CHAT BUTTON */}
      {/* <div className="absolute bottom-6 right-4 z-20"> */}
      <div className="relative w-full flex justify-end pr-6 pb-24">

        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-110 text-white flex items-center justify-center shadow-2xl transition-all"
          >
            💬
          </button>
        )}

        {/* CHAT WINDOW */}
        {open && (
          <div
          className="
            w-full
            max-w-[320px]
            sm:max-w-[360px]
            h-[420px]
            sm:h-[520px]
            bg-gradient-to-b
            from-[#0f172a]
            via-[#111827]
            to-[#1e1b4b]
            border border-white/10
            rounded-2xl
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            backdrop-blur-xl
            flex flex-col
          "
        >

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-700 via-green-600 to-emerald-500">

              <div>
                <h2 className="text-white font-extrabold tracking-wide">
                  First AgriShop Support
                </h2>

                <p className="text-green-200 text-xs">
                  ● Online
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white hover:rotate-90 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "bg-white/10 backdrop-blur-md border border-white/10 text-white"
                    }`}
                  >
                    {msg.text}

                    {msg.ticketRef && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-yellow-400 text-xs font-bold">
                          {msg.ticketRef}
                        </span>

                        <button
                          onClick={copyTicket}
                          className="text-white"
                        >
                          {copied ? (
                            <Check size={14} />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && <TypingIndicator />}

              {/* OPTIONS */}
              {currentOptions.length > 0 &&
                !isTyping && (
                  <div className="flex flex-col gap-2">

                    {currentOptions.map(
                      (opt, i) => {
                        const label =
                          typeof opt ===
                          "string"
                            ? opt
                            : opt.label;

                        const icon =
                          typeof opt ===
                          "object"
                            ? opt.icon
                            : "";

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              handleOption(opt)
                            }
                            className="text-left bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-xl px-3 py-3 text-sm text-white flex items-center gap-2 transition-all"
                          >
                            <span>{icon}</span>
                            {label}
                          </button>
                        );
                      }
                    )}
                  </div>
                )}

              {/* FREE TEXT */}
              {showInput && (
                <div className="flex gap-2">
                  <input
                    value={inputText}
                    onChange={(e) =>
                      setInputText(
                        e.target.value
                      )
                    }
                    placeholder="Type here..."
                    className="flex-1 bg-white/10 border border-white/10 text-white backdrop-blur-md rounded-xl px-3 py-2 outline-none"
                  />

                  <button
                    onClick={submitFreeText}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl px-4"
                  >
                    <Send size={16} />
                  </button>
                </div>
              )}

              {/* TICKET FORM */}
              {showTicketForm && (
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col gap-2">

                  <input
                    value={orderId}
                    onChange={(e) =>
                      setOrderId(
                        e.target.value
                      )
                    }
                    placeholder="Enter Order ID"
                    className="bg-white/10 border border-white/10 text-white rounded-xl px-3 py-2 outline-none"
                  />

                  <button
                    onClick={submitTicket}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-xl font-semibold"
                  >
                    Submit Ticket
                  </button>
                </div>
              )}

              {/* RATING */}
              {showRating && !rated && (
                <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-3">
                  <StarRating
                    onRate={(r) => {
                      setRated(true);

                      addUser(
                        `${"⭐".repeat(r)}`
                      );

                      botSay(
                        "Thank you for your feedback ❤️"
                      );
                    }}
                  />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 p-2 text-center text-[11px] text-gray-300">
              Powered by  First AgriShop AI Assistant
            </div>
          </div>
        )}
      </div>
    </>
  );
}
