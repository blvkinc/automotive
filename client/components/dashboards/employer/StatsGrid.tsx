import StatsCard from "@/components/dashboards/shared/StatsCard";
import { EmployerStats } from "@shared/types";
import { Briefcase, Play, Pause, X, Users, FileText } from "lucide-react";

interface StatsGridProps {
  stats: EmployerStats;
  isLoading?: boolean;
}

export default function StatsGrid({ stats, isLoading = false }: StatsGridProps) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
      <StatsCard
        label="Total Jobs"
        value={stats.totalJobs}
        icon={<Briefcase className="h-5 w-5" />}
        isLoading={isLoading}
      />
      <StatsCard
        label="Live Jobs"
        value={stats.liveJobs}
        icon={<Play className="h-5 w-5" />}
        isLoading={isLoading}
      />
      <StatsCard
        label="Paused Jobs"
        value={stats.pausedJobs}
        icon={<Pause className="h-5 w-5" />}
        isLoading={isLoading}
      />
      <StatsCard
        label="Closed Jobs"
        value={stats.closedJobs}
        icon={<X className="h-5 w-5" />}
        isLoading={isLoading}
      />
      <StatsCard
        label="Followers"
        value={stats.followers}
        icon={<Users className="h-5 w-5" />}
        isLoading={isLoading}
      />
      <StatsCard
        label="Total Applications"
        value={stats.totalApplications}
        icon={<FileText className="h-5 w-5" />}
        isLoading={isLoading}
      />
    </div>
  );
}
