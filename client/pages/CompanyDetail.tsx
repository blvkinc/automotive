import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";

export default function CompanyDetail() {
  const { id } = useParams();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-automotive-dark py-8 px-4">
        <div className="container mx-auto">
          <Link to="/companies" className="text-automotive-red hover:underline mb-4 inline-block">
            ← Back to Companies
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Automotivate Me
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Dubai, UAE</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Company Overview */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Company Overview</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Industry</div>
                  <div className="font-semibold text-card-foreground">Automotive</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Company Size</div>
                  <div className="font-semibold text-card-foreground">500+</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Open Positions</div>
                  <div className="font-semibold text-card-foreground">12</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Founded</div>
                  <div className="font-semibold text-card-foreground">2015</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-semibold text-card-foreground">UAE, Saudi</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <div className="font-semibold text-card-foreground">Verified</div>
                </div>
              </div>
            </div>

            {/* About Company */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">About Company</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Automotivate Me is the leading automotive recruitment and headhunting firm in the MENA region. We specialize in connecting top-tier talent with premier opportunities in the automotive industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over a decade of experience, we have successfully placed hundreds of professionals in senior and executive roles across the automotive sector. Our team is dedicated to understanding both the needs of employers and the aspirations of job seekers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We pride ourselves on our deep industry knowledge, extensive network, and commitment to finding the perfect match for every position and candidate.
              </p>
            </div>

            {/* Why Join */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Why Join Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-automotive-red text-automotive-red-foreground">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Career Growth</h3>
                    <p className="text-muted-foreground text-sm">Clear advancement opportunities and professional development</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-automotive-red text-automotive-red-foreground">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Competitive Salary</h3>
                    <p className="text-muted-foreground text-sm">Industry-competitive compensation packages</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-automotive-red text-automotive-red-foreground">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Health Benefits</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive health and wellness programs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-automotive-red text-automotive-red-foreground">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Work Culture</h3>
                    <p className="text-muted-foreground text-sm">Collaborative and innovative work environment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Open Positions</h2>
              
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    to={`/job/${i}`}
                    className="block p-4 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors group"
                  >
                    <h3 className="font-semibold text-card-foreground group-hover:text-automotive-red transition-colors mb-1">
                      Protective Service Worker {i}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                      <span>Dubai, UAE</span>
                      <span className="text-automotive-red">Posted 5 days ago</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link 
                to="/jobs"
                className="block mt-4 text-center text-automotive-red hover:underline font-semibold"
              >
                View All Positions →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-card p-6 rounded-lg border border-border sticky top-4">
              <h3 className="text-lg font-bold text-card-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Email</div>
                  <a href="mailto:hr@automotivate.com" className="text-automotive-red hover:underline font-semibold">
                    hr@automotivate.com
                  </a>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Phone</div>
                  <a href="tel:+971123456789" className="text-automotive-red hover:underline font-semibold">
                    +971 123456789
                  </a>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Website</div>
                  <a href="#" className="text-automotive-red hover:underline font-semibold">
                    www.automotivate.com
                  </a>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Location</div>
                  <p className="font-semibold text-card-foreground">Dubai, UAE</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <button className="w-full bg-automotive-red text-automotive-red-foreground py-2 rounded font-semibold hover:bg-opacity-90 transition-colors">
                  Follow Company
                </button>
                <button className="w-full border border-automotive-red text-automotive-red py-2 rounded font-semibold hover:bg-automotive-red hover:text-automotive-red-foreground transition-colors">
                  Report Company
                </button>
              </div>

              {/* Company Stats */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs text-muted-foreground">
                  <div className="flex justify-between mb-2">
                    <span>Rating</span>
                    <span className="font-semibold text-card-foreground">4.5/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reviews</span>
                    <span className="font-semibold text-card-foreground">128</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
