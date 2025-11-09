import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobDetail from "./pages/JobDetail";
import CompanyDetail from "./pages/CompanyDetail";
import CandidateRegister from "./pages/CandidateRegister";
import EmployerRegister from "./pages/EmployerRegister";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Billing from "./pages/Billing";
import Credits from "./pages/Credits";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPackages from "./pages/admin/Packages";
import AdminCampaigns from "./pages/admin/Campaigns";
import AdminVouchers from "./pages/admin/Vouchers";
import AdminReports from "./pages/admin/Reports";
import AdminGeneralConfig from "./pages/admin/GeneralConfig";
import CandidateDashboard from "./pages/candidate/Dashboard";
import CandidateProfile from "./pages/candidate/Profile";
import CandidateAppliedJobs from "./pages/candidate/AppliedJobs";
import CandidateFavouriteJobs from "./pages/candidate/FavouriteJobs";
import EmployerDashboard from "./pages/employer/Dashboard";
import EmployerProfile from "./pages/employer/Profile";
import EmployerJobs from "./pages/employer/Jobs";
import EmployerJobStages from "./pages/employer/JobStages";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/company/:id" element={<CompanyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-candidate" element={<CandidateRegister />} />
            <Route path="/register-employer" element={<EmployerRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout/:packageId" element={<Checkout />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
            <Route path="/candidate/profile" element={<CandidateProfile />} />
            <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobs />} />
            <Route path="/candidate/favourites" element={<CandidateFavouriteJobs />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/employer/profile" element={<EmployerProfile />} />
            <Route path="/employer/jobs" element={<EmployerJobs />} />
            <Route path="/employer/job-stages" element={<EmployerJobStages />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/packages" element={<AdminPackages />} />
            <Route path="/admin/campaigns" element={<AdminCampaigns />} />
            <Route path="/admin/vouchers" element={<AdminVouchers />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/config" element={<AdminGeneralConfig />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
