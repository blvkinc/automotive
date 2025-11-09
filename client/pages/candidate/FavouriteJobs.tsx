import { useState } from "react";
import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Bookmark, Heart } from "lucide-react";
import { mockFavouriteJobs } from "../../../shared/mock-data/candidate";
import { toast } from "sonner";
import type { FavouriteJob } from "../../../shared/types/candidate";

const ITEMS_PER_PAGE = 10;

const navItems = [
  { label: "Dashboard", path: "/candidate/dashboard" },
  { label: "Profile", path: "/candidate/profile" },
  { label: "Applied Jobs", path: "/candidate/applied-jobs" },
  { label: "Favourite Jobs", path: "/candidate/favourites" },
];

export default function FavouriteJobs() {
  const [favourites, setFavourites] = useState<FavouriteJob[]>(mockFavouriteJobs);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(favourites.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedFavourites = favourites.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemoveFavourite = (jobId: string, jobTitle: string) => {
    // Remove from list
    setFavourites((prev) => prev.filter((fav) => fav.jobId !== jobId));
    
    // Show confirmation toast
    toast.success(`"${jobTitle}" removed from favourites`);
    
    // Adjust current page if needed
    const newTotal = favourites.length - 1;
    const newTotalPages = Math.ceil(newTotal / ITEMS_PER_PAGE);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isExpired = (expiryDate: Date) => {
    return new Date(expiryDate) < new Date();
  };

  return (
    <DashboardLayout
      userType="candidate"
      nav={
        <DashboardNav
          items={navItems}
          userType="candidate"
          notificationCount={3}
        />
      }
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Favourite Jobs</h1>
          <p className="text-muted-foreground mt-2">
            Manage your saved job listings
          </p>
        </div>

        {/* Table or Empty State */}
        {favourites.length > 0 ? (
          <>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Employer Name</TableHead>
                    <TableHead>Employer Email</TableHead>
                    <TableHead>Date Created</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedFavourites.map((favourite) => {
                    const expired = isExpired(favourite.expiryDate);
                    return (
                      <TableRow key={favourite.id}>
                        <TableCell className="font-medium">
                          <a
                            href={`/job/${favourite.jobId}`}
                            className="hover:underline text-primary"
                          >
                            {favourite.jobTitle}
                          </a>
                        </TableCell>
                        <TableCell>{favourite.employerName}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {favourite.employerEmail}
                        </TableCell>
                        <TableCell>{formatDate(favourite.dateCreated)}</TableCell>
                        <TableCell>
                          {expired ? (
                            <span className="text-destructive font-medium">
                              {formatDate(favourite.expiryDate)} (Expired)
                            </span>
                          ) : (
                            <span>{formatDate(favourite.expiryDate)}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              handleRemoveFavourite(
                                favourite.jobId,
                                favourite.jobTitle
                              )
                            }
                            title="Remove from favourites"
                          >
                            <Bookmark className="h-4 w-4 fill-current" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No favourite jobs yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start saving jobs you're interested in to easily find them later.
              Browse available positions and bookmark the ones you like.
            </p>
            <Button asChild>
              <a href="/jobs">Browse Jobs</a>
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
