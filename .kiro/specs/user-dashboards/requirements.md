# Requirements Document

## Introduction

This document outlines the requirements for implementing comprehensive dashboard functionality for the InfyJobs web application. The system serves three distinct user personas: Candidates (job seekers), Employers (hiring companies), and Super Admins (system administrators). Each persona requires a tailored dashboard experience with role-specific features for profile management, job interactions, and system administration.

The dashboards will provide users with personalized views of their data, statistics, and actions relevant to their role. Candidates can manage their profiles and job applications, Employers can manage company profiles and job postings, and Super Admins can configure system-wide settings and content.

## Requirements

### Requirement 1: Candidate Dashboard

**User Story:** As a candidate, I want to view my personal dashboard with my profile information and key statistics, so that I can quickly see my job search activity and profile engagement.

#### Acceptance Criteria

1. WHEN a candidate navigates to their dashboard THEN the system SHALL display a personal information card containing their name, phone number, location, and email address
2. WHEN the personal information card is displayed THEN the system SHALL provide an "Edit Profile" action button
3. WHEN the dashboard loads THEN the system SHALL display three statistical metrics: Profile Views count, Followings count, and Resumes count
4. WHEN the candidate clicks "Edit Profile" THEN the system SHALL navigate to the profile management page
5. IF the candidate has no profile data THEN the system SHALL display placeholder values or prompts to complete their profile

### Requirement 2: Candidate Profile Management

**User Story:** As a candidate, I want to manage my complete professional profile through an organized interface, so that I can present my qualifications effectively to potential employers.

#### Acceptance Criteria

1. WHEN a candidate accesses profile management THEN the system SHALL display a multi-tabbed interface with tabs: General, Resume, Career Informations, and CV Builder
2. WHEN the General tab is active THEN the system SHALL display form fields for: First Name, Last Name, Email, Father Name, Birth Date, Gender, Marital Status, Nationality, National ID Card, Country, State, City, Phone Number, Experience (years), Career Level, Industry, Functional Area, Current Salary, Expected Salary, Salary Currency, Availability status, Available At date, Skills (tag-based), Languages (multi-select), Social Media URLs (Facebook, Twitter, LinkedIn, Google Plus, Pinterest), Full Address, and Profile Picture
3. WHEN a candidate enters skills THEN the system SHALL provide a tag-based input allowing multiple skills to be added and removed
4. WHEN a candidate selects languages THEN the system SHALL allow multiple language selections
5. WHEN a candidate uploads a profile picture THEN the system SHALL validate the file type and size, and display a preview
6. WHEN a candidate saves their profile THEN the system SHALL validate all required fields and display appropriate error messages for invalid data
7. WHEN profile data is successfully saved THEN the system SHALL display a success notification and update the dashboard information
8. IF a dropdown field is required THEN the system SHALL populate it with appropriate options from the system configuration

### Requirement 3: Candidate Applied Jobs Management

**User Story:** As a candidate, I want to view and manage all jobs I have applied for, so that I can track my application status and follow up appropriately.

#### Acceptance Criteria

1. WHEN a candidate navigates to Applied Jobs THEN the system SHALL display a paginated grid of all submitted job applications
2. WHEN displaying each applied job THEN the system SHALL show: Job Title, Application Status (e.g., "Hired", "Applied"), Date of Application, Offered Salary/Salary Range, and Employer Name
3. WHEN the applied jobs list contains more than the page limit THEN the system SHALL provide pagination controls
4. WHEN a candidate uses the search bar THEN the system SHALL filter applied jobs by job title or employer name
5. WHEN a candidate selects a filter option THEN the system SHALL update the displayed jobs to match the filter criteria
6. WHEN a candidate clicks on an applied job THEN the system SHALL navigate to the job detail page
7. IF the candidate has no applied jobs THEN the system SHALL display an empty state with a call-to-action to browse jobs

### Requirement 4: Candidate Favourite Jobs Management

**User Story:** As a candidate, I want to save and manage my favourite job listings, so that I can easily return to jobs I'm interested in and apply when ready.

#### Acceptance Criteria

1. WHEN a candidate navigates to Favourite Jobs THEN the system SHALL display a paginated list of all bookmarked jobs
2. WHEN displaying each favourite job THEN the system SHALL show: Job Title, Employer Name, Employer Email, Date Created, and Job Expiry Date
3. WHEN a candidate clicks the bookmark action icon THEN the system SHALL remove the job from the favourites list and display a confirmation notification
4. WHEN the favourites list contains more than the page limit THEN the system SHALL provide pagination controls
5. WHEN a candidate clicks on a favourite job THEN the system SHALL navigate to the job detail page
6. IF the candidate has no favourite jobs THEN the system SHALL display an empty state with a call-to-action to browse jobs
7. WHEN a job expiry date has passed THEN the system SHALL visually indicate the job is expired

### Requirement 5: Candidate Navigation and Common Features

**User Story:** As a candidate, I want consistent navigation and access to key features across all pages, so that I can efficiently move between different sections of my account.

#### Acceptance Criteria

