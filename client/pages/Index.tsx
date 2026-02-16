import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import JobCard from "@/components/JobCard";
import CompanyCard from "@/components/CompanyCard";

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

const mockJobs: JobListing[] = [
  {
    id: "1",
    department: "Department",
    title: "Protective Service Worker",
    location: "UAE",
    city: "Dubai",
    timeAgo: "22 Hours Ago",
    daysLeft: "5 days left",
    positionCount: "Positions Count",
    status: "Live",
  },
  {
    id: "2",
    department: "Department",
    title: "Protective Service Worker",
    location: "UAE",
    city: "Dubai",
    timeAgo: "22 Hours Ago",
    daysLeft: "5 days left",
    positionCount: "Positions Count",
    status: "Boosted",
  },
  {
    id: "3",
    department: "Department",
    title: "Protective Service Worker",
    location: "UAE",
    city: "Dubai",
    timeAgo: "22 Hours Ago",
    daysLeft: "5 days left",
    positionCount: "Positions Count",
    status: "Live",
  },
  {
    id: "4",
    department: "Department",
    title: "Protective Service Worker",
    location: "UAE",
    city: "Dubai",
    timeAgo: "22 Hours Ago",
    daysLeft: "1 day left",
    positionCount: "Positions Count",
    status: "Live",
  },
];

const mockCompanies: Company[] = [
  {
    id: "1",
    domain: "Domain",
    name: "Automotivate Me",
    location: "UAE",
    city: "Dubai",
    positionCount: "5 Positions remaining",
    status: "Verified",
    tradeLicense: "Trade License Info",
    boosted: true,
  },
  {
    id: "2",
    domain: "Domain",
    name: "T1 Automotive Aftermarket",
    location: "UAE",
    city: "Dubai",
    positionCount: "3 Positions remaining",
    status: "Verified",
    tradeLicense: "TL-DB-2027-0321",
    boosted: false,
  },
  {
    id: "3",
    domain: "Domain",
    name: "Apex Auto",
    location: "UAE",
    city: "Dubai",
    positionCount: "2 Positions remaining",
    status: "Verified",
    tradeLicense: "TL-DB-2027-0322",
    boosted: true,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Your next job in automotive is<br />a click away
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Browse through what drives your career path forward
          </p>

          {/* Search Form */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-2xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-left">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  placeholder="Finance, Freelance, Tech Lead"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  City
                </label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red">
                  <option>All</option>
                  <option>Dubai</option>
                  <option>Sharjah</option>
                  <option>Abu Dhabi</option>
                </select>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Country
                </label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red">
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Egypt</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-lg">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Featured Jobs
            </h2>
            <Link
              to="/jobs"
              className="text-primary hover:underline text-sm md:text-base font-medium"
            >
              Browse More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.slice(0, 6).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Jobs Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Trending Jobs
            </h2>
            <Link
              to="/jobs"
              className="text-primary hover:underline text-sm md:text-base font-medium"
            >
              Browse More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockJobs.map((job) => (
              <JobCard key={`trending-${job.id}`} job={job} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Recent Jobs
            </h2>
            <Link
              to="/jobs"
              className="text-primary hover:underline text-sm md:text-base font-medium"
            >
              Browse More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockJobs.map((job) => (
              <JobCard key={`recent-${job.id}`} job={job} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Verified Companies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Verified Companies
            </h2>
            <Link
              to="/companies"
              className="text-primary hover:underline text-sm md:text-base"
            >
              Browse More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Fast Track Your Job Search For Free
          </h2>
          <p className="text-xl text-automotive-red-foreground/90 mb-8">
            Register yourself and get access to exclusive automotive job opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register-candidate"
              className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors shadow-lg"
            >
              Register Now For Free
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
