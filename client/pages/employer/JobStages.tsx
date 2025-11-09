import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import { mockJobStages } from "@shared/mock-data/employer";
import { useState } from "react";
import { JobStage } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface StageFormData {
  name: string;
  description: string;
}

export default function JobStages() {
  const [stages, setStages] = useState<JobStage[]>(mockJobStages);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStage, setEditingStage] = useState<JobStage | null>(null);
  const [deleteStageId, setDeleteStageId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StageFormData>();

  const navItems = [
    { label: "Dashboard", path: "/employer/dashboard" },
    { label: "Employer Profile", path: "/employer/profile" },
    { label: "Jobs", path: "/employer/jobs" },
    { label: "Job Stages", path: "/employer/job-stages" },
    { label: "Followers", path: "/employer/followers" },
  ];

  // Filter stages by search query
  const filteredStages = stages.filter((stage) =>
    stage.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openAddDialog = () => {
    setEditingStage(null);
    reset({ name: "", description: "" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (stage: JobStage) => {
    setEditingStage(stage);
    reset({ name: stage.name, description: stage.description });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingStage(null);
    reset();
  };

  const onSubmit = (data: StageFormData) => {
    if (editingStage) {
      // Update existing stage
      setStages((prevStages) =>
        prevStages.map((stage) =>
          stage.id === editingStage.id
            ? {
                ...stage,
                name: data.name,
                description: data.description,
                updatedAt: new Date(),
              }
            : stage
        )
      );
      toast.success("Stage updated successfully");
    } else {
      // Create new stage
      const newStage: JobStage = {
        id: `stage-${Date.now()}`,
        employerId: "1",
        name: data.name,
        description: data.description,
        order: stages.length + 1,
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setStages((prevStages) => [...prevStages, newStage]);
      toast.success("Stage created successfully");
    }
    closeDialog();
  };

  const handleDeleteStage = () => {
    if (deleteStageId) {
      const stageToDelete = stages.find((s) => s.id === deleteStageId);
      
      // Check if stage is in use (default stages are considered "in use")
      if (stageToDelete?.isDefault) {
        toast.error("Cannot delete default stages");
        setDeleteStageId(null);
        return;
      }

      setStages((prevStages) =>
        prevStages.filter((stage) => stage.id !== deleteStageId)
      );
      toast.success("Stage deleted successfully");
      setDeleteStageId(null);
    }
  };

  return (
    <DashboardLayout
      userType="employer"
      nav={<DashboardNav items={navItems} userType="employer" />}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Job Stages</h1>
            <p className="text-muted-foreground mt-2">
              Customize your hiring pipeline stages
            </p>
          </div>
          <Button onClick={openAddDialog}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Stage
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Input
            placeholder="Search stages by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Stage Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                    No stages found
                  </TableCell>
                </TableRow>
              ) : (
                filteredStages.map((stage) => (
                  <TableRow key={stage.id}>
                    <TableCell className="font-medium">{stage.name}</TableCell>
                    <TableCell>{stage.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Edit Stage"
                          onClick={() => openEditDialog(stage)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Delete Stage"
                          onClick={() => setDeleteStageId(stage.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingStage ? "Edit Stage" : "Add New Stage"}
            </DialogTitle>
            <DialogDescription>
              {editingStage
                ? "Update the stage details below."
                : "Create a new hiring pipeline stage."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Stage Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Stage name is required" })}
                placeholder="e.g., Technical Interview"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Describe this stage of the hiring process..."
                rows={4}
              />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialog}>
                Cancel
              </Button>
              <Button type="submit">
                {editingStage ? "Update Stage" : "Create Stage"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteStageId !== null}
        onOpenChange={() => setDeleteStageId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              stage from your hiring pipeline.
              {stages.find((s) => s.id === deleteStageId)?.isDefault && (
                <span className="block mt-2 text-destructive font-medium">
                  Warning: This is a default stage and may be in use by existing
                  job applications.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteStage}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
}
