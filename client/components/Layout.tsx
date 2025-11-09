import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <div className="bg-automotive-red text-center py-2 px-4 text-sm text-automotive-red-foreground">
        Looking for a Job in the Automotive Sector? Register Yourself For <span className="font-bold">FREE</span>
      </div>

      {/* Header */}
      <header className="bg-automotive-dark border-b border-automotive-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">auto</span>
                <span className="text-xl font-bold text-automotive-red leading-none">motivate</span>
                <span className="text-[10px] text-white tracking-wider">JOBS</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-automotive-red transition-colors">
                Home
              </Link>
              <Link to="/jobs" className="text-foreground hover:text-automotive-red transition-colors">
                Jobs
              </Link>
              <Link to="/companies" className="text-foreground hover:text-automotive-red transition-colors">
                Companies
              </Link>
              <Link to="/about" className="text-foreground hover:text-automotive-red transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground hover:text-automotive-red transition-colors">
                Contact Us
              </Link>
              <Link to="/blog" className="text-foreground hover:text-automotive-red transition-colors">
                Blog
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/register" 
                className="text-foreground hover:text-automotive-red transition-colors"
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="bg-automotive-red text-automotive-red-foreground px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-automotive-dark border-t border-automotive-gray">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link
                to="/companies"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Companies
              </Link>
              <Link
                to="/about"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-2 border-t border-automotive-gray">
                <Link
                  to="/register"
                  className="block py-2 text-foreground hover:text-automotive-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="block py-2 bg-automotive-red text-automotive-red-foreground px-4 rounded hover:bg-opacity-90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-automotive-dark border-t border-automotive-gray mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-automotive-red transition-colors">Home</Link></li>
                <li><Link to="/jobs" className="text-muted-foreground hover:text-automotive-red transition-colors">Jobs</Link></li>
                <li><Link to="/companies" className="text-muted-foreground hover:text-automotive-red transition-colors">Companies</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-automotive-red transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-automotive-red transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Helpful Resources */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Helpful Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-automotive-red transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-automotive-red transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-automotive-red transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">+ xx xxx xxxx xxx</li>
                <li className="text-muted-foreground">Address</li>
                <li className="text-muted-foreground">Email</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-2xl font-bold text-white leading-none">auto</span>
                <span className="text-2xl font-bold text-automotive-red leading-none">motivate</span>
                <span className="text-xs text-white tracking-wider">JOBS</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">Be the first to know.</h3>
              <p className="text-sm text-muted-foreground mb-4">Stay connected by subscribing to our newsletter.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your mail" 
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-l text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
                <button className="bg-automotive-red text-automotive-red-foreground px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-automotive-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-automotive-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
