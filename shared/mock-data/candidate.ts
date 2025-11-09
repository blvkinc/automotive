// Mock data for Candidate UI development
import type { 
  Candidate, 
  CandidateStats, 
  CandidateProfile, 
  JobApplication, 
  FavouriteJob 
} from '../types';

export const mockCandidateProfile: CandidateProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY, USA',
  profilePicture: '/placeholder.svg',
};

export const mockCandidateStats: CandidateStats = {
  profileViews: 245,
  followings: 12,
  resumes: 3,
};

export const mockCandidate: Candidate = {
  id: '1',
  userId: 'user-1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  fatherName: 'James Doe',
  birthDate: new Date('1990-05-15'),
  gender: 'male',
  maritalStatus: 'Single',
  nationality: 'American',
  nationalIdCard: '123-45-6789',
  phoneNumber: '+1 (555) 123-4567',
  country: 'United States',
  state: 'New York',
  city: 'New York',
  fullAddress: '123 Main Street, Apt 4B, New York, NY 10001',
  experience: 5,
  careerLevel: 'Mid-Level',
  industry: 'Technology',
  functionalArea: 'Software Development',
  currentSalary: 85000,
  expectedSalary: 100000,
  salaryCurrency: 'USD',
  availability: 'immediate',
  availableAt: new Date(),
  skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'],
  languages: ['English', 'Spanish'],
  socialMedia: {
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  profilePicture: '/placeholder.svg',
  profileViews: 245,
  createdAt: new Date('2023-01-15'),
  updatedAt: new Date('2024-11-01'),
};

export const mockJobApplications: JobApplication[] = [
  {
    id: '1',
    jobId: 'job-1',
    jobTitle: 'Senior Frontend Developer',
    employerName: 'Tech Corp',
    status: 'reviewed',
    appliedDate: new Date('2024-10-15'),
    salary: {
      min: 90000,
      max: 120000,
      currency: 'USD',
    },
  },
  {
    id: '2',
    jobId: 'job-2',
    jobTitle: 'Full Stack Engineer',
    employerName: 'StartupXYZ',
    status: 'applied',
    appliedDate: new Date('2024-10-20'),
    salary: {
      min: 80000,
      max: 110000,
      currency: 'USD',
    },
  },
  {
    id: '3',
    jobId: 'job-3',
    jobTitle: 'React Developer',
    employerName: 'Digital Agency',
    status: 'interviewed',
    appliedDate: new Date('2024-10-10'),
    salary: {
      min: 75000,
      max: 95000,
      currency: 'USD',
    },
  },
  {
    id: '4',
    jobId: 'job-4',
    jobTitle: 'Software Engineer',
    employerName: 'Enterprise Solutions',
    status: 'rejected',
    appliedDate: new Date('2024-09-25'),
    salary: {
      min: 85000,
      max: 105000,
      currency: 'USD',
    },
  },
  {
    id: '5',
    jobId: 'job-5',
    jobTitle: 'Lead Developer',
    employerName: 'Innovation Labs',
    status: 'hired',
    appliedDate: new Date('2024-09-15'),
    salary: {
      min: 110000,
      max: 140000,
      currency: 'USD',
    },
  },
];

export const mockFavouriteJobs: FavouriteJob[] = [
  {
    id: '1',
    jobId: 'job-6',
    jobTitle: 'Senior Backend Developer',
    employerName: 'Cloud Systems Inc',
    employerEmail: 'hr@cloudsystems.com',
    dateCreated: new Date('2024-10-01'),
    expiryDate: new Date('2024-12-01'),
    isExpired: false,
  },
  {
    id: '2',
    jobId: 'job-7',
    jobTitle: 'DevOps Engineer',
    employerName: 'Infrastructure Co',
    employerEmail: 'jobs@infrastructure.com',
    dateCreated: new Date('2024-09-15'),
    expiryDate: new Date('2024-11-15'),
    isExpired: false,
  },
  {
    id: '3',
    jobId: 'job-8',
    jobTitle: 'Mobile App Developer',
    employerName: 'App Studio',
    employerEmail: 'careers@appstudio.com',
    dateCreated: new Date('2024-08-20'),
    expiryDate: new Date('2024-10-20'),
    isExpired: true,
  },
  {
    id: '4',
    jobId: 'job-9',
    jobTitle: 'UI/UX Developer',
    employerName: 'Design House',
    employerEmail: 'hiring@designhouse.com',
    dateCreated: new Date('2024-10-10'),
    expiryDate: new Date('2024-12-10'),
    isExpired: false,
  },
];
