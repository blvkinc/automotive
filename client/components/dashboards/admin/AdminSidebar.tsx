import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  Shield,
  Users,
  Briefcase,
  FileText,
  CreditCard,
  Mail,
  Globe,
  Settings,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    label: "Employers",
    path: "/admin/employers",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    label: "Admins",
    path: "/admin/admins",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    label: "Candidates",
    path: "/admin/candidates",
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: "Jobs",
    path: "/admin/jobs",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    label: "Blogs",
    path: "/admin/blogs",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    label: "Subscriptions",
    path: "/admin/subscriptions",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    label: "Subscribers",
    path: "/admin/subscribers",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    label: "Countries",
    path: "/admin/countries",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    label: "General",
    path: "/admin/config",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    label: "CMS",
    path: "/admin/notices",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

interface AdminSidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function AdminSidebar({
  isCollapsed = false,
  onToggleCollapse,
}: AdminSidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col h-full bg-background border-r">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && (
          <div>
            <h2 className="text-lg font-semibold text-foreground">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">System Management</p>
          </div>
        )}
        {onToggleCollapse && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
