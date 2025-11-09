import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Started
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your registration type to begin your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Candidate Registration */}
            <Link
              to="/register-candidate"
              className="group bg-card p-8 rounded-lg border border-border hover:border-automotive-red transition-all hover:shadow-lg"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-automotive-red text-automotive-red-foreground mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Job Seeker
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Looking for your next opportunity in the automotive industry? Register as a candidate to browse job openings and connect with top employers.
                </p>
                <div className="bg-automotive-red text-automotive-red-foreground px-6 py-2 rounded font-semibold inline-block group-hover:bg-opacity-90 transition-colors">
                  Register as Candidate
                </div>
              </div>
            </Link>

            {/* Employer Registration */}
            <Link
              to="/register-employer"
              className="group bg-card p-8 rounded-lg border border-border hover:border-automotive-red transition-all hover:shadow-lg"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-automotive-red text-automotive-red-foreground mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m-9.5 0H3m2 0h5.5M9 7h1m-1 4h1m4 0h1m-1-4h1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Employer
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Looking to hire top talent in the automotive industry? Register your company to post jobs and access our extensive network of qualified professionals.
                </p>
                <div className="bg-automotive-red text-automotive-red-foreground px-6 py-2 rounded font-semibold inline-block group-hover:bg-opacity-90 transition-colors">
                  Register as Employer
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-automotive-red hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
