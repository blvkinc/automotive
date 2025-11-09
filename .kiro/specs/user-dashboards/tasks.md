# Implementation Plan

- [x] 1. Set up shared type definitions for UI components





  - Create shared type definitions for Candidate, Employer, and Admin data models in `shared/types/`
  - Define TypeScript interfaces for all component props
  - Create mock data utilities for UI development
  - _Requirements: 1.1, 2.1, 3.1, 4.1, 6.1, 7.1, 11.1, 12.1, 13.1_

- [x] 2. Create shared dashboard UI components




- [x] 2.1 Build DashboardLayout component


  - Create `client/components/dashboards/shared/DashboardLayout.tsx` with role-based layout logic
  - Implement responsive sidebar for admin, top nav for candidate/employer
  - Add theme provider integration
  - Use existing Layout component as reference
  - _Requirements: 5.1, 5.2, 10.1, 10.2, 11.1_

- [x] 2.2 Build DashboardNav component


  - Create `client/components/dashboards/shared/DashboardNav.tsx` with navigation items
  - Implement active link highlighting using react-router-dom
  - Add notifications bell icon with badge (mock count for now)
  - Add theme toggle button using next-themes
  - Style with Tailwind CSS matching existing design
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

- [x] 2.3 Build reusable StatsCard component


  - Create `client/components/dashboards/shared/StatsCard.tsx` for displaying metrics
  - Support icon, label, and value props
  - Add loading skeleton state using existing skeleton component
  - Style with Card component from shadcn/ui
  - _Requirements: 1.3, 6.1_

- [x] 3. Implement Candidate Dashboard UI





- [x] 3.1 Create Candidate Dashboard page


  - Create `client/pages/candidate/Dashboard.tsx` with DashboardLayout
  - Use mock data for initial development
  - Add route to App.tsx: `/candidate/dashboard`
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 3.2 Build ProfileCard component


  - Create `client/components/dashboards/candidate/ProfileCard.tsx`
  - Display personal information (name, phone, location, email) using Card component
  - Add Edit Profile button that links to profile page
  - Style with existing UI components and Tailwind
  - _Requirements: 1.1, 1.2, 1.4_

- [x] 3.3 Add statistics display

  - Display three StatsCard components for Profile Views, Followings, and Resumes
  - Use lucide-react icons (Eye, Users, FileText)
  - Arrange in responsive grid layout
  - _Requirements: 1.3_

- [x] 4. Implement Candidate Profile Management UI






- [x] 4.1 Create Profile page with tabs

  - Create `client/pages/candidate/Profile.tsx` using Tabs component from shadcn/ui
  - Implement tabs: General, Resume, Career Informations, CV Builder
  - Add route to App.tsx: `/candidate/profile`
  - Use DashboardLayout wrapper
  - _Requirements: 2.1_


- [x] 4.2 Build General tab form

  - Create `client/components/dashboards/candidate/ProfileForm.tsx`
  - Implement all personal information fields using Input, Select, and Label components
  - Add country/state/city cascading Select dropdowns with mock data
  - Use react-hook-form for form state management
  - Style in responsive grid layout
  - _Requirements: 2.2, 2.8_


- [x] 4.3 Add skills and languages inputs

  - Implement skills tag input using existing Combobox or Badge components
  - Implement languages multi-select using Checkbox or Select component
  - Allow adding/removing skills dynamically
  - _Requirements: 2.3, 2.4_



- [x] 4.4 Add social media and profile picture

  - Add social media URL input fields (Facebook, Twitter, LinkedIn, Google Plus, Pinterest)
  - Implement profile picture upload with file input and preview
  - Show avatar preview using Avatar component
  - Add validation for file types (jpg, png) and size
  - _Requirements: 2.2, 2.5_



- [x] 4.5 Implement form submission UI

  - Add Save button with loading state
  - Display success notification using sonner toast
  - Display validation errors inline using form error messages
  - Mock form submission for now (console.log data)
  - _Requirements: 2.6, 2.7_

- [x] 5. Implement Candidate Applied Jobs UI





- [x] 5.1 Create Applied Jobs page


  - Create `client/pages/candidate/AppliedJobs.tsx` with DashboardLayout
  - Add route to App.tsx: `/candidate/applied-jobs`
  - Use mock data array for job applications
  - Implement pagination using Pagination component
  - _Requirements: 3.1, 3.3_

