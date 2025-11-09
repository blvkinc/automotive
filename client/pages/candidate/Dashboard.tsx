import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import ProfileCard from "@/components/dashboards/candidate/ProfileCard";
import StatsCard from "@/components/dashboards/shared/StatsCard";
import { Eye, Users, FileText } from "lucide-react";
import { mockCandidateProfile, mockCandidateStats } from "../../../shared/mock-data/candidate";

const navItems = [
  { label: "Dashboard", path: "/candidate/dashboard" },
  { label: "Profile", path: "/candidate/profile" },
  { label: "Favourite Jobs", path: "/candidate/favourites" },
  { label: "Followings", path: "/candidate/followings" },
  { label: "Applied Jobs", path: "/candidate/applied-jobs" },
  { label: "Job Alerts", path: "/candidate/job-alerts" },
];

export default function CandidateDashboard() {
  return (
    <DashboardLayout
      userType="candidate"
      nav={
        <DashboardNav
          items={navItems}
          userType="candidate"
          notificationCount={3}
        />
      }
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your job search activity.
          </p>
        </div>

        {/* Profile Card */}
        <ProfileCard profile={mockCandidateProfile} />

        {/* Statistics Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            label="Profile Views"
            value={mockCandidateStats.profileViews}
            icon={<Eye className="h-5 w-5" />}
          />
          <StatsCard
            label="Followings"
            value={mockCandidateStats.followings}
            icon={<Users className="h-5 w-5" />}
          />
          <StatsCard
            label="Resumes"
            value={mockCandidateStats.resumes}
            icon={<FileText className="h-5 w-5" />}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
