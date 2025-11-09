import AdminLayout from "@/components/dashboards/admin/AdminLayout";
import { Plus, Copy, Download } from "lucide-react";
import { useState } from "react";

interface Voucher {
  id: string;
  code: string;
  amount: number;
  campaign: string;
  issued: number;
  redeemed: number;
  expiryDate: string;
  status: "active" | "expired";
}

const mockVouchers: Voucher[] = [
  {
    id: "1",
    code: "EARLYBIRD500",
    amount: 500,
    campaign: "Early Bird Credits",
    issued: 100,
    redeemed: 65,
    expiryDate: "2024-12-31",
    status: "active"
  },
  {
    id: "2",
    code: "AUTOMECH100",
    amount: 100,
    campaign: "Auto Mechanica",
    issued: 500,
    redeemed: 12,
    expiryDate: "2024-12-15",
    status: "active"
  },
  {
    id: "3",
    code: "REFERRAL50",
    amount: 50,
    campaign: "Referral Program",
    issued: 300,
    redeemed: 189,
    expiryDate: "2025-01-31",
    status: "active"
  }
];

export default function AdminVouchers() {
  const [vouchers, setVouchers] = useState(mockVouchers);
  const [showForm, setShowForm] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Voucher Management</h1>
          <p className="text-muted-foreground mt-2">Generate and track promotional voucher codes</p>
        </div>

        <div className="max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Active Vouchers ({vouchers.length})</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-automotive-red text-automotive-red-foreground px-4 py-2 rounded font-semibold flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Generate Voucher
            </button>
          </div>

          {/* Vouchers Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-automotive-gray">
                  <th className="px-6 py-3 text-left font-semibold">Code</th>
                  <th className="px-6 py-3 text-left font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left font-semibold">Campaign</th>
                  <th className="px-6 py-3 text-left font-semibold">Issued</th>
                  <th className="px-6 py-3 text-left font-semibold">Redeemed</th>
                  <th className="px-6 py-3 text-left font-semibold">Redemption Rate</th>
                  <th className="px-6 py-3 text-left font-semibold">Expires</th>
                  <th className="px-6 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vouchers.map((voucher) => {
                  const redemptionRate = ((voucher.redeemed / voucher.issued) * 100).toFixed(1);
                  return (
                    <tr key={voucher.id} className="border-b border-border hover:bg-automotive-gray/50">
                      <td className="px-6 py-4">
                        <div className="font-bold text-automotive-red">{voucher.code}</div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-card-foreground">
                        AED {voucher.amount}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{voucher.campaign}</td>
                      <td className="px-6 py-4 text-muted-foreground">{voucher.issued}</td>
                      <td className="px-6 py-4 text-muted-foreground">{voucher.redeemed}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-automotive-gray rounded-full overflow-hidden">
                            <div
                              className="h-full bg-automotive-red"
                              style={{ width: `${redemptionRate}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{redemptionRate}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(voucher.expiryDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => copyToClipboard(voucher.code)}
                            className="p-2 hover:bg-automotive-gray rounded"
                            title="Copy code"
                          >
                            <Copy className={`w-4 h-4 ${copiedCode === voucher.code ? "text-green-500" : "text-automotive-red"}`} />
                          </button>
                          <button className="p-2 hover:bg-automotive-gray rounded" title="Download">
                            <Download className="w-4 h-4 text-automotive-red" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bulk Generate Section */}
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Bulk Generate Vouchers</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Quantity</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Amount (AED)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Campaign</label>
                <select className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red">
                  <option>Select Campaign</option>
                  <option>Early Bird Credits</option>
                  <option>Auto Mechanica</option>
                  <option>Referral Program</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Expiry Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>
            </div>
            <button className="mt-4 bg-automotive-red text-automotive-red-foreground px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors">
              Generate & Download CSV
            </button>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg border border-border max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Generate Voucher</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Voucher generation form with fields for quantity, amount, campaign, expiry, etc.
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