- [x] 5.2 Build JobApplicationCard component


  - Create `client/components/dashboards/candidate/JobApplicationCard.tsx`
  - Display job title, status badge (using Badge component), application date, salary, employer name
  - Use Card component for layout
  - Add different badge colors for different statuses (Applied, Reviewed, Hired, Rejected)
  - Make card clickable to navigate to job detail
  - _Requirements: 3.2, 3.6_

- [x] 5.3 Add search and filter controls

  - Implement search Input for filtering by job title
  - Add Select dropdown for filtering by application status
  - Implement client-side filtering logic
  - _Requirements: 3.4, 3.5_

- [x] 5.4 Implement empty state

  - Create empty state UI with illustration or icon
  - Display message "No applications yet"
  - Add Button linking to /jobs page
  - Show when filtered results are empty
  - _Requirements: 3.7_

- [x] 6. Implement Candidate Favourite Jobs UI




- [x] 6.1 Create Favourite Jobs page


  - Create `client/pages/candidate/FavouriteJobs.tsx` with DashboardLayout
  - Add route to App.tsx: `/candidate/favourites`
  - Use Table component to display favourite jobs
  - Use mock data array for favourite jobs
  - Implement pagination using Pagination component
  - _Requirements: 4.1, 4.2_

- [x] 6.2 Build favourite jobs table

  - Display columns: Job Title, Employer Name, Employer Email, Date Created, Expiry Date, Actions
  - Add bookmark icon button in Actions column to remove from favourites
  - Use Bookmark icon from lucide-react
  - Implement expired job visual indicator (red text or badge for expired dates)
  - _Requirements: 4.2, 4.3, 4.7_

- [x] 6.3 Implement remove favourite functionality

  - Handle bookmark button click to remove from list
  - Show confirmation toast notification using sonner
  - Update UI immediately (remove row from table)
  - _Requirements: 4.3_

- [x] 6.4 Implement empty state

  - Create empty state UI with Heart icon
  - Display message "No favourite jobs yet"
  - Add Button linking to /jobs page
  - _Requirements: 4.6_

- [x] 7. Implement Employer Dashboard UI




- [x] 7.1 Create Employer Dashboard page


  - Create `client/pages/employer/Dashboard.tsx` with DashboardLayout
  - Add route to App.tsx: `/employer/dashboard`
  - Use mock data for statistics
  - _Requirements: 6.1, 6.7_

- [x] 7.2 Build StatsGrid component


  - Create `client/components/dashboards/employer/StatsGrid.tsx`
  - Display six stat cards using StatsCard component: Total Jobs, Live Jobs, Paused Jobs, Closed Jobs, Followers, Total Applications
  - Use lucide-react icons (Briefcase, Play, Pause, X, Users, FileText)
  - Arrange in responsive grid (2 cols on mobile, 3 cols on desktop)
  - _Requirements: 6.1, 6.7_

- [x] 7.3 Build ApplicationsChart component


  - Create `client/components/dashboards/employer/ApplicationsChart.tsx` using Recharts library
  - Implement LineChart for application trends over time
  - Use mock data for chart (last 30 days)
  - Add responsive container
  - Style with existing color scheme
  - _Requirements: 6.2, 6.5_

- [x] 7.4 Add chart filter controls

  - Add Select dropdown for filtering by specific job
  - Add Select dropdown for filtering by gender (All, Male, Female)
  - Add DatePicker for date range selection using react-day-picker
  - Implement client-side filtering logic to update chart data
  - _Requirements: 6.3, 6.4_

- [x] 7.5 Implement empty state

  - Create empty state UI for employers with no jobs
  - Display message "No jobs posted yet"
  - Add Button "Create Your First Job" linking to job creation
  - _Requirements: 6.6_

- [x] 8. Implement Employer Profile Management UI




- [x] 8.1 Create Employer Profile page


  - Create `client/pages/employer/Profile.tsx` with DashboardLayout
  - Add route to App.tsx: `/employer/profile`
  - Use Card component for form container
  - Use react-hook-form for form management
  - _Requirements: 7.1, 7.8_

- [x] 8.2 Build company profile form

  - Implement all company profile fields using Input, Select, and Label components
  - Add fields: Name, Email, Phone, CEO Name, Industry, Ownership Type, Company Size
  - Add country/state/city cascading Select dropdowns with mock data
  - Add Established In year input with number validation
  - Add Website URL input with URL validation
  - Style in responsive grid layout
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 8.3 Add employer details and location fields

  - Implement Employer Details using Textarea component (rich text for later)
  - Add Location (Address) input
  - Add 2nd Office Location input
  - Add No. of Offices number input
  - Add Fax input
  - _Requirements: 7.1, 7.2_

