// Common Types and Interfaces

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  
  // Application Details
  status: 'applied' | 'reviewed' | 'interviewed' | 'hired' | 'rejected';
  currentStage?: string;
  coverLetter?: string;
  resumeUrl?: string;
  
  // Timestamps
  appliedAt: Date;
  updatedAt: Date;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export type UserRole = 'candidate' | 'employer' | 'admin';
