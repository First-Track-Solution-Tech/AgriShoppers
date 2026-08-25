import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 to-olive-100 px-4 pt-24 pb-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-olive-100 p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-ink-800">
            Create Account
          </h2>
          <p className="text-ink-500 mt-2">
            Join us to get best farming products
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-ink-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              className="mt-1 w-full border border-olive-200 rounded-lg px-4 py-2 text-ink-800 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-wheat-400 focus:border-wheat-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink-700">
              Mobile Number
            </label>
            <div className="mt-1 flex gap-2">
              <div className="w-16 flex items-center justify-center border border-olive-200 rounded-lg px-2 py-2 bg-cream-100 text-ink-700 font-medium select-none">
                +91
              </div>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="98765 43210"
                className="flex-1 min-w-0 border border-olive-200 rounded-lg px-4 py-2 text-ink-800 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-wheat-400 focus:border-wheat-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-ink-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border border-olive-200 rounded-lg px-4 py-2 text-ink-800 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-wheat-400 focus:border-wheat-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="mt-1 w-full border border-olive-200 rounded-lg px-4 py-2 text-ink-800 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-wheat-400 focus:border-wheat-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-olive-700 hover:bg-olive-800 text-white py-2 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-ink-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-wheat-600 font-semibold hover:text-wheat-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;