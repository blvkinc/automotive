import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function CompanyDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <Link to="/companies" className="text-muted-foreground hover:text-primary mb-6 inline-flex items-center gap-2">
          ← Back to Companies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content (Left - 3cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header Info Section - Moved here */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold text-foreground">
                  Automotivate Me
                </h1>
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">
                  Verified
                </Badge>
              </div>

              {/* Contact Info - Grouped near name */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Dubai, UAE
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  <a href="#" className="hover:text-primary transition-colors">www.automotivate.com</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:hr@automotivate.com" className="hover:text-primary transition-colors">hr@automotivate.com</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+971123456789" className="hover:text-primary transition-colors">+971 123456789</a>
                </div>
              </div>
            </div>

            {/* Company Overview Cards */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Company Overview</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Industry", value: "Automotive" },
                  { label: "Company Size", value: "500+" },
                  { label: "Open Positions", value: "12" },
                  { label: "Founded", value: "2015" },
                  { label: "Location", value: "UAE, Saudi" },
                  { label: "Status", value: "Verified" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Company */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">About Company</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Automotivate Me is the leading automotive recruitment and headhunting firm in the MENA region. We specialize in connecting top-tier talent with premier opportunities in the automotive industry.
                </p>
                <p>
                  With over a decade of experience, we have successfully placed hundreds of professionals in senior and executive roles across the automotive sector. Our team is dedicated to understanding both the needs of employers and the aspirations of job seekers.
                </p>
                <p>
                  We pride ourselves on our deep industry knowledge, extensive network, and commitment to finding the perfect match for every position and candidate.
                </p>
              </div>
            </div>

            {/* Why Join */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Join Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Career Growth", desc: "Clear advancement opportunities and professional development" },
                  { title: "Competitive Salary", desc: "Industry-competitive compensation packages" },
                  { title: "Health Benefits", desc: "Comprehensive health and wellness programs" },
                  { title: "Work Culture", desc: "Collaborative and innovative work environment" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                        ✓
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Open Positions</h2>

              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    to={`/job/${i}`}
                    className="block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group border border-transparent hover:border-primary/20"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      Protective Service Worker {i}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                      <span>Dubai, UAE</span>
                      <span className="text-primary font-medium">Posted 5 days ago</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/jobs"
                className="block mt-6 text-center text-primary hover:underline font-semibold"
              >
                View All Positions →
              </Link>
            </div>
          </div>

          {/* Sidebar (Right - 1col) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo Panel - Moved here */}
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <span className="text-4xl font-bold text-muted-foreground">AM</span>
              </div>
              <p className="text-sm text-muted-foreground">Since 2015</p>
            </div>

            {/* Stats Panel */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-foreground">4.5</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Reviews</span>
                  <span className="font-semibold text-foreground">128</span>
                </div>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm">
                Follow Company
              </button>
              <button className="w-full border border-border bg-background text-muted-foreground py-2.5 rounded-lg font-semibold hover:bg-accent hover:text-foreground transition-colors">
                Report Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
