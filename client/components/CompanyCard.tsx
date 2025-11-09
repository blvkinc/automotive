import React from "react";
import { Link } from "react-router-dom";
import BoostBadge from "./ui/boost-badge";

interface CompanyProps {
  company: {
    id: string;
    domain: string;
    name: string;
    location: string;
    city: string;
    positionCount?: string;
    status?: "Verified" | string;
    tradeLicense?: string;
    boosted?: boolean;
  };
  compact?: boolean;
}

export default function CompanyCard({
  company,
  compact = false,
}: CompanyProps) {
  return (
    <Link
      to={`/company/${company.id}`}
      className={`group block bg-card rounded-xl transition-all hover:shadow-lg ${company.boosted ? "border-2 border-automotive-red shadow-md" : "border border-border hover:border-automotive-red/50"} p-5`}
    >
      <div className="flex items-start gap-4">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-automotive-red/20 to-purple-500/20 flex items-center justify-center text-foreground font-bold text-lg border border-border">
            {company.name.split(" ")[0].slice(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-automotive-red transition-colors mb-1">
                {company.name}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">
                  {company.domain}
                </span>
                {company.status === "Verified" && (
                  <span className="inline-flex items-center gap-1 bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full text-xs font-medium border border-cyan-500/30">
                    Verified
                  </span>
                )}
              </div>
            </div>

            {/* Bookmark */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="p-2 rounded-lg hover:bg-automotive-gray transition-colors"
              aria-label="bookmark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-muted-foreground hover:text-automotive-red transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
            <div className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{company.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-xs">{company.tradeLicense ?? "TL-DB-2027-0321"}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 text-cyan-400 px-3 py-1.5 rounded-lg text-sm font-medium border border-cyan-500/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {company.positionCount ?? "5 Positions remaining"}
            </span>
            {company.boosted && (
              <span className="inline-flex items-center gap-1 bg-automotive-red text-automotive-red-foreground px-3 py-1.5 rounded-lg text-sm font-semibold">
                Boosted
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
