import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { ConfigEntry, ConfigType } from "@shared/types";
import {
  mockMaritalStatuses,
  mockSkills,
  mockSalaryPeriods,
  mockIndustries,
  mockCompanySizes,
} from "@shared/mock-data/admin";

interface ConfigFormData {
  value: string;
}

export default function GeneralConfig() {
  const [activeTab, setActiveTab] = useState<ConfigType>("maritalStatus");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<ConfigEntry | null>(null);
  const [deletingEntry, setDeletingEntry] = useState<ConfigEntry | null>(null);

  // Mock data state
  const [maritalStatuses, setMaritalStatuses] = useState(mockMaritalStatuses);
  const [skills, setSkills] = useState(mockSkills);
  const [salaryPeriods, setSalaryPeriods] = useState(mockSalaryPeriods);
  const [industries, setIndustries] = useState(mockIndustries);
  const [companySizes, setCompanySizes] = useState(mockCompanySizes);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConfigFormData>();

  // Get current data based on active tab
  const getCurrentData = (): ConfigEntry[] => {
    switch (activeTab) {
      case "maritalStatus":
        return maritalStatuses;
      case "skills":
        return skills;
      case "salaryPeriods":
        return salaryPeriods;
      case "industries":
        return industries;
      case "companySizes":
        return companySizes;
      default:
        return [];
    }
  };

  // Update data based on active tab
  const updateCurrentData = (newData: ConfigEntry[]) => {
    switch (activeTab) {
      case "maritalStatus":
        setMaritalStatuses(newData);
        break;
      case "skills":
        setSkills(newData);
        break;
      case "salaryPeriods":
        setSalaryPeriods(newData);
        break;
      case "industries":
        setIndustries(newData);
        break;
      case "companySizes":
        setCompanySizes(newData);
        break;
    }
  };

  // Filter entries based on search query
  const filteredEntries = getCurrentData().filter((entry) =>
    entry.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle add new entry
  const handleAddClick = () => {
    setEditingEntry(null);
    reset({ value: "" });
    setIsDialogOpen(true);
  };

  // Handle edit entry
  const handleEditClick = (entry: ConfigEntry) => {
    setEditingEntry(entry);
    reset({ value: entry.value });
    setIsDialogOpen(true);
  };

  // Handle delete entry
  const handleDeleteClick = (entry: ConfigEntry) => {
    setDeletingEntry(entry);
    setIsDeleteDialogOpen(true);
  };

  // Handle form submission
  const onSubmit = (data: ConfigFormData) => {
    const currentData = getCurrentData();

    if (editingEntry) {
      // Update existing entry
      const updatedData = currentData.map((entry) =>
        entry.id === editingEntry.id
          ? { ...entry, value: data.value, updatedAt: new Date() }
          : entry
      );
      updateCurrentData(updatedData);
      toast.success("Entry updated successfully");
    } else {
      // Create new entry
      const newEntry: ConfigEntry = {
        id: Date.now().toString(),
        type: activeTab,
        value: data.value,
        isActive: true,
        usageCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      updateCurrentData([...currentData, newEntry]);
      toast.success("Entry created successfully");
    }

    setIsDialogOpen(false);
    reset();
  };

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    if (!deletingEntry) return;

    const currentData = getCurrentData();
    const updatedData = currentData.filter((entry) => entry.id !== deletingEntry.id);
    updateCurrentData(updatedData);
    toast.success("Entry deleted successfully");
    setIsDeleteDialogOpen(false);
    setDeletingEntry(null);
  };

  // Get tab label
  const getTabLabel = (type: ConfigType): string => {
    switch (type) {
      case "maritalStatus":
        return "Marital Status";
      case "skills":
        return "Skills";
      case "salaryPeriods":
        return "Salary Periods";
      case "industries":
        return "Industries";
      case "companySizes":
        return "Company Sizes";
      default:
        return type;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">General Configuration</h1>
          <p className="text-muted-foreground mt-2">
            Manage system-wide configuration options
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ConfigType)}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="maritalStatus">Marital Status</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="salaryPeriods">Salary Periods</TabsTrigger>
            <TabsTrigger value="industries">Industries</TabsTrigger>
            <TabsTrigger value="companySizes">Company Sizes</TabsTrigger>
          </TabsList>

          {(["maritalStatus", "skills", "salaryPeriods", "industries", "companySizes"] as ConfigType[]).map(
            (tabType) => (
              <TabsContent key={tabType} value={tabType} className="space-y-4">
                {/* Search and Add Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search entries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button onClick={handleAddClick}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Entry
                  </Button>
                </div>

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Entry Name</TableHead>
                        <TableHead>Created Date</TableHead>
                        <TableHead>Updated Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEntries.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                            No entries found
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredEntries.map((entry) => (
                          <TableRow key={entry.id}>
                            <TableCell className="font-medium">{entry.value}</TableCell>
                            <TableCell>{entry.createdAt.toLocaleDateString()}</TableCell>
                            <TableCell>{entry.updatedAt.toLocaleDateString()}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleEditClick(entry)}
                                >
                                  <Edit2 className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDeleteClick(entry)}
                                >
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            )
          )}
        </Tabs>

        {/* Add/Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingEntry ? "Edit Entry" : "Add New Entry"}
              </DialogTitle>
              <DialogDescription>
                {editingEntry
                  ? `Update the ${getTabLabel(activeTab).toLowerCase()} entry`
                  : `Add a new ${getTabLabel(activeTab).toLowerCase()} entry`}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="value">Entry Name</Label>
                  <Input
                    id="value"
                    {...register("value", { required: "Entry name is required" })}
                    placeholder="Enter entry name"
                  />
                  {errors.value && (
                    <p className="text-sm text-destructive">{errors.value.message}</p>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingEntry ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                {deletingEntry && deletingEntry.usageCount && deletingEntry.usageCount > 0 ? (
                  <>
                    This entry is currently being used by {deletingEntry.usageCount} record(s).
                    Deleting it may affect existing data. This action cannot be undone.
                  </>
                ) : (
                  "This action cannot be undone. This will permanently delete the entry."
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
}
