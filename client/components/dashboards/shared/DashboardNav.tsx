import { Link, useLocation } from "react-router-dom";
import { Bell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  path: string;
}

interface DashboardNavProps {
  items: NavItem[];
  userType: "candidate" | "employer" | "admin";
  notificationCount?: number;
}

export default function DashboardNav({
  items,
  userType,
  notificationCount = 0,
}: DashboardNavProps) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-6">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground leading-none">
            auto
          </span>
          <span className="text-lg font-bold text-automotive-red leading-none">
            motivate
          </span>
          <span className="text-[8px] text-muted-foreground tracking-wider">
            JOBS
          </span>
        </div>
      </Link>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-1">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive(item.path)
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Bell className="h-4 w-4" />
              {notificationCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {notificationCount > 9 ? "9+" : notificationCount}
                </Badge>
              )}
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            {notificationCount > 0 ? (
              <>
                <DropdownMenuItem>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">New notification</p>
                    <p className="text-xs text-muted-foreground">
                      You have {notificationCount} unread notification
                      {notificationCount > 1 ? "s" : ""}
                    </p>
                  </div>
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem disabled>
                <p className="text-sm text-muted-foreground">
                  No new notifications
                </p>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu - Show navigation items on mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {items.map((item) => (
              <DropdownMenuItem key={item.path} asChild>
                <Link
                  to={item.path}
                  className={cn(
                    "w-full cursor-pointer",
                    isActive(item.path) && "bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
