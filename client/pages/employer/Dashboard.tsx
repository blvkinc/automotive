import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import StatsGrid from "@/components/dashboards/employer/StatsGrid";
import ApplicationsChart from "@/components/dashboards/employer/ApplicationsChart";
import { mockEmployerStats, mockApplicationTrends, mockJobs } from "@shared/mock-data/employer";
import { useState } from "react";
import { ChartFilters } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployerDashboard() {
  const stats = mockEmployerStats;
  const hasJobs = stats.totalJobs > 0;

  const [filters, setFilters] = useState<ChartFilters>({
    gender: 'all',
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 30)),
      end: new Date(),
    },
  });

  const navItems = [
    { label: "Dashboard", path: "/employer/dashboard" },
    { label: "Employer Profile", path: "/employer/profile" },
    { label: "Jobs", path: "/employer/jobs" },
    { label: "Job Stages", path: "/employer/job-stages" },
    { label: "Followers", path: "/employer/followers" },
  ];

  return (
    <DashboardLayout
      userType="employer"
      nav={<DashboardNav items={navItems} currentPath="/employer/dashboard" userType="employer" />}
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your hiring activity.
          </p>
        </div>

        {hasJobs ? (
          <>
            <StatsGrid stats={stats} />
            <ApplicationsChart
              data={mockApplicationTrends}
              filters={filters}
              onFilterChange={setFilters}
              jobs={mockJobs}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
              <Briefcase className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No jobs posted yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start your hiring journey by creating your first job posting. Attract top talent and grow your team.
            </p>
            <Button asChild size="lg">
              <Link to="/employer/jobs">Create Your First Job</Link>
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
