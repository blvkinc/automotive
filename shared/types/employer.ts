// Employer Data Models and Types

export interface Employer {
  id: string;
  userId: string;
  
  // Company Information
  name: string;
  email: string;
  phone: string;
  ceoName?: string;
  industry?: string;
  ownershipType?: string;
  companySize?: string;
  establishedIn?: number;
  employerDetails?: string;
  
  // Location Information
  country: string;
  state: string;
  city: string;
  location: string;
  secondOfficeLocation?: string;
  numberOfOffices?: number;
  
  // Contact Information
  websiteUrl?: string;
  fax?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    googlePlus?: string;
    pinterest?: string;
  };
  
  // Status
  isFeatured: boolean;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface EmployerStats {
  totalJobs: number;
  liveJobs: number;
  pausedJobs: number;
  closedJobs: number;
  followers: number;
  totalApplications: number;
}

export interface EmployerProfileData {
  name: string;
  email: string;
  phone: string;
  ceoName?: string;
  industry?: string;
  ownershipType?: string;
  companySize?: string;
  country: string;
  state: string;
  city: string;
  establishedIn?: number;
  employerDetails?: string;
  location: string;
  secondOfficeLocation?: string;
  numberOfOffices?: number;
  websiteUrl?: string;
  fax?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    googlePlus?: string;
    pinterest?: string;
  };
  isFeatured: boolean;
}

export interface Job {
  id: string;
  employerId: string;
  
  // Job Information
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  
  // Job Details
  industry: string;
  functionalArea: string;
  careerLevel: string;
  experience: number;
  
  // Salary Information
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  salaryPeriod?: string;
  
  // Location
  country: string;
  state: string;
  city: string;
  
  // Status and Dates
  status: 'active' | 'paused' | 'suspended' | 'closed';
  isFeatured: boolean;
  expiryDate: Date;
  
  // Statistics
  applicationCount: number;
  viewCount: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface JobStage {
  id: string;
  employerId: string;
  name: string;
  description: string;
  order: number;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApplicationTrend {
  date: Date;
  count: number;
  gender?: 'male' | 'female';
  jobId?: string;
}

export interface ChartFilters {
  jobId?: string;
  gender?: 'male' | 'female' | 'all';
  dateRange: {
    start: Date;
    end: Date;
  };
}
