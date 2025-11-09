import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ApplicationTrend, ChartFilters, Job } from "@shared/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface ApplicationsChartProps {
  data: ApplicationTrend[];
  filters: ChartFilters;
  onFilterChange: (filters: ChartFilters) => void;
  jobs: Job[];
}

export default function ApplicationsChart({
  data,
  filters,
  onFilterChange,
  jobs,
}: ApplicationsChartProps) {
  // Filter data based on current filters
  const filteredData = useMemo(() => {
    return data
      .filter((item) => {
        const itemDate = new Date(item.date);
        const inDateRange =
          itemDate >= filters.dateRange.start && itemDate <= filters.dateRange.end;
        const matchesJob = !filters.jobId || item.jobId === filters.jobId;
        const matchesGender =
          filters.gender === "all" || !item.gender || item.gender === filters.gender;
        return inDateRange && matchesJob && matchesGender;
      })
      .map((item) => ({
        date: format(new Date(item.date), "MMM dd"),
        applications: item.count,
      }));
  }, [data, filters]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Applications</CardTitle>
        <CardDescription>Application trends over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={filters.jobId || "all"}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  jobId: value === "all" ? undefined : value,
                })
              }
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Jobs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                {jobs.map((job) => (
                  <SelectItem key={job.id} value={job.id}>
                    {job.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.gender || "all"}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  gender: value as "all" | "male" | "female",
                })
              }
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Genders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full sm:w-[240px] justify-start text-left font-normal",
                    !filters.dateRange && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.dateRange.start ? (
                    <>
                      {format(filters.dateRange.start, "MMM dd, yyyy")} -{" "}
                      {format(filters.dateRange.end, "MMM dd, yyyy")}
                    </>
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={{
                    from: filters.dateRange.start,
                    to: filters.dateRange.end,
                  }}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      onFilterChange({
                        ...filters,
                        dateRange: {
                          start: range.from,
                          end: range.to,
                        },
                      });
                    }
                  }}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Chart */}
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="date"
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
