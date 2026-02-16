import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { AlertCircle, Lock } from "lucide-react";

const packageDetails = {
  single: { name: "Single Post", jobs: 1, price: 249, duration: "45 days" },
  quick: { name: "Quick", jobs: 3, price: 699, duration: "45 days" },
  professional: { name: "Professional", jobs: 5, price: 1149, duration: "45 days" },
  business: { name: "Business", jobs: 10, price: 2289, duration: "45 days" }
};

interface CheckoutFormData {
  companyName: string;
  email: string;
  phone: string;
  trn: string;
  address: string;
  city: string;
  country: string;
  featured: boolean;
  featuredJobs: number;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export default function Checkout() {
  const { packageId } = useParams();
  const pkg = packageDetails[packageId as keyof typeof packageDetails] || packageDetails.professional;

  const [formData, setFormData] = useState<CheckoutFormData>({
    companyName: "",
    email: "",
    phone: "",
    trn: "",
    address: "",
    city: "",
    country: "",
    featured: false,
    featuredJobs: 0,
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const featuredPrice = 125;
  const totalFeatured = formData.featured ? featuredPrice * (formData.featuredJobs || 1) : 0;
  const subtotal = pkg.price + totalFeatured;
  const tax = Math.round(subtotal * 0.05); // 5% VAT
  const total = subtotal + tax;

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
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment processed successfully! (UI Demo)\n\nIn production, this would connect to Stripe.");
    }, 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <Link to="/pricing" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Pricing
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Complete Your Purchase
          </h1>
          <p className="text-muted-foreground mt-2">
            Secure checkout for {pkg.name} package
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Information */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">
                    Company Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Company Name <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter company name"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Email <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter email"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Phone <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        TRN (Optional)
                      </label>
                      <input
                        type="text"
                        name="trn"
                        value={formData.trn}
                        onChange={handleInputChange}
                        placeholder="Enter TRN number"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Address <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter address"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        City <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter city"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Country <span className="text-automotive-red">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      >
                        <option value="">Select Country</option>
                        <option value="uae">United Arab Emirates</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="egypt">Egypt</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Featured Add-on */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">
                    Add-ons
                  </h2>

                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-5 h-5 mt-1 rounded border border-border bg-input cursor-pointer"
                    />
                    <div>
                      <div className="font-semibold text-card-foreground">
                        Featured Listing
                      </div>
                      <div className="text-sm text-muted-foreground">
                        AED 125 per job • Boost visibility and get more applications
                      </div>
                    </div>
                  </label>

                  {formData.featured && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Number of Jobs to Feature
                      </label>
                      <input
                        type="number"
                        name="featuredJobs"
                        value={formData.featuredJobs}
                        onChange={handleInputChange}
                        min="1"
                        max={pkg.jobs}
                        className="w-full md:w-48 px-4 py-2 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        You can feature up to {pkg.jobs} jobs in this package
                      </p>
                    </div>
                  )}
                </div>

                {/* Payment Information */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">
                    Payment Information
                  </h2>

                  <div className="flex items-center gap-2 mb-6 p-4 bg-automotive-gray rounded">
                    <Lock className="w-5 h-5 text-automotive-red flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Secure payment powered by Stripe. Your card details are encrypted.
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Name on Card <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        placeholder="Full name on card"
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Card Number <span className="text-automotive-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                          Expiry Date <span className="text-automotive-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                          CVC <span className="text-automotive-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          required
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 mt-1 rounded border border-border bg-input cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-automotive-red hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-automotive-red hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-automotive-red text-automotive-red-foreground py-3 rounded font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : `Pay AED ${total.toLocaleString()}`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg border border-border sticky top-4">
                <h3 className="text-xl font-bold text-card-foreground mb-6">
                  Order Summary
                </h3>

                {/* Package */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">{pkg.name}</span>
                    <span className="font-semibold text-card-foreground">
                      AED {pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.jobs} job posting{pkg.jobs > 1 ? "s" : ""} for {pkg.duration}
                  </div>
                </div>

                {/* Featured Add-on */}
                {formData.featured && (
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Featured Listing</span>
                      <span className="font-semibold text-card-foreground">
                        AED {totalFeatured.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formData.featuredJobs} job{formData.featuredJobs !== 1 ? "s" : ""} × AED {featuredPrice}
                    </div>
                  </div>
                )}

                {/* Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-card-foreground">AED {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (5% VAT)</span>
                    <span className="text-card-foreground">AED {tax.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-card-foreground">Total</span>
                  <span className="text-3xl font-bold text-automotive-red">
                    AED {total.toLocaleString()}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 bg-automotive-gray rounded text-xs text-muted-foreground space-y-2">
                  <div className="flex gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Invoice will be sent to your email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
