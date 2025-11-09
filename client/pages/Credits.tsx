import Layout from "@/components/Layout";
import { AlertCircle, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

interface CreditEvent {
  id: string;
  date: string;
  eventType: "mint" | "spend" | "expire" | "refund" | "adjust";
  amount: number;
  creditType: string;
  description: string;
  reference?: string;
  balance: number;
}

const mockCredits: CreditEvent[] = [
  {
    id: "1",
    date: "2024-12-05",
    eventType: "mint",
    amount: 5,
    creditType: "Posting Credit",
    description: "Purchased Professional package - 5 job postings",
    reference: "ORD-2024-1001",
    balance: 5
  },
  {
    id: "2",
    date: "2024-12-06",
    eventType: "spend",
    amount: -1,
    creditType: "Posting Credit",
    description: "Posted job: Senior Mechanic - Dubai",
    reference: "JOB-2024-001",
    balance: 4
  },
  {
    id: "3",
    date: "2024-12-07",
    eventType: "spend",
    amount: -1,
    creditType: "Posting Credit",
    description: "Posted job: Sales Manager - Abu Dhabi",
    reference: "JOB-2024-002",
    balance: 3
  },
  {
    id: "4",
    date: "2024-11-20",
    eventType: "mint",
    amount: 10,
    creditType: "Posting Credit",
    description: "Purchased Business package - 10 job postings",
    reference: "ORD-2024-1002",
    balance: 13
  },
  {
    id: "5",
    date: "2024-11-15",
    eventType: "mint",
    amount: 3,
    creditType: "Extension Credit",
    description: "Bonus credits from referral - Employer referral earned",
    reference: "REF-2024-001",
    balance: 3
  },
  {
    id: "6",
    date: "2024-11-10",
    eventType: "mint",
    amount: 2,
    creditType: "Posting Credit",
    description: "Promotional credits - Early bird campaign",
    reference: "PROMO-EARLYBIRD",
    balance: 2
  },
  {
    id: "7",
    date: "2024-10-20",
    eventType: "adjust",
    amount: 5,
    creditType: "Posting Credit",
    description: "Manual adjustment - Support grant",
    reference: "SUPPORT-GRANT",
    balance: 5
  }
];

export default function Credits() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const postingCredits = mockCredits.filter(c => c.creditType === "Posting Credit");
  const extensionCredits = mockCredits.filter(c => c.creditType === "Extension Credit");
  
  const availablePosting = postingCredits.length > 0 
    ? postingCredits[postingCredits.length - 1].balance 
    : 0;
  const availableExtension = extensionCredits.length > 0 
    ? extensionCredits[extensionCredits.length - 1].balance 
    : 0;

  const filteredCredits = selectedType
    ? mockCredits.filter(c => c.creditType === selectedType)
    : mockCredits;

  const getEventIcon = (type: string) => {
    switch (type) {
      case "mint":
      case "refund":
      case "adjust":
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "spend":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case "expire":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getEventLabel = (type: string) => {
    switch (type) {
      case "mint":
        return "Credit Added";
      case "spend":
        return "Credit Used";
      case "expire":
        return "Credit Expired";
      case "refund":
        return "Refund";
      case "adjust":
        return "Adjustment";
      default:
        return "Unknown";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-automotive-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Credits & Ledger
          </h1>
          <p className="text-muted-foreground">
            Track your credits and see all transactions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Posting Credits</div>
              <div className="text-3xl font-bold text-automotive-red mb-2">
                {availablePosting}
              </div>
              <div className="text-xs text-muted-foreground">
                Available to use
              </div>
              <button className="mt-4 w-full py-2 px-4 bg-automotive-red text-automotive-red-foreground rounded font-semibold hover:bg-opacity-90 transition-colors text-sm">
                Buy More Credits
              </button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Extension Credits</div>
              <div className="text-3xl font-bold text-automotive-red mb-2">
                {availableExtension}
              </div>
              <div className="text-xs text-muted-foreground">
                Available to extend jobs
              </div>
              <button className="mt-4 w-full py-2 px-4 border border-automotive-red text-automotive-red rounded font-semibold hover:bg-automotive-red hover:text-automotive-red-foreground transition-colors text-sm">
                Buy More
              </button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Expiring Soon</div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                2
              </div>
              <div className="text-xs text-muted-foreground">
                Expires within 30 days
              </div>
              <button className="mt-4 w-full py-2 px-4 border border-yellow-600/50 text-yellow-600 rounded font-semibold hover:bg-yellow-600/10 transition-colors text-sm">
                View Details
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  selectedType === null
                    ? "bg-automotive-red text-automotive-red-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("Posting Credit")}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  selectedType === "Posting Credit"
                    ? "bg-automotive-red text-automotive-red-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                Posting Credits
              </button>
              <button
                onClick={() => setSelectedType("Extension Credit")}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  selectedType === "Extension Credit"
                    ? "bg-automotive-red text-automotive-red-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                Extension Credits
              </button>
            </div>
          </div>

          {/* Ledger */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-card-foreground px-4">
              Transaction History
            </div>
            
            {filteredCredits.map((event) => (
              <div key={event.id} className="bg-card p-6 rounded-lg border border-border hover:border-automotive-red transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getEventIcon(event.eventType)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">
                        {getEventLabel(event.eventType)}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        {event.reference && (
                          <>
                            <span>•</span>
                            <span>Ref: {event.reference}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <div className={`font-bold text-lg ${event.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                      {event.amount > 0 ? "+" : ""}{event.amount}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Balance: {event.balance}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              2
            </button>
            <button className="px-3 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-automotive-gray py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">How Credits Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-card-foreground mb-3">Posting Credits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Required to post a new job listing</li>
                <li>• Costs 1 credit per job posting</li>
                <li>• Valid for 45 days from purchase</li>
                <li>• Non-transferable between accounts</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-card-foreground mb-3">Extension Credits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Used to extend existing job listings</li>
                <li>• Costs 1 credit per 45-day extension</li>
                <li>• Valid for 12 months from purchase</li>
                <li>• Earned via referrals</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-card-foreground mb-3">Expiry Policy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Credits expire after 12 months</li>
                <li>• You'll receive reminders 30 days before expiry</li>
                <li>• Unused credits cannot be refunded</li>
                <li>• Promo credits may have different expiry dates</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold text-card-foreground mb-3">Need Help?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contact support for credit adjustments</li>
                <li>• Refund requests must be within 7 days</li>
                <li>• View FAQ for common questions</li>
                <li>• Email: support@automotivate.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Running Low on Credits?</h2>
          <p className="text-muted-foreground mb-8">
            Purchase more credits or packages to continue posting and extending your job listings.
          </p>
          <button className="inline-block bg-automotive-red text-automotive-red-foreground px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
            Buy Credits Now
          </button>
        </div>
      </section>
    </Layout>
  );
}
