import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface Package {
  id: string;
  name: string;
  jobs: number;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const packages: Package[] = [
  {
    id: "single",
    name: "Single Post",
    jobs: 1,
    price: 249,
    duration: "45 days",
    description: "Perfect for testing the platform",
    features: [
      "1 job posting",
      "45 days validity",
      "Basic job listing",
      "Email support"
    ],
    cta: "Get Started"
  },
  {
    id: "quick",
    name: "Quick",
    jobs: 3,
    price: 699,
    duration: "45 days",
    description: "Great for small recruitment needs",
    features: [
      "3 job postings",
      "45 days validity",
      "Basic job listings",
      "Email support",
      "Job analytics"
    ],
    cta: "Choose Plan"
  },
  {
    id: "professional",
    name: "Professional",
    jobs: 5,
    price: 1149,
    duration: "45 days",
    description: "Ideal for growing teams",
    features: [
      "5 job postings",
      "45 days validity",
      "Premium job listings",
      "Priority email support",
      "Job analytics",
      "Candidate management"
    ],
    popular: true,
    cta: "Choose Plan"
  },
  {
    id: "business",
    name: "Business",
    jobs: 10,
    price: 2289,
    duration: "45 days",
    description: "For established companies",
    features: [
      "10 job postings",
      "45 days validity",
      "Premium job listings",
      "24/7 support",
      "Advanced analytics",
      "Candidate management",
      "API access"
    ],
    cta: "Choose Plan"
  }
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 px-4 border-b border-border text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that best fits your recruitment needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-lg transition-all duration-300 ${pkg.popular
                    ? "ring-2 ring-automotive-red lg:scale-105 bg-card border border-automotive-red"
                    : "bg-card border border-border hover:border-automotive-red"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-automotive-red text-automotive-red-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-automotive-red">
                        AED {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground ml-2">/ {pkg.duration}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {pkg.jobs} {pkg.jobs === 1 ? "job posting" : "job postings"}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/checkout/${pkg.id}`}
                    className={`block w-full text-center py-3 rounded font-semibold mb-8 transition-colors ${pkg.popular
                        ? "bg-automotive-red text-automotive-red-foreground hover:bg-opacity-90"
                        : "border border-automotive-red text-automotive-red hover:bg-automotive-red hover:text-automotive-red-foreground"
                      }`}
                  >
                    {pkg.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-automotive-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="bg-automotive-gray py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need More?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Looking for larger volumes or custom solutions? Contact our enterprise team for a tailored quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-automotive-red text-automotive-red-foreground px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Featured Add-on */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Boost Your Listings
          </h2>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Featured Listing Add-on
                </h3>
                <p className="text-muted-foreground mb-4">
                  Make your job stand out from the crowd with our featured listing option. Featured jobs receive:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-automotive-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Premium placement on homepage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-automotive-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Highlighted badge on all listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-automotive-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Top search results placement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-automotive-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">45 days or job duration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-automotive-gray p-6 rounded-lg text-center">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-automotive-red">AED 125</span>
                  <span className="text-muted-foreground block mt-2">per listing</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Add featured status when purchasing a package or creating a job
                </p>
                <button className="w-full bg-automotive-red text-automotive-red-foreground py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-automotive-gray py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long are job postings valid?",
                a: "All packages include 45 days of validity from the purchase date. You can renew packages anytime."
              },
              {
                q: "Can I use multiple packages simultaneously?",
                a: "Yes, you can purchase multiple packages and they will stack, giving you more job posting slots."
              },
              {
                q: "Can I extend a job posting?",
                a: "Yes, you can purchase additional credits or packages to extend existing job postings."
              },
              {
                q: "Is there a refund policy?",
                a: "We offer refunds within 7 days of purchase if no jobs have been posted. Contact our support team for details."
              },
              {
                q: "Can I upgrade my package?",
                a: "Yes, you can upgrade to a higher package anytime. We'll credit the difference to your account."
              },
              {
                q: "Do you offer discounts for annual payments?",
                a: "Yes, contact our sales team to discuss annual or bulk purchase discounts."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