- [x] 8.4 Add social media and featured toggle

  - Add social media URL input fields (Facebook, Twitter, LinkedIn, Google Plus, Pinterest)
  - Add "Make Featured" Switch component
  - _Requirements: 7.1, 7.2, 7.5_

- [x] 8.5 Implement form submission UI

  - Add Save button with loading state
  - Display success notification using sonner toast
  - Display validation errors inline
  - Mock form submission for now (console.log data)
  - _Requirements: 7.6, 7.7_

- [x] 9. Implement Employer Job Management UI




- [x] 9.1 Create Jobs page


  - Create `client/pages/employer/Jobs.tsx` with DashboardLayout
  - Add route to App.tsx: `/employer/jobs`
  - Use Table component to display jobs
  - Use mock data array for jobs
  - Implement pagination using Pagination component
  - _Requirements: 8.1, 8.11_

- [x] 9.2 Build jobs table

  - Display columns: Job Title, Expiry Date, Applications, Featured, Status, Actions
  - Add Switch component for Featured toggle
  - Add Badge component for Status (Active, Paused, Suspended, Closed)
  - Use different badge colors for different statuses
  - _Requirements: 8.2, 8.10_

- [x] 9.3 Add search and action buttons

  - Add search Input for filtering by job title
  - Add "Add New Job" Button in page header
  - Implement client-side search filtering
  - _Requirements: 8.3, 8.4, 8.5_

- [x] 9.4 Implement job action buttons

  - Add "View Applications" Button in Actions column
  - Add "Edit Job" Button with Pencil icon
  - Add "Delete Job" Button with Trash icon
  - Implement featured Switch toggle with immediate UI update
  - _Requirements: 8.6, 8.7, 8.8, 8.10_

- [x] 9.5 Implement delete confirmation

  - Create AlertDialog for delete confirmation
  - Show dialog when delete button clicked
  - Handle job deletion (remove from mock data array)
  - Display success toast notification
  - _Requirements: 8.9_

- [x] 10. Implement Employer Job Stages Management UI




- [x] 10.1 Create Job Stages page


  - Create `client/pages/employer/JobStages.tsx` with DashboardLayout
  - Add route to App.tsx: `/employer/job-stages`
  - Use Table component to display stages
  - Use mock data array for job stages
  - _Requirements: 9.1, 9.2_

- [x] 10.2 Build job stages table

  - Display columns: Stage Name, Description, Actions
  - Add Edit and Delete buttons in Actions column
  - Add search Input for filtering by stage name
  - Add "Add New Stage" Button in page header
  - _Requirements: 9.1, 9.2, 9.4, 9.6_

- [x] 10.3 Implement add/edit stage dialog


  - Create Dialog component for adding/editing stages
  - Add form fields: Stage Name (Input), Description (Textarea)
  - Use react-hook-form for form management
  - Open dialog when "Add New Stage" or Edit button clicked
  - _Requirements: 9.3, 9.5, 9.7_

- [x] 10.4 Implement stage CRUD operations


  - Handle stage creation (add to mock data array)
  - Handle stage update (update in mock data array)
  - Handle stage deletion with AlertDialog confirmation
  - Show usage warning in delete dialog if stage is in use
  - Display success toast notifications
  - _Requirements: 9.3, 9.6, 9.7, 9.8, 9.9, 9.10_
-

- [x] 11. Implement Admin Panel Infrastructure UI





- [x] 11.1 Create AdminSidebar component

  - Create `client/components/dashboards/admin/AdminSidebar.tsx`
  - Implement navigation items using existing Sidebar component or custom nav
  - Add menu items: Dashboard, Employers, Admins, Candidates, Jobs, Blogs, Subscriptions, Subscribers, Countries, General, CMS
  - Add collapse/expand button
  - Highlight active section using react-router-dom location
  - Use lucide-react icons for each menu item
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_



- [x] 11.2 Update admin layout

  - Update existing admin pages to use AdminSidebar
  - Display admin name and role in header (use mock data)
  - Ensure responsive design (collapsible sidebar on mobile)
  - Use existing DashboardLayout or create AdminLayout wrapper
  - _Requirements: 11.1, 11.7_

