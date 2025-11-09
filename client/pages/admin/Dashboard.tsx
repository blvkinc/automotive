import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { BarChart3, CreditCard, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Overview of monetization, campaigns, and reports</p>
        </div>

        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-automotive-red" />
                <div>
                  <div className="text-sm text-muted-foreground">Revenue (30d)</div>
                  <div className="text-2xl font-bold text-automotive-red">AED 145,600</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-automotive-red" />
                <div>
                  <div className="text-sm text-muted-foreground">Orders</div>
                  <div className="text-2xl font-bold text-automotive-red">320</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-automotive-red" />
                <div>
                  <div className="text-sm text-muted-foreground">Active Employers</div>
                  <div className="text-2xl font-bold text-automotive-red">128</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h2 className="text-xl font-semibold text-card-foreground mb-4">Campaign Performance</h2>
                <div className="text-sm text-muted-foreground">Top campaigns and credits issued vs remaining</div>
                <div className="mt-6">
                  {/* Placeholder chart area */}
                  <div className="h-48 bg-automotive-gray rounded border border-border flex items-center justify-center text-muted-foreground">
                    Chart Placeholder
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-semibold text-card-foreground mb-4">Recent Orders</h2>
                <div className="space-y-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex items-center justify-between p-3 bg-automotive-gray rounded">
                      <div>
                        <div className="text-sm font-semibold text-card-foreground">ORD-2024-10{i}</div>
                        <div className="text-xs text-muted-foreground">Professional - 5 jobs • AED 1149</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Paid</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h2 className="text-xl font-semibold text-card-foreground mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full py-2 px-3 bg-automotive-red text-automotive-red-foreground rounded font-semibold">Create Package</button>
                  <button className="w-full py-2 px-3 border border-automotive-red text-automotive-red rounded font-semibold">Create Campaign</button>
                  <button className="w-full py-2 px-3 border border-border text-foreground rounded font-semibold">Generate Voucher</button>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-semibold text-card-foreground mb-4">Recent Promos</h2>
                <div className="space-y-3">
                  <div className="bg-automotive-gray p-3 rounded">Early Bird Credits - 1200 issued</div>
                  <div className="bg-automotive-gray p-3 rounded">Auto Mechanica Giveaway - 500 issued</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
