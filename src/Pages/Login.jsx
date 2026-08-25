import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 to-olive-100 px-4 pt-24 pb-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-ink-800">Welcome Back</h2>
          <p className="text-ink-500 mt-2">
            Login to continue shopping
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-ink-700">
              Email / Mobile
            </label>
            <input
              type="text"
              placeholder="Enter email or phone"
              className="mt-1 w-full border border-olive-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wheat-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full border  border-olive-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wheat-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="text-wheat-700 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-olive-700 hover:bg-olive-800 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-ink-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-wheat-700 font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