- [ ] 12. Implement Admin Notice Boards (CMS) UI
- [ ] 12.1 Create Notice Boards page
  - Create `client/pages/admin/NoticeBoards.tsx` with admin layout
  - Add route to App.tsx: `/admin/notices`
  - Use Table component to display notices
  - Use mock data array for notices
  - _Requirements: 12.1, 12.2_

- [ ] 12.2 Build notices table
  - Display columns: Title, Description, Status, Actions
  - Add Switch component for Active/Inactive status toggle
  - Add Edit and Delete buttons in Actions column
  - Add search Input for filtering by title
  - Add "Add New Notice" Button in page header
  - _Requirements: 12.1, 12.2, 12.4, 12.6_

- [ ] 12.3 Implement add/edit notice dialog
  - Create Dialog component for adding/editing notices
  - Add form fields: Title (Input), Description (Textarea), Status (Switch)
  - Use react-hook-form for form management
  - Open dialog when "Add New Notice" or Edit button clicked
  - _Requirements: 12.3, 12.7_

- [ ] 12.4 Implement notice CRUD operations
  - Handle notice creation (add to mock data array)
  - Handle notice update (update in mock data array)
  - Handle status toggle with immediate UI update
  - Handle notice deletion with AlertDialog confirmation
  - Display success toast notifications
  - _Requirements: 12.3, 12.6, 12.7, 12.8, 12.9, 12.10_

- [x] 13. Implement Admin General Configuration UI




- [x] 13.1 Create General Config page


  - Create `client/pages/admin/GeneralConfig.tsx` with admin layout
  - Add route to App.tsx: `/admin/config`
  - Use Tabs component with tabs: Marital Status, Skills, Salary Periods, Industries, Company Sizes
  - Use mock data arrays for each config type
  - _Requirements: 13.1_

- [x] 13.2 Build config entries table

  - Display columns: Entry Name, Created Date, Updated Date, Actions
  - Add Edit and Delete buttons in Actions column
  - Add search Input for filtering entries
  - Add "Add New Entry" Button in each tab
  - Reuse table component across all tabs
  - _Requirements: 13.2, 13.3, 13.5, 13.6_

- [x] 13.3 Implement add/edit entry dialog

  - Create Dialog component for adding/editing config entries
  - Add form field: Entry Name/Value (Input)
  - Use react-hook-form for form management
  - Open dialog when "Add New Entry" or Edit button clicked
  - _Requirements: 13.4, 13.7_

- [x] 13.4 Implement config CRUD operations

  - Handle entry creation (add to mock data array for active tab)
  - Handle entry update (update in mock data array)
  - Handle entry deletion with AlertDialog confirmation
  - Show usage warning in delete dialog if entry is in use
  - Display success toast notifications
  - _Requirements: 13.4, 13.6, 13.7, 13.8, 13.9, 13.10, 13.11_

- [ ] 14. Implement routing and navigation
  - Add all dashboard routes to `client/App.tsx`
  - Add routes for candidate pages: /candidate/dashboard, /candidate/profile, /candidate/applied-jobs, /candidate/favourites
  - Add routes for employer pages: /employer/dashboard, /employer/profile, /employer/jobs, /employer/job-stages
  - Add routes for admin pages: /admin/notices, /admin/config
  - Use lazy loading with React.lazy for dashboard pages
  - _Requirements: 1.4, 5.7, 6.1, 10.7, 11.1_

- [ ] 15. Implement theme toggle functionality
  - Ensure next-themes is properly configured in App.tsx
  - Add theme toggle button to DashboardNav component
  - Test theme switching across all dashboard pages
  - Verify dark mode styles work with existing Tailwind classes
  - _Requirements: 5.5, 5.6, 10.5, 10.6_

- [ ] 16. Add loading states and skeletons
  - Create Skeleton components for dashboard cards using existing skeleton component
  - Add loading states to StatsCard component
  - Add Suspense boundaries for lazy-loaded routes with loading fallback
  - _Requirements: 1.1, 6.1, 11.1_

- [ ] 17. Polish responsive design
  - Test all dashboard pages on mobile, tablet, and desktop viewports
  - Ensure tables are scrollable on mobile
  - Verify navigation works on mobile (hamburger menu for admin sidebar)
  - Adjust grid layouts for different screen sizes
  - _Requirements: All requirements_

- [ ] 18. Final UI polish and testing
  - Review all pages for consistent styling and spacing
  - Verify all buttons and links work correctly
  - Test form validation and error messages
  - Verify toast notifications appear correctly
  - Test dialog/modal interactions
  - Ensure all icons are properly imported and displayed
  - _Requirements: All requirements_