1. WHEN a candidate is logged in THEN the system SHALL display a persistent top navigation bar on all candidate pages
2. WHEN the navigation bar is displayed THEN the system SHALL provide links to: Dashboard, Profile, Favourite Jobs, Followings, Applied Jobs, and Job Alerts
3. WHEN the navigation bar is displayed THEN the system SHALL provide a Light/Dark Mode toggle
4. WHEN the navigation bar is displayed THEN the system SHALL provide a Notifications icon with unread count badge
5. WHEN a candidate clicks the theme toggle THEN the system SHALL switch between light and dark themes and persist the preference
6. WHEN a candidate clicks the notifications icon THEN the system SHALL display a dropdown with recent notifications
7. WHEN the current page matches a navigation link THEN the system SHALL highlight that link as active

### Requirement 6: Employer Dashboard

**User Story:** As an employer, I want to view my company dashboard with job statistics and application trends, so that I can monitor my hiring activity and make data-driven decisions.

#### Acceptance Criteria

1. WHEN an employer navigates to their dashboard THEN the system SHALL display six statistical summary cards: Total Jobs, Live Jobs, Paused Jobs, Closed Jobs, Followers, and Total Job Applications
2. WHEN the dashboard loads THEN the system SHALL display a "Job Applications" graph visualizing application trends over time
3. WHEN the applications graph is displayed THEN the system SHALL provide filter controls for: Specific Job (dropdown), Gender (dropdown), and Date Range (date picker)
4. WHEN an employer applies a filter to the graph THEN the system SHALL update the visualization to reflect the filtered data
5. WHEN an employer hovers over a data point on the graph THEN the system SHALL display a tooltip with detailed information
6. IF an employer has no jobs posted THEN the system SHALL display an empty state with a call-to-action to create their first job posting
7. WHEN statistical cards are displayed THEN the system SHALL update the counts in real-time as data changes

### Requirement 7: Employer Profile Management

**User Story:** As an employer, I want to create and manage my company profile, so that candidates can learn about my organization and make informed decisions about applying.

#### Acceptance Criteria

1. WHEN an employer accesses profile management THEN the system SHALL display a form with fields for: Name, Email, Phone, CEO Name, Industry, Ownership Type, Company Size, Country, State, City, Established In (year), Employer Details (rich text), Location (Address), 2nd Office Location, No. of Offices, Website URL, Fax, and Social Media URLs (Facebook, Twitter, LinkedIn, Google Plus, Pinterest)
2. WHEN the Employer Details field is active THEN the system SHALL provide a rich text editor with formatting options (bold, italic, lists, links)
3. WHEN an employer enters the Established In year THEN the system SHALL validate it is a valid year not in the future
4. WHEN an employer enters a Website URL THEN the system SHALL validate it is a properly formatted URL
5. WHEN the profile form is displayed THEN the system SHALL provide a "Make Featured" toggle option
6. WHEN an employer saves their profile THEN the system SHALL validate all required fields and display appropriate error messages
7. WHEN profile data is successfully saved THEN the system SHALL display a success notification
8. IF dropdown fields are required THEN the system SHALL populate them with options from system configuration

### Requirement 8: Employer Job Management

**User Story:** As an employer, I want to manage all my job postings in one place, so that I can efficiently create, edit, and monitor my job listings.

#### Acceptance Criteria

1. WHEN an employer navigates to Jobs THEN the system SHALL display a paginated list of all posted jobs
2. WHEN displaying each job in the list THEN the system SHALL show: Job Title, Expiry Date, Number of Job Applications, Featured Job status (toggle), and Status (e.g., "Suspended")
3. WHEN the jobs list is displayed THEN the system SHALL provide a search bar to filter jobs by title
4. WHEN the jobs list is displayed THEN the system SHALL provide an "Add New Job" button
5. WHEN an employer clicks "Add New Job" THEN the system SHALL navigate to the job creation form
6. WHEN displaying each job THEN the system SHALL provide action buttons for: View Applications, Edit Job, and Delete Job
7. WHEN an employer clicks "View Applications" THEN the system SHALL navigate to the applications list for that job
8. WHEN an employer clicks "Edit Job" THEN the system SHALL navigate to the job editing form with pre-filled data
9. WHEN an employer clicks "Delete Job" THEN the system SHALL display a confirmation dialog before deletion
10. WHEN an employer toggles the Featured Job status THEN the system SHALL immediately update the job's featured status
11. WHEN the jobs list contains more than the page limit THEN the system SHALL provide pagination controls

### Requirement 9: Employer Job Stage Management

**User Story:** As an employer, I want to customize my hiring pipeline stages, so that I can track candidates through my specific recruitment process.

#### Acceptance Criteria

1. WHEN an employer navigates to Job Stages THEN the system SHALL display a list of all custom hiring pipeline stages
2. WHEN displaying each job stage THEN the system SHALL show: Job Stage Name and Description
3. WHEN the job stages list is displayed THEN the system SHALL provide an "Add New Stage" button
4. WHEN the job stages list is displayed THEN the system SHALL provide a search bar to filter stages by name
5. WHEN an employer clicks "Add New Stage" THEN the system SHALL display a form to create a new stage with Name and Description fields
6. WHEN displaying each stage THEN the system SHALL provide Edit and Delete action buttons
7. WHEN an employer clicks "Edit" THEN the system SHALL display a form with pre-filled stage data
8. WHEN an employer clicks "Delete" THEN the system SHALL display a confirmation dialog before deletion
9. WHEN a stage is successfully created or updated THEN the system SHALL display a success notification
10. IF an employer attempts to delete a stage currently in use THEN the system SHALL display a warning and prevent deletion

