import Layout from "@/components/Layout";
import { useState } from "react";
import { Eye, EyeOff, Upload } from "lucide-react";

interface EmployerFormData {
  // Registration Details
  companyName: string;
  businessEmail: string;
  password: string;
  confirmPassword: string;
  contactPersonName: string;
  designation: string;
  companyPhone: string;
  mobileNumber: string;

  // Company Verification & Legal
  tradeLicenseNumber: string;
  companyWebsite: string;
  country: string;
  city: string;
  tradeLicenseFile: File | null;

  // Organization Structure
  industryType: string;
  companySize: string;
  isGroupCompany: boolean;
  parentGroupName: string;

  // Account Security & Verification
  emailVerified: boolean;
  mobileVerified: boolean;
  captchaVerified: boolean;

  // Compliance
  agreeTerms: boolean;
  authorizedRepresentative: boolean;
}

export default function EmployerRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<EmployerFormData>({
    companyName: "",
    businessEmail: "",
    password: "",
    confirmPassword: "",
    contactPersonName: "",
    designation: "",
    companyPhone: "",
    mobileNumber: "",
    tradeLicenseNumber: "",
    companyWebsite: "",
    country: "",
    city: "",
    tradeLicenseFile: null,
    industryType: "",
    companySize: "",
    isGroupCompany: false,
    parentGroupName: "",
    emailVerified: false,
    mobileVerified: false,
    captchaVerified: false,
    agreeTerms: false,
    authorizedRepresentative: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        tradeLicenseFile: e.target.files![0],
      }));
    }
  };

  const validateEmail = (email: string): boolean => {
    // Must be a company domain email (not Gmail, Yahoo, etc.)
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const domain = email.split("@")[1]?.toLowerCase();
    return !personalDomains.includes(domain || "");
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.businessEmail.trim())
      newErrors.businessEmail = "Business email is required";
    if (!validateEmail(formData.businessEmail))
      newErrors.businessEmail = "Must be a company domain email (not Gmail/Yahoo)";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.contactPersonName.trim())
      newErrors.contactPersonName = "Contact person name is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.companyPhone.trim())
      newErrors.companyPhone = "Company phone is required";
    if (!formData.tradeLicenseNumber.trim())
      newErrors.tradeLicenseNumber = "Trade license number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.industryType) newErrors.industryType = "Industry type is required";
    if (!formData.companySize) newErrors.companySize = "Company size is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    if (!formData.authorizedRepresentative)
      newErrors.authorizedRepresentative = "Please confirm you are authorized";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Employer registration submitted:", formData);
    alert(
      "Thank you for registering! We'll verify your company information soon."
    );

    // Reset form
    setFormData({
      companyName: "",
      businessEmail: "",
      password: "",
      confirmPassword: "",
      contactPersonName: "",
      designation: "",
      companyPhone: "",
      mobileNumber: "",
      tradeLicenseNumber: "",
      companyWebsite: "",
      country: "",
      city: "",
      tradeLicenseFile: null,
      industryType: "",
      companySize: "",
      isGroupCompany: false,
      parentGroupName: "",
      emailVerified: false,
      mobileVerified: false,
      captchaVerified: false,
      agreeTerms: false,
      authorizedRepresentative: false,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-automotive-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Employer Registration
          </h1>
          <p className="text-xl text-muted-foreground">
            Register your company and find top automotive talent in the MENA region
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Registration Details */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Employer Registration Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Company Name
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.companyName && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Registered Business Email
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder="company@yourdomain.com"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.businessEmail && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.businessEmail}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Must be a company domain email (Gmail/Yahoo not allowed)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Password
                      <span className="text-automotive-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Confirm Password
                      <span className="text-automotive-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Contact Person Name
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.contactPersonName && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.contactPersonName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Designation / Role
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="e.g., HR Manager, Director"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.designation && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.designation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Company Phone Number
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="companyPhone"
                      value={formData.companyPhone}
                      onChange={handleInputChange}
                      placeholder="+971 4 XXX XXXX"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.companyPhone && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.companyPhone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Mobile Number (for OTP Verification)
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="+971 5X XXX XXXX"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Optional - for mobile verification
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Company Verification & Legal */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Company Verification & Legal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Trade License Number
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="tradeLicenseNumber"
                      value={formData.tradeLicenseNumber}
                      onChange={handleInputChange}
                      placeholder="Enter trade license number"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.tradeLicenseNumber && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.tradeLicenseNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Company Website URL
                    </label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleInputChange}
                      placeholder="https://www.company.com"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Country
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Country</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="saudi">Saudi Arabia</option>
                      <option value="egypt">Egypt</option>
                      <option value="kuwait">Kuwait</option>
                      <option value="qatar">Qatar</option>
                      <option value="bahrain">Bahrain</option>
                      <option value="oman">Oman</option>
                    </select>
                    {errors.country && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      City
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter city"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.city && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Upload Trade License
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-automotive-red transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="tradeLicenseFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label
                        htmlFor="tradeLicenseFile"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="text-muted-foreground" size={32} />
                        <span className="text-sm font-medium text-foreground">
                          {formData.tradeLicenseFile
                            ? formData.tradeLicenseFile.name
                            : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Optional</p>
                  </div>
                </div>
              </div>

              {/* Section 3: Organization Structure */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Organization Structure
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Industry / Department Type
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Industry Type</option>
                      <option value="sales">Sales & Marketing</option>
                      <option value="after-sales">After-Sales / Service</option>
                      <option value="manufacturing">
                        Manufacturing / Production / Engineering / Design
                      </option>
                      <option value="supply-chain">Supply Chain & Logistics</option>
                      <option value="hr-admin">HR & Admin</option>
                      <option value="management">Management / Field Service</option>
                    </select>
                    {errors.industryType && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.industryType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Company Size / Headcount
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Company Size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                    {errors.companySize && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.companySize}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isGroupCompany"
                        checked={formData.isGroupCompany}
                        onChange={handleInputChange}
                        className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer"
                      />
                      <span className="text-sm font-medium text-card-foreground">
                        Part of a larger automotive group
                      </span>
                    </label>
                  </div>

                  {formData.isGroupCompany && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Parent Group Name
                      </label>
                      <input
                        type="text"
                        name="parentGroupName"
                        value={formData.parentGroupName}
                        onChange={handleInputChange}
                        placeholder="Enter parent group name"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 4: Account Security & Verification */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Account Security & Verification
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-input/50 rounded-lg border border-border">
                    <input
                      type="checkbox"
                      name="emailVerified"
                      checked={formData.emailVerified}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer"
                    />
                    <div>
                      <span className="text-sm font-medium text-card-foreground block">
                        Email Verification
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Verification link or OTP will be sent to your email
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-input/50 rounded-lg border border-border">
                    <input
                      type="checkbox"
                      name="mobileVerified"
                      checked={formData.mobileVerified}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer"
                    />
                    <div>
                      <span className="text-sm font-medium text-card-foreground block">
                        Mobile Number Verification (Optional)
                      </span>
                      <span className="text-xs text-muted-foreground">
                        OTP will be sent to your mobile number
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-input/50 rounded-lg border border-border">
                    <input
                      type="checkbox"
                      name="captchaVerified"
                      checked={formData.captchaVerified}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer"
                    />
                    <div>
                      <span className="text-sm font-medium text-card-foreground block">
                        Captcha / reCAPTCHA Verification
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Help us verify you are human
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Section 5: Compliance & Acknowledgements */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Compliance & Acknowledgements
                </h2>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer mt-1"
                    />
                    <div>
                      <span className="text-sm text-card-foreground">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-automotive-red hover:underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-automotive-red hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-automotive-red text-sm ml-8">
                      {errors.agreeTerms}
                    </p>
                  )}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="authorizedRepresentative"
                      checked={formData.authorizedRepresentative}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer mt-1"
                    />
                    <div>
                      <span className="text-sm text-card-foreground">
                        I confirm that I am an authorized representative of this
                        company and have the authority to register on its behalf
                      </span>
                    </div>
                  </label>
                  {errors.authorizedRepresentative && (
                    <p className="text-automotive-red text-sm ml-8">
                      {errors.authorizedRepresentative}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-automotive-red text-automotive-red-foreground px-12 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
