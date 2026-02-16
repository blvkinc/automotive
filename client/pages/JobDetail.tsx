import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";

export default function JobDetail() {
  const { id } = useParams();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <Link to="/jobs" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Jobs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Protective Service Worker
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-muted-foreground">
            <span>Automotivate Me</span>
            <span>•</span>
            <span>Dubai, UAE</span>
            <span>•</span>
            <span>Posted 22 hours ago</span>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Job Overview */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Job Overview</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Employment Type</div>
                  <div className="font-semibold text-card-foreground">Full Time</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-semibold text-card-foreground">Dubai, UAE</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Salary</div>
                  <div className="font-semibold text-card-foreground">Competitive</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Experience</div>
                  <div className="font-semibold text-card-foreground">5+ Years</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Positions</div>
                  <div className="font-semibold text-card-foreground">2 Available</div>
                </div>
                <div className="bg-automotive-gray p-4 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                  <div className="font-semibold text-card-foreground">5 days left</div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Job Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are seeking a skilled and dedicated Protective Service Worker to join our team. This role is crucial in maintaining the safety and security of our facilities and personnel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The successful candidate will have a strong background in protective services and a commitment to maintaining the highest standards of professionalism and discretion.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Monitor and control access to facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Conduct regular security patrols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">��</span>
                  <span className="text-muted-foreground">Maintain detailed logs and reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Respond to incidents and emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Provide excellent customer service to visitors</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Requirements</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">5+ years of experience in protective services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Valid driver's license</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Excellent communication skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Fluent in English and Arabic (preferred)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-automotive-red mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">Physical and mental fitness for the role</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Company Card */}
            <div className="bg-card p-6 rounded-lg border border-border mb-6 sticky top-4">
              <h3 className="text-lg font-bold text-card-foreground mb-4">Company</h3>

              <div className="mb-6 p-4 bg-automotive-gray rounded">
                <div className="text-lg font-semibold text-card-foreground mb-2">Automotivate Me</div>
                <div className="text-sm text-muted-foreground mb-4">Dubai, UAE</div>
                <Link
                  to="/company/1"
                  className="text-primary hover:underline text-sm font-semibold"
                >
                  View Company Profile →
                </Link>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-opacity-90 transition-colors mb-3">
                Apply Now
              </button>

              <button className="w-full border border-primary text-primary py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Save Job
              </button>

              {/* Share */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-card-foreground mb-3">Share Job</h4>
                <div className="flex gap-3">
                  <button className="flex-1 p-2 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors">
                    <span className="text-foreground">f</span>
                  </button>
                  <button className="flex-1 p-2 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors">
                    <span className="text-foreground">𝕏</span>
                  </button>
                  <button className="flex-1 p-2 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors">
                    <span className="text-foreground">in</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-card-foreground mb-4">Similar Jobs</h3>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    to={`/job/${i}`}
                    className="block p-3 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors"
                  >
                    <h4 className="font-semibold text-card-foreground text-sm mb-1">Protective Service Worker</h4>
                    <p className="text-xs text-muted-foreground">Automotivate Me • Dubai</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
