import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Building2 } from "lucide-react";
import { JobApplication } from "../../../../shared/types";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface JobApplicationCardProps {
  application: JobApplication;
}

const statusConfig = {
  applied: {
    label: "Applied",
    variant: "secondary" as const,
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  reviewed: {
    label: "Reviewed",
    variant: "secondary" as const,
    className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  interviewed: {
    label: "Interviewed",
    variant: "secondary" as const,
    className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  },
  hired: {
    label: "Hired",
    variant: "secondary" as const,
    className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  rejected: {
    label: "Rejected",
    variant: "secondary" as const,
    className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
};

export default function JobApplicationCard({ application }: JobApplicationCardProps) {
  const navigate = useNavigate();
  const statusInfo = statusConfig[application.status];

  const handleClick = () => {
    navigate(`/job/${application.jobId}`);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatSalary = () => {
    if (!application.salary) return null;
    const { min, max, currency } = application.salary;
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          {/* Header: Title and Status */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 flex-1">
              {application.jobTitle}
            </h3>
            <Badge
              variant={statusInfo.variant}
              className={cn("shrink-0", statusInfo.className)}
            >
              {statusInfo.label}
            </Badge>
          </div>

          {/* Details Grid */}
          <div className="grid gap-3 text-sm">
            {/* Employer Name */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4 shrink-0" />
              <span>{application.employerName}</span>
            </div>

            {/* Application Date */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Applied on {formatDate(application.appliedDate)}</span>
            </div>

            {/* Salary Range */}
            {application.salary && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-4 w-4 shrink-0" />
                <span>{formatSalary()}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
