import React, { useState } from "react";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";
import { Link } from "react-router-dom";

interface JobListing {
  id: string;
  department: string;
  title: string;
  location: string;
  city: string;
  timeAgo: string;
  daysLeft: string;
  positionCount: string;
  status: "Live" | "Boosted";
}

const mockJobs: JobListing[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  department: "Department",
  title: "Protective Service Worker",
  location: "UAE",
  city: "Dubai",
  timeAgo: `${5 - (i % 5)} Hours Ago`,
  daysLeft: `${5 - (i % 5)} days left`,
  positionCount: "Positions Count",
  status: (i % 3 === 0 ? "Boosted" : "Live") as "Boosted" | "Live",
})).sort((a, b) => (a.status === "Boosted" ? -1 : 1));

export default function Jobs() {
  const [filters, setFilters] = useState({
    department: "",
    sector: "",
    employmentType: "",
    gender: "",
    language: "",
    license: "",
    availability: "",
    keywords: "",
  });

  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilter = () => {
    setFilters({
      department: "",
      sector: "",
      employmentType: "",
      gender: "",
      language: "",
      license: "",
      availability: "",
      keywords: "",
    });
    setFilteredJobs(mockJobs);
  };

  return (
    <Layout>
      <section className="bg-background py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the best opportunities in the automotive industry
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl border border-border sticky top-4">
                {/* Hero Image */}
                <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-card-foreground mb-6">Search by Keywords</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Department</label>
                    <input name="department" value={filters.department} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Sector</label>
                    <input name="sector" value={filters.sector} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Employment Type</label>
                    <input name="employmentType" value={filters.employmentType} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Gender</label>
                    <input name="gender" value={filters.gender} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Language</label>
                    <input name="language" value={filters.language} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Driver's License</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFilters(prev => ({ ...prev, license: "yes" }))}
                        className={`flex-1 px-3 py-2.5 rounded-lg font-medium transition-colors ${filters.license === "yes" ? "bg-automotive-red text-automotive-red-foreground" : "bg-input border border-border text-foreground hover:border-automotive-red"}`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFilters(prev => ({ ...prev, license: "no" }))}
                        className={`flex-1 px-3 py-2.5 rounded-lg font-medium transition-colors ${filters.license === "no" ? "bg-automotive-red text-automotive-red-foreground" : "bg-input border border-border text-foreground hover:border-automotive-red"}`}
                      >
                        No
                      </button>
                      <button
                        type="button"
                        onClick={() => setFilters(prev => ({ ...prev, license: "select-region" }))}
                        className={`flex-1 px-3 py-2.5 rounded-lg font-medium transition-colors ${filters.license === "select-region" ? "bg-automotive-red text-automotive-red-foreground" : "bg-input border border-border text-foreground hover:border-automotive-red"}`}
                      >
                        Select Region
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Availability</label>
                    <input name="availability" value={filters.availability} onChange={handleFilterChange} placeholder="Enter Details Here" className="w-full px-3 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red" />
                  </div>

                  <div className="pt-4">
                    <button onClick={() => setFilteredJobs(mockJobs)} type="button" className="w-full bg-automotive-red text-automotive-red-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">Recent Trending Jobs</h2>
              </div>

              <div className="space-y-6">
                {/* Featured Jobs Section */}
                {filteredJobs.some(job => job.status === "Boosted") && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Featured Opportunities
                    </h3>
                    <div className="space-y-4">
                      {filteredJobs
                        .filter(job => job.status === "Boosted")
                        .map((job) => (
                          <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                  </div>
                )}

                {/* Other Jobs Section */}
                <div className="space-y-4">
                  {filteredJobs.some(job => job.status === "Boosted") && (
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mt-8">
                      Latest Openings
                    </h3>
                  )}
                  {filteredJobs
                    .filter(job => job.status !== "Boosted")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 mt-8">
                <button className="px-3 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">1</button>
                <button className="px-3 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">2</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
