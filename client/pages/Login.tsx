import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
    alert("Login functionality would be connected to your backend.");
  };

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h1 className="text-3xl font-bold text-card-foreground mb-2 text-center">Welcome Back</h1>
            <p className="text-muted-foreground text-center mb-8">Sign in to your account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border border-border bg-input cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link to="#" className="text-sm text-automotive-red hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-automotive-red text-automotive-red-foreground py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-automotive-red hover:underline font-semibold">
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-xs text-muted-foreground text-center">Or continue with</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2 border border-border rounded hover:border-automotive-red transition-colors text-sm font-semibold text-card-foreground">
                  Google
                </button>
                <button className="py-2 border border-border rounded hover:border-automotive-red transition-colors text-sm font-semibold text-card-foreground">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