### Requirement 10: Employer Navigation and Common Features

**User Story:** As an employer, I want consistent navigation and access to key features across all pages, so that I can efficiently manage my hiring activities.

#### Acceptance Criteria

1. WHEN an employer is logged in THEN the system SHALL display a persistent top navigation bar on all employer pages
2. WHEN the navigation bar is displayed THEN the system SHALL provide links to: Dashboard, Employer Profile, Jobs, Job Stages, and Followers
3. WHEN the navigation bar is displayed THEN the system SHALL provide a Light/Dark Mode toggle
4. WHEN the navigation bar is displayed THEN the system SHALL provide a Notifications icon with unread count badge
5. WHEN an employer clicks the theme toggle THEN the system SHALL switch between light and dark themes and persist the preference
6. WHEN an employer clicks the notifications icon THEN the system SHALL display a dropdown with recent notifications
7. WHEN the current page matches a navigation link THEN the system SHALL highlight that link as active

### Requirement 11: Super Admin Panel and Navigation

**User Story:** As a super admin, I want comprehensive access to all system management features through an organized navigation structure, so that I can efficiently administer the platform.

#### Acceptance Criteria

1. WHEN a super admin logs in THEN the system SHALL display a comprehensive side-navigation menu
2. WHEN the side navigation is displayed THEN the system SHALL provide access to modules: Dashboard, Employers, Admins, Candidates, Jobs, Blogs, Subscriptions, Subscribers, Countries, General (settings), and CMS
3. WHEN the side navigation is displayed THEN the system SHALL highlight the current active section
4. WHEN a super admin clicks a navigation item THEN the system SHALL navigate to the corresponding management page
5. WHEN the side navigation is displayed THEN the system SHALL provide a collapse/expand toggle for space efficiency
6. IF a navigation section has sub-items THEN the system SHALL display them in an expandable submenu
7. WHEN the admin panel is displayed THEN the system SHALL show the admin's name and role in the header

### Requirement 12: Super Admin CMS (Notice Boards)

**User Story:** As a super admin, I want to manage notice boards for site-wide announcements, so that I can communicate important information to all users.

#### Acceptance Criteria

1. WHEN a super admin navigates to CMS Notice Boards THEN the system SHALL display a list of all notices
2. WHEN displaying each notice THEN the system SHALL show: Title, Description, and Status (Active/Inactive toggle)
3. WHEN the notices list is displayed THEN the system SHALL provide an "Add New Notice" button
4. WHEN the notices list is displayed THEN the system SHALL provide a search bar to filter notices by title
5. WHEN a super admin clicks "Add New Notice" THEN the system SHALL display a form with Title, Description, and Status fields
6. WHEN displaying each notice THEN the system SHALL provide Edit and Delete action buttons
7. WHEN a super admin clicks "Edit" THEN the system SHALL display a form with pre-filled notice data
8. WHEN a super admin clicks "Delete" THEN the system SHALL display a confirmation dialog before deletion
9. WHEN a super admin toggles the Status THEN the system SHALL immediately update the notice's active status
10. WHEN a notice is successfully created or updated THEN the system SHALL display a success notification
11. WHEN a notice is set to Active THEN the system SHALL display it to all relevant users on the platform

### Requirement 13: Super Admin General System Configuration

**User Story:** As a super admin, I want to manage core data lists used throughout the application, so that I can maintain consistent dropdown options and system configuration.

#### Acceptance Criteria

1. WHEN a super admin navigates to General Configuration THEN the system SHALL display a tabbed interface with tabs for: Marital Status, Skills, Salary Periods, Industries, and Company Sizes
2. WHEN a configuration tab is active THEN the system SHALL display a list of all entries for that data type
3. WHEN displaying each entry THEN the system SHALL show: Entry Name/Value, Creation Date, and Last Update Date
4. WHEN a configuration tab is displayed THEN the system SHALL provide an "Add New Entry" button
5. WHEN a configuration tab is displayed THEN the system SHALL provide a search bar to filter entries
6. WHEN a super admin clicks "Add New Entry" THEN the system SHALL display a form to create a new entry
7. WHEN displaying each entry THEN the system SHALL provide Edit and Delete action buttons
8. WHEN a super admin clicks "Edit" THEN the system SHALL display a form with pre-filled entry data
9. WHEN a super admin clicks "Delete" THEN the system SHALL display a confirmation dialog before deletion
10. IF an entry is currently in use by user profiles or jobs THEN the system SHALL display a warning before allowing deletion
11. WHEN an entry is successfully created or updated THEN the system SHALL display a success notification
12. WHEN configuration data is modified THEN the system SHALL immediately reflect changes in all relevant dropdowns throughout the application
