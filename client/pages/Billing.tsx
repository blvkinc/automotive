import Layout from "@/components/Layout";
import { Download, Eye, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Invoice {
  id: string;
  orderId: string;
  date: string;
  packageName: string;
  amount: number;
  status: "paid" | "pending" | "refunded";
  description: string;
  pdfUrl?: string;
}

const mockInvoices: Invoice[] = [
  {
    id: "INV-2024-001",
    orderId: "ORD-2024-1001",
    date: "2024-12-05",
    packageName: "Professional - 5 jobs",
    amount: 1149,
    status: "paid",
    description: "45 days validity + 2 featured listings",
    pdfUrl: "#"
  },
  {
    id: "INV-2024-002",
    orderId: "ORD-2024-1002",
    date: "2024-11-15",
    packageName: "Business - 10 jobs",
    amount: 2289,
    status: "paid",
    description: "45 days validity",
    pdfUrl: "#"
  },
  {
    id: "INV-2024-003",
    orderId: "ORD-2024-1003",
    date: "2024-10-20",
    packageName: "Quick - 3 jobs",
    amount: 699,
    status: "paid",
    description: "45 days validity + 1 featured listing",
    pdfUrl: "#"
  },
  {
    id: "INV-2024-004",
    orderId: "ORD-2024-1004",
    date: "2024-09-10",
    packageName: "Single Post - 1 job",
    amount: 249,
    status: "paid",
    description: "45 days validity",
    pdfUrl: "#"
  }
];

export default function Billing() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-600/10 text-green-600 border-green-600/20";
      case "pending":
        return "bg-yellow-600/10 text-yellow-600 border-yellow-600/20";
      case "refunded":
        return "bg-red-600/10 text-red-600 border-red-600/20";
      default:
        return "bg-gray-600/10 text-gray-600 border-gray-600/20";
    }
  };

  const totalSpent = mockInvoices
    .filter(inv => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-automotive-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Billing & Invoices
          </h1>
          <p className="text-muted-foreground">
            Manage your payments and download invoices
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Total Spent</div>
              <div className="text-3xl font-bold text-automotive-red">
                AED {totalSpent.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Across {mockInvoices.length} invoices
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Active Jobs</div>
              <div className="text-3xl font-bold text-automotive-red">5</div>
              <div className="text-xs text-muted-foreground mt-2">
                Valid for 35 more days
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Available Credits</div>
              <div className="text-3xl font-bold text-automotive-red">3</div>
              <div className="text-xs text-muted-foreground mt-2">
                From Professional package
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex gap-4 border-b border-border">
              <button className="px-4 py-2 text-card-foreground font-semibold border-b-2 border-automotive-red">
                Invoices
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Payments
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Refunds
              </button>
            </div>
          </div>

          {/* Invoices List */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-automotive-gray">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Invoice
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-card-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-border hover:bg-automotive-gray/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-card-foreground">
                            {invoice.id}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Order: {invoice.orderId}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(invoice.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {invoice.packageName}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-card-foreground">
                          AED {invoice.amount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(invoice.status)}`}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedInvoice(invoice)}
                            className="p-2 hover:bg-automotive-gray rounded transition-colors"
                            title="View invoice"
                          >
                            <Eye className="w-4 h-4 text-automotive-red" />
                          </button>
                          <button
                            className="p-2 hover:bg-automotive-gray rounded transition-colors"
                            title="Download PDF"
                          >
                            <Download className="w-4 h-4 text-automotive-red" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="px-3 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">
              Previous
            </button>
            <button className="px-3 py-2 bg-automotive-red text-automotive-red-foreground rounded">
              1
            </button>
            <button className="px-3 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-automotive-gray py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Payment Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Visa",
                number: "•••• •••• •••• 4242",
                name: "John Smith",
                expires: "12/26"
              },
              {
                type: "Mastercard",
                number: "•••• •••• •••• 5555",
                name: "John Smith",
                expires: "08/25"
              }
            ].map((method, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      {method.type}
                    </div>
                    <div className="text-lg font-semibold text-card-foreground mt-1">
                      {method.number}
                    </div>
                  </div>
                  <span className="text-xs bg-automotive-red/20 text-automotive-red px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div>
                    <div className="text-xs opacity-75">Name</div>
                    <div>{method.name}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">Expires</div>
                    <div>{method.expires}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 text-sm border border-border rounded hover:border-automotive-red transition-colors text-foreground">
                    Edit
                  </button>
                  <button className="flex-1 py-2 px-3 text-sm border border-red-600/50 rounded text-red-400 hover:bg-red-600/10 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full md:w-auto bg-automotive-red text-automotive-red-foreground px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
            Add Payment Method
          </button>
        </div>
      </section>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-card-foreground mb-2">
                    Invoice {selectedInvoice.id}
                  </h2>
                  <p className="text-muted-foreground">Order {selectedInvoice.orderId}</p>
                </div>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Invoice Content */}
              <div className="space-y-6 mb-8 pb-8 border-b border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">FROM</div>
                    <div className="font-semibold text-card-foreground">Automotivate ME Careers</div>
                    <div className="text-sm text-muted-foreground">Dubai, UAE</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">TO</div>
                    <div className="font-semibold text-card-foreground">Your Company</div>
                    <div className="text-sm text-muted-foreground">Invoice Date: {new Date(selectedInvoice.date).toLocaleDateString()}</div>
                  </div>
                </div>

                {/* Line Items */}
                <div className="bg-automotive-gray rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-muted-foreground">Description</th>
                        <th className="text-right py-2 text-muted-foreground">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 text-card-foreground">{selectedInvoice.packageName}</td>
                        <td className="text-right font-semibold text-card-foreground">
                          AED {(selectedInvoice.amount * 0.952).toFixed(0)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-muted-foreground">Tax (5% VAT)</td>
                        <td className="text-right text-muted-foreground">
                          AED {(selectedInvoice.amount * 0.048).toFixed(0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-end mb-8">
                <div className="text-right">
                  <div className="text-muted-foreground mb-2">Total Amount</div>
                  <div className="text-4xl font-bold text-automotive-red">
                    AED {selectedInvoice.amount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="p-4 bg-automotive-gray rounded mb-8 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-automotive-red flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  This invoice has been {selectedInvoice.status}. Thank you for your business!
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-automotive-red text-automotive-red-foreground rounded font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="flex-1 py-2 border border-border rounded font-semibold hover:bg-automotive-gray transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
