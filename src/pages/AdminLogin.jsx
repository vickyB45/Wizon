import React, { useState } from "react";
import { Mail, Lock, AlertCircle, Eye, EyeOff, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "../hook/mutations/adminLogin";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { mutate: adminLogin, isPending } = useAdminLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Email and password are required");
      return;
    }

    adminLogin(
      { email, password },
      {
        onSuccess: () => {
          setTimeout(() => {
            navigate("/admin");
          }, 500);
        },
        onError: (error) => {
          const msg =
            error?.response?.data?.message ||
            "Invalid credentials. Please try again.";
          setLocalError(msg);
        },
      }
    );
  };

  return (
    <div className="relative flex items-center justify-center px-4 py-12 min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Welcome Admin
            </h2>
            <p className="text-gray-600 text-sm">
              Sign in to access the dashboard
            </p>
          </div>

          {localError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-800">{localError}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </label>
              <input
                type="email"
                placeholder="admin@wizon.com"
                className="w-full mt-1 p-3 border-2 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setLocalError("");
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full p-3 border-2 rounded-xl outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLocalError("");
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition disabled:opacity-60 flex items-center justify-center"
            >
              {isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  &nbsp;Signing In...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  &nbsp;Sign In
                </>
              )}
            </button>

            <Link
              to="/"
              className="mt-3 w-full text-center text-sm font-semibold text-gray-600 hover:text-purple-600 transition"
            >
              Go To Home
            </Link>
          </form>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600">
          © {new Date().getFullYear()} Wizon Admin Panel
        </p>
      </div>
    </div>
  );
}
