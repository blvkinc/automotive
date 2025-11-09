import React from "react";
import { Link } from "react-router-dom";
import BoostBadge from "./ui/boost-badge";

interface JobProps {
  job: {
    id: string;
    department: string;
    title: string;
    location: string;
    city: string;
    timeAgo?: string;
    daysLeft?: string;
    positionCount?: string;
    status?: "Live" | "Boosted";
  };
  compact?: boolean;
}

export default function JobCard({ job, compact = false }: JobProps) {
  return (
    <Link
      to={`/job/${job.id}`}
      className={`block bg-card rounded-lg transition-colors group ${job.status === "Boosted" ? "border-2 border-automotive-red shadow-lg" : "border border-border"} ${compact ? "p-4" : "p-6"}`}
    >
      <div
        className={`relative ${compact ? "flex items-center gap-4" : "flex flex-col md:flex-row md:justify-between md:items-start gap-4"}`}
      >
        {/* Left visual accent for jobs */}
        <div
          className={`flex-1 ${compact ? "flex items-center gap-3" : "flex-1"}`}
        >
          <div className="flex items-start md:items-center gap-3">
            <div className="hidden md:block w-1.5 h-12 rounded bg-automotive-red mr-3" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">
                  {job.department}
                </span>
              </div>

              <h3
                className={`text-lg font-semibold text-card-foreground group-hover:text-automotive-red transition-colors ${compact ? "text-base" : "text-lg"}`}
              >
                {job.title}
              </h3>

              <div className="text-sm text-muted-foreground">
                {job.location} {job.city}
              </div>
            </div>
          </div>
        </div>

        {/* Right side meta */}
        <div
          className={`flex-shrink-0 flex flex-col items-start md:items-end text-sm text-muted-foreground ${compact ? "ml-auto" : ""}`}
        >
          {job.timeAgo && <span className="mb-1">{job.timeAgo}</span>}
          {job.daysLeft && (
            <span className="text-automotive-red font-semibold">
              {job.daysLeft}
            </span>
          )}
        </div>

        {/* Boost badge - visually distinctive */}
        {job.status === "Boosted" && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center space-x-2">
            <BoostBadge showLabel={true} />
          </div>
        )}
      </div>

      {/* Footer line for compact cards */}
      {compact && (
        <div className="mt-3 text-xs text-muted-foreground flex justify-between">
          <span>{job.positionCount}</span>
          {job.status === "Boosted" ? (
            <span className="text-automotive-red font-semibold">Boosted</span>
          ) : (
            <span className="text-muted-foreground">{job.status}</span>
          )}
        </div>
      )}
    </Link>
  );
}
