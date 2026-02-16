import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function About() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create an account to get started."
    },
    {
      number: "2",
      title: "Submission",
      description: "Fill out all necessary fields and upload your CV."
    },
    {
      number: "3",
      title: "Browse",
      description: "Explore job opportunities tailored to your skills and interests."
    },
    {
      number: "4",
      title: "Apply",
      description: "Submit your application for the positions that match your expertise."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Automotivate
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We are the leading job portal dedicated exclusively to the automotive industry in the MENA region.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The automotive industry is driven by a network of employment paths that collectively foster its growth. Automotivate ME Careers, the MENA region's first dedicated automotive job portal, is focused on bridging top tier talent with opportunities in the sector, while helping employers find the skilled professionals they need to drive forward.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-8 mt-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-card p-6 rounded-lg border border-border hover:border-automotive-red transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-automotive-red text-automotive-red-foreground text-lg font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/register"
              className="inline-block bg-automotive-red text-automotive-red-foreground px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
