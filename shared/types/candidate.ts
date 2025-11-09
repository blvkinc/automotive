// Candidate Data Models and Types

export interface Candidate {
  id: string;
  userId: string;
  
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  fatherName?: string;
  birthDate?: Date;
  gender?: 'male' | 'female';
  maritalStatus?: string;
  nationality?: string;
  nationalIdCard?: string;
  
  // Contact Information
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  fullAddress?: string;
  
  // Career Information
  experience: number;
  careerLevel?: string;
  industry?: string;
  functionalArea?: string;
  currentSalary?: number;
  expectedSalary?: number;
  salaryCurrency?: string;
  availability: 'immediate' | 'not_immediate';
  availableAt?: Date;
  
  // Skills and Languages
  skills: string[];
  languages: string[];
  
  // Social Media
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    googlePlus?: string;
    pinterest?: string;
  };
  
  // Profile Media
  profilePicture?: string;
  
  // Statistics
  profileViews: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface CandidateStats {
  profileViews: number;
  followings: number;
  resumes: number;
}

export interface CandidateProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  profilePicture?: string;
}

export interface ProfileFormData {
  // General Tab
  firstName: string;
  lastName: string;
  email: string;
  fatherName?: string;
  birthDate?: Date;
  gender?: 'male' | 'female';
  maritalStatus?: string;
  nationality?: string;
  nationalIdCard?: string;
  country: string;
  state: string;
  city: string;
  phoneNumber: string;
  
  // Career Information
  experience: number;
  careerLevel?: string;
  industry?: string;
  functionalArea?: string;
  currentSalary?: number;
  expectedSalary?: number;
  salaryCurrency?: string;
  availability: 'immediate' | 'not_immediate';
  availableAt?: Date;
  skills: string[];
  languages: string[];
  
  // Social Media
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    googlePlus?: string;
    pinterest?: string;
  };
  
  fullAddress?: string;
  profilePicture?: File;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  employerName: string;
  status: 'applied' | 'reviewed' | 'interviewed' | 'hired' | 'rejected';
  appliedDate: Date;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface FavouriteJob {
  id: string;
  jobId: string;
  jobTitle: string;
  employerName: string;
  employerEmail: string;
  dateCreated: Date;
  expiryDate: Date;
  isExpired: boolean;
}
