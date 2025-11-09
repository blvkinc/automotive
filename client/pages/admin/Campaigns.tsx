import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { Plus, Edit2, Trash2, BarChart3 } from "lucide-react";
import { useState } from "react";

interface Campaign {
  id: string;
  name: string;
  type: string;
  status: "active" | "upcoming" | "ended";
  budget: number;
  issued: number;
  startDate: string;
  endDate: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Early Bird Credits",
    type: "Welcome",
    status: "active",
    budget: 10000,
    issued: 6200,
    startDate: "2024-11-01",
    endDate: "2024-12-31"
  },
  {
    id: "2",
    name: "Auto Mechanica Giveaway",
    type: "Giveaway",
    status: "upcoming",
    budget: 5000,
    issued: 0,
    startDate: "2024-12-09",
    endDate: "2024-12-11"
  },
  {
    id: "3",
    name: "Referral Program Q4",
    type: "Referral",
    status: "active",
    budget: 3000,
    issued: 800,
    startDate: "2024-10-01",
    endDate: "2025-01-31"
  }
];

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [showForm, setShowForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600/10 text-green-600 border-green-600/20";
      case "upcoming":
        return "bg-blue-600/10 text-blue-600 border-blue-600/20";
      case "ended":
        return "bg-gray-600/10 text-gray-600 border-gray-600/20";
      default:
        return "";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Campaign Management</h1>
          <p className="text-muted-foreground mt-2">Create and manage promotional campaigns</p>
        </div>

        <div className="max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Campaigns ({campaigns.length})</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-automotive-red text-automotive-red-foreground px-4 py-2 rounded font-semibold flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Campaign
            </button>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-card-foreground">{campaign.name}</h3>
                    <span className="text-xs text-muted-foreground">{campaign.type}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Budget</div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-card-foreground">
                        {campaign.issued.toLocaleString()} / {campaign.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-automotive-gray rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-automotive-red transition-all"
                        style={{ width: `${(campaign.issued / campaign.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{new Date(campaign.startDate).toLocaleDateString()}</span>
                    <span>{new Date(campaign.endDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 border border-automotive-red text-automotive-red rounded text-sm font-semibold hover:bg-automotive-red hover:text-automotive-red-foreground transition-colors flex items-center justify-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    Details
                  </button>
                  <button className="p-2 hover:bg-automotive-gray rounded">
                    <Edit2 className="w-4 h-4 text-automotive-red" />
                  </button>
                  <button className="p-2 hover:bg-automotive-gray rounded">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Campaign Stats */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Campaign Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Total Budget</div>
                <div className="text-2xl font-bold text-automotive-red">
                  {campaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Total Issued</div>
                <div className="text-2xl font-bold text-automotive-red">
                  {campaigns.reduce((sum, c) => sum + c.issued, 0).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Active Campaigns</div>
                <div className="text-2xl font-bold text-automotive-red">
                  {campaigns.filter(c => c.status === "active").length}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Burn Rate</div>
                <div className="text-2xl font-bold text-automotive-red">
                  {((campaigns.reduce((sum, c) => sum + c.issued, 0) / campaigns.reduce((sum, c) => sum + c.budget, 0)) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg border border-border max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Create Campaign</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Campaign form would go here with fields for name, type, dates, budget, etc.
            </p>
            <button
              onClick={() => setShowForm(false)}
              className="w-full py-2 bg-automotive-red text-automotive-red-foreground rounded font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
