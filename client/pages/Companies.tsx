import Layout from "@/components/Layout";
import CompanyCard from "@/components/CompanyCard";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Company {
  id: string;
  domain: string;
  name: string;
  location: string;
  city: string;
  positionCount: string;
  status: "Verified";
  tradeLicense: string;
  boosted?: boolean;
}

const mockCompanies: Company[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  domain: "Domain",
  name:
    i % 3 === 0
      ? "T1 Automotive Aftermarket"
      : i % 3 === 1
        ? "Arabia Cars"
        : "Apex Auto",
  location: "UAE",
  city: "Dubai",
  positionCount:
    i % 3 === 0 ? "5 Positions remaining" : "2 Positions remaining",
  status: "Verified",
  tradeLicense: "TL-DB-2027-0321",
  boosted: i % 4 === 0,
}));

export default function Companies() {
  const [filters, setFilters] = useState({
    industry: "",
    country: "",
    domain: "",
  });

  const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetFilter = () => {
    setFilters({
      industry: "",
      country: "",
      domain: "",
    });
    setFilteredCompanies(mockCompanies);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            COMPANIES
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover verified automotive companies across the MENA region
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl border border-border sticky top-4">
                {/* Animated Logo/Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-automotive-red/20 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary/30 to-purple-500/30 p-8 rounded-full">
                      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-card-foreground mb-6 text-center">
                  Search by Keywords
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Enter Details Here"
                      value={filters.country}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter Details Here"
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Employment Type
                    </label>
                    <input
                      type="text"
                      name="industry"
                      placeholder="Enter Details Here"
                      value={filters.industry}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Gender
                    </label>
                    <input
                      type="text"
                      name="domain"
                      placeholder="Enter Details Here"
                      value={filters.domain}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Language
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Details Here"
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Driver's License
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Details Here"
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Availability
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Details Here"
                      className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setFilteredCompanies(mockCompanies)}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Companies Grid */}
            <div className="lg:col-span-4">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  COMPANIES
                </h2>
                <div className="flex gap-2 text-sm">
                  <button className="px-3 py-1 text-foreground hover:text-primary transition-colors">All</button>
                  <button className="px-3 py-1 text-foreground hover:text-primary transition-colors">Recent</button>
                  <button className="px-3 py-1 text-foreground hover:text-primary transition-colors">Trending</button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-medium">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary text-foreground">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary text-foreground">
                  3
                </button>
                <button className="px-3 py-1 text-foreground hover:text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
