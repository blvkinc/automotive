// Component Props Interfaces
import type { ReactNode } from 'react';
import type { 
  CandidateProfile, 
  CandidateStats, 
  JobApplication, 
  FavouriteJob 
} from './candidate';
import type { 
  EmployerStats, 
  Job, 
  JobStage, 
  ApplicationTrend, 
  ChartFilters 
} from './employer';
import type { Notice, ConfigEntry, ConfigType, AdminNavItem } from './admin';
import type { UserRole } from './common';

// Shared Component Props
export interface DashboardLayoutProps {
  children: ReactNode;
  userType: UserRole;
  showSidebar?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: ReactNode;
}

export interface DashboardNavProps {
  items: NavItem[];
  currentPath: string;
  userType: UserRole;
  notificationCount?: number;
  onThemeToggle: () => void;
}

export interface StatsCardProps {
  label: string;
  value: number;
  icon?: ReactNode;
  isLoading?: boolean;
}

// Candidate Component Props
export interface ProfileCardProps {
  profile: CandidateProfile;
  onEditClick: () => void;
}

export interface CandidateDashboardProps {
  // No props - uses auth context for user ID
}

export interface AppliedJobsPageState {
  applications: JobApplication[];
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  filterStatus: string;
}

export interface JobApplicationCardProps {
  application: JobApplication;
  onClick: (jobId: string) => void;
}

export interface FavouriteJobsTableProps {
  jobs: FavouriteJob[];
  onRemoveFavourite: (jobId: string) => void;
  onJobClick: (jobId: string) => void;
}

// Employer Component Props
export interface StatsGridProps {
  stats: EmployerStats;
  isLoading?: boolean;
}

export interface ApplicationsChartProps {
  data: ApplicationTrend[];
  filters: ChartFilters;
  onFilterChange: (filters: ChartFilters) => void;
  isLoading?: boolean;
}

export interface JobListProps {
  jobs: Job[];
  onEdit: (jobId: string) => void;
  onDelete: (jobId: string) => void;
  onViewApplications: (jobId: string) => void;
  onToggleFeatured: (jobId: string, featured: boolean) => void;
}

export interface JobStageManagerProps {
  stages: JobStage[];
  onAdd: (stage: Omit<JobStage, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onEdit: (stage: JobStage) => void;
  onDelete: (stageId: string) => void;
}

// Admin Component Props
export interface AdminSidebarProps {
  currentPath: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  adminName: string;
  adminRole: string;
}

export interface NoticeBoardManagerProps {
  notices: Notice[];
  onAdd: (notice: Omit<Notice, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onEdit: (notice: Notice) => void;
  onDelete: (noticeId: string) => void;
  onToggleStatus: (noticeId: string, isActive: boolean) => void;
}

export interface ConfigManagerProps {
  type: ConfigType;
  entries: ConfigEntry[];
  onAdd: (value: string) => void;
  onEdit: (entry: ConfigEntry) => void;
  onDelete: (entryId: string) => void;
}
