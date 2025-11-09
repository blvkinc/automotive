import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "candidate" | "employer" | "admin";
  showSidebar?: boolean;
  sidebar?: ReactNode;
  nav?: ReactNode;
}

export default function DashboardLayout({
  children,
  userType,
  showSidebar = false,
  sidebar,
  nav,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation for Candidate/Employer */}
      {(userType === "candidate" || userType === "employer") && nav && (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {nav}
        </header>
      )}

      <div className="flex">
        {/* Sidebar for Admin */}
        {userType === "admin" && showSidebar && sidebar && (
          <aside className="sticky top-0 h-screen w-64 border-r bg-background hidden lg:block">
            <div className="h-full overflow-y-auto">
              {sidebar}
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 w-full",
            userType === "admin" && showSidebar ? "lg:ml-0" : ""
          )}
        >
          <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
