// Admin Data Models and Types

export interface Admin {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  targetAudience: 'all' | 'candidates' | 'employers';
  createdAt: Date;
  updatedAt: Date;
}

export type ConfigType = 'maritalStatus' | 'skills' | 'salaryPeriods' | 'industries' | 'companySizes';

export interface ConfigEntry {
  id: string;
  type: ConfigType;
  value: string;
  isActive: boolean;
  usageCount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminNavItem {
  label: string;
  path: string;
  icon?: string;
  children?: AdminNavItem[];
}
