import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { Download, Calendar } from "lucide-react";
import { useState } from "react";

export default function AdminReports() {
  const [dateRange, setDateRange] = useState("30d");

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">Download and view detailed monetization reports</p>
        </div>

        <div className="max-w-6xl">
          {/* Filters */}
          <div className="bg-card p-6 rounded-lg border border-border mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              <button className="bg-automotive-red text-automotive-red-foreground px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors">
                Apply
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Total Revenue</div>
              <div className="text-3xl font-bold text-automotive-red">AED 325,450</div>
              <div className="text-xs text-green-500 mt-2">↑ 12.5% from previous period</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Total Orders</div>
              <div className="text-3xl font-bold text-automotive-red">782</div>
              <div className="text-xs text-green-500 mt-2">↑ 8.2% from previous period</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Avg Order Value</div>
              <div className="text-3xl font-bold text-automotive-red">AED 416</div>
              <div className="text-xs text-green-500 mt-2">↑ 4.1% from previous period</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Conversion Rate</div>
              <div className="text-3xl font-bold text-automotive-red">3.2%</div>
              <div className="text-xs text-muted-foreground mt-2">Of total signups</div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Revenue by Package</h3>
              <div className="space-y-4">
                {[
                  { name: "Professional", value: 145600, percent: 44.8 },
                  { name: "Business", value: 98200, percent: 30.2 },
                  { name: "Quick", value: 54750, percent: 16.8 },
                  { name: "Single Post", value: 26900, percent: 8.3 }
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-card-foreground">AED {item.value.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-3 bg-automotive-gray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-automotive-red"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Credits Issued vs Spent</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Issued</span>
                    <span className="font-semibold text-green-500">12,500</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Spent</span>
                    <span className="font-semibold text-red-500">8,900</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Remaining</span>
                    <span className="font-semibold text-card-foreground">3,600</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Reports */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Available Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Orders Report", desc: "All orders, items, amounts, status" },
                { name: "Revenue Report", desc: "Revenue breakdown by package, date, channel" },
                { name: "Credits Ledger", desc: "All credit transactions and balances" },
                { name: "Campaign Report", desc: "Campaign performance and credit issuance" },
                { name: "Vouchers Report", desc: "Voucher codes, redemption rates, usage" },
                { name: "Refunds Report", desc: "All refund transactions and reversals" },
                { name: "Top Employers", desc: "Highest spending employers and their activity" },
                { name: "Tax Report", desc: "Taxable revenue and VAT collected" }
              ].map((report, idx) => (
                <div key={idx} className="flex items-start justify-between p-4 bg-automotive-gray rounded hover:bg-opacity-80 transition-colors">
                  <div>
                    <div className="font-semibold text-card-foreground">{report.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{report.desc}</div>
                  </div>
                  <button className="p-2 hover:bg-automotive-gray rounded flex-shrink-0">
                    <Download className="w-5 h-5 text-automotive-red" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Export Options</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-automotive-red text-automotive-red-foreground rounded font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export as CSV
              </button>
              <button className="px-6 py-2 border border-automotive-red text-automotive-red rounded font-semibold hover:bg-automotive-red hover:text-automotive-red-foreground transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export as Excel
              </button>
              <button className="px-6 py-2 border border-border text-foreground rounded font-semibold hover:bg-automotive-gray transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export as PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
