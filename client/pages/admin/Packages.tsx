import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { Edit2, Trash2, Plus } from "lucide-react";
import { useState } from "react";

interface Package {
  id: string;
  name: string;
  jobs: number;
  price: number;
  duration: number;
  visible: boolean;
}

const mockPackages: Package[] = [
  { id: "1", name: "Single Post", jobs: 1, price: 249, duration: 45, visible: true },
  { id: "2", name: "Quick", jobs: 3, price: 699, duration: 45, visible: true },
  { id: "3", name: "Professional", jobs: 5, price: 1149, duration: 45, visible: true },
  { id: "4", name: "Business", jobs: 10, price: 2289, duration: 45, visible: true }
];

export default function AdminPackages() {
  const [packages, setPackages] = useState(mockPackages);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    jobs: "",
    price: "",
    duration: "45",
    visible: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setPackages(packages.map(p => p.id === editingId ? {
        id: editingId,
        name: formData.name,
        jobs: parseInt(formData.jobs),
        price: parseInt(formData.price),
        duration: parseInt(formData.duration),
        visible: formData.visible
      } : p));
      setEditingId(null);
    } else {
      setPackages([...packages, {
        id: String(packages.length + 1),
        name: formData.name,
        jobs: parseInt(formData.jobs),
        price: parseInt(formData.price),
        duration: parseInt(formData.duration),
        visible: formData.visible
      }]);
    }
    setFormData({ name: "", jobs: "", price: "", duration: "45", visible: true });
    setShowForm(false);
  };

  const handleEdit = (pkg: Package) => {
    setFormData({
      name: pkg.name,
      jobs: String(pkg.jobs),
      price: String(pkg.price),
      duration: String(pkg.duration),
      visible: pkg.visible
    });
    setEditingId(pkg.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Package Management</h1>
          <p className="text-muted-foreground mt-2">Create and manage job posting packages</p>
        </div>

        <div className="max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Packages ({packages.length})</h2>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingId(null);
                setFormData({ name: "", jobs: "", price: "", duration: "45", visible: true });
              }}
              className="bg-automotive-red text-automotive-red-foreground px-4 py-2 rounded font-semibold flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Package
            </button>
          </div>

          {/* Packages Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-automotive-gray">
                  <th className="px-6 py-3 text-left font-semibold">Name</th>
                  <th className="px-6 py-3 text-left font-semibold">Jobs</th>
                  <th className="px-6 py-3 text-left font-semibold">Price (AED)</th>
                  <th className="px-6 py-3 text-left font-semibold">Duration (days)</th>
                  <th className="px-6 py-3 text-left font-semibold">Visible</th>
                  <th className="px-6 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="border-b border-border hover:bg-automotive-gray/50">
                    <td className="px-6 py-4 font-semibold text-card-foreground">{pkg.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{pkg.jobs}</td>
                    <td className="px-6 py-4 text-muted-foreground">{pkg.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-muted-foreground">{pkg.duration}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        pkg.visible 
                          ? "bg-green-600/10 text-green-600 border border-green-600/20"
                          : "bg-gray-600/10 text-gray-600 border border-gray-600/20"
                      }`}>
                        {pkg.visible ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(pkg)}
                          className="p-2 hover:bg-automotive-gray rounded"
                        >
                          <Edit2 className="w-4 h-4 text-automotive-red" />
                        </button>
                        <button
                          onClick={() => handleDelete(pkg.id)}
                          className="p-2 hover:bg-automotive-gray rounded"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg border border-border max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              {editingId ? "Edit Package" : "Create Package"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Professional"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Number of Jobs
                </label>
                <input
                  type="number"
                  name="jobs"
                  value={formData.jobs}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Price (AED)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Duration (days)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="visible"
                  id="visible"
                  checked={formData.visible}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border border-border"
                />
                <label htmlFor="visible" className="text-sm text-card-foreground">
                  Visible to customers
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2 border border-border rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-automotive-red text-automotive-red-foreground rounded font-semibold"
                >
                  {editingId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
