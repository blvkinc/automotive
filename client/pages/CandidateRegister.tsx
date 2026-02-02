import React, { useState } from "react";
import Layout from "../components/Layout";
import { Upload, Eye, EyeOff, X } from "lucide-react";

interface CandidateFormData {
  // Basic Information
  firstName: string;
  surname: string;
  mobileNumber: string;
  country: string;
  city: string;

  // Personal Details
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;

  // Professional Details
  yearsExperience: string;
  department: string;
  industry: string;

  // Education & Skills
  qualification: string;
  specialSkills: string;
  languages: string[];

  // Eligibility & Status
  residenceLocation: string;
  visaStatus: string;
  availability: string;
  hasDriversLicense: boolean;

  // Online Presence
  linkedinProfile: string;
  socialLink: string;

  // Uploads
  resumeFile: File | null;
  photoFile: File | null;

  // Declarations
  confirmAccurate: boolean;
  agreeTerms: boolean;
}

const initialState: CandidateFormData = {
  firstName: "",
  surname: "",
  mobileNumber: "",
  country: "",
  city: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  nationality: "",
  yearsExperience: "",
  department: "",
  industry: "",
  qualification: "",
  specialSkills: "",
  languages: [],
  residenceLocation: "",
  visaStatus: "",
  availability: "",
  hasDriversLicense: false,
  linkedinProfile: "",
  socialLink: "",
  resumeFile: null,
  photoFile: null,
  confirmAccurate: false,
  agreeTerms: false,
};

const languageOptions = [
  "English",
  "Arabic",
  "Hindi",
  "Urdu",
  "French",
  "Spanish",
  "German",
  "Chinese",
];

export default function CandidateRegister() {
  const [formData, setFormData] = useState<CandidateFormData>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleLanguagesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.options);
    const selected = options.filter((o) => o.selected).map((o) => o.value);
    setFormData((prev) => ({ ...prev, languages: selected }));
    if (errors.languages) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.languages;
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.surname.trim())
      newErrors.surname = "Surname is required";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    if (!formData.country)
      newErrors.country = "Country is required";
    if (!formData.city.trim())
      newErrors.city = "City is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender)
      newErrors.gender = "Gender is required";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Marital status is required";
    if (!formData.nationality.trim())
      newErrors.nationality = "Nationality is required";
    if (!formData.yearsExperience)
      newErrors.yearsExperience = "Years of experience is required";
    if (!formData.department)
      newErrors.department = "Department is required";
    if (!formData.qualification)
      newErrors.qualification = "Qualification is required";
    if (!formData.languages.length)
      newErrors.languages = "Please select at least one language";
    if (!formData.resumeFile)
      newErrors.resumeFile = "Resume/CV is required";
    if (!formData.confirmAccurate)
      newErrors.confirmAccurate = "Please confirm the information is accurate";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Please agree to Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const safeData = {
      ...formData,
      resumeFile: formData.resumeFile?.name ?? null,
      photoFile: formData.photoFile?.name ?? null,
    };
    console.log("Candidate registration submitted:", safeData);
    alert("Thank you for registering! We will review your application shortly.");
    setFormData(initialState);
    setErrors({});
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-automotive-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Candidate Registration
          </h1>
          <p className="text-xl text-muted-foreground">
            Find your next automotive opportunity in the MENA region
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
            {Object.keys(errors).length > 0 && (
              <div className="bg-automotive-red/10 border border-automotive-red text-automotive-red p-4 rounded-lg mb-6">
                <p className="font-semibold">Please fix the following errors:</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  {Object.values(errors).map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Basic Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Basic Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      First Name
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.firstName && (
                      <p className="text-automotive-red text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Surname
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Enter surname"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.surname && (
                      <p className="text-automotive-red text-sm mt-1">{errors.surname}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Mobile Number
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="+971 5X XXX XXXX"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.mobileNumber && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Country
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
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
                      <p className="text-automotive-red text-sm mt-1">{errors.country}</p>
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
                      onChange={handleChange}
                      placeholder="Enter city"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.city && (
                      <p className="text-automotive-red text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Personal Details */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Personal Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Date of Birth
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.dateOfBirth && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Gender
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Prefer not to say</option>
                    </select>
                    {errors.gender && (
                      <p className="text-automotive-red text-sm mt-1">{errors.gender}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Marital Status
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.maritalStatus && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.maritalStatus}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Nationality
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Enter your nationality"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.nationality && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.nationality}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 3: Professional Details */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Professional Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Years of Experience
                      <span className="text-automotive-red">*</span>
                    </label>
                    <input
                      type="number"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleChange}
                      min="0"
                      placeholder="Enter years"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                    {errors.yearsExperience && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.yearsExperience}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Department
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Department</option>
                      <option value="sales">Sales & Marketing</option>
                      <option value="after-sales">After-Sales / Service</option>
                      <option value="manufacturing">Manufacturing / Production / Engineering / Design</option>
                      <option value="supply-chain">Supply Chain & Logistics</option>
                      <option value="hr-admin">HR & Admin</option>
                      <option value="management">Management / Field Service</option>
                    </select>
                    {errors.department && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Industry / Segment
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g., Passenger, Commercial, EV/Tech, Finance"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Education & Skills */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Education & Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Highest Qualification / Degree
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Qualification</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                    {errors.qualification && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.qualification}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Special Skills / Value-Add
                      <span className="text-muted-foreground text-xs ml-2">(Max 200 characters)</span>
                    </label>
                    <textarea
                      name="specialSkills"
                      value={formData.specialSkills}
                      onChange={handleChange}
                      maxLength={200}
                      placeholder="Describe your key skills and what you bring to the role"
                      rows={3}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.specialSkills.length}/200 characters
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Languages Known
                      <span className="text-automotive-red">*</span>
                    </label>
                    <select
                      multiple
                      name="languages"
                      value={formData.languages}
                      onChange={handleLanguagesChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                      size={5}
                    >
                      <option value="english">English</option>
                      <option value="arabic">Arabic</option>
                      <option value="hindi">Hindi</option>
                      <option value="urdu">Urdu</option>
                      <option value="french">French</option>
                      <option value="spanish">Spanish</option>
                      <option value="german">German</option>
                      <option value="chinese">Chinese</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hold Ctrl/Cmd to select multiple languages
                    </p>
                    {errors.languages && (
                      <p className="text-automotive-red text-sm mt-1">{errors.languages}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 5: Eligibility & Status */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Eligibility & Status
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Residence Location
                    </label>
                    <select
                      name="residenceLocation"
                      value={formData.residenceLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Location</option>
                      <option value="middle-east">Middle East</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Visa Status
                    </label>
                    <select
                      name="visaStatus"
                      value={formData.visaStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Visa Status</option>
                      <option value="employment">Employment</option>
                      <option value="visit">Visit</option>
                      <option value="student">Student</option>
                      <option value="dependent">Dependent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Availability
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    >
                      <option value="">Select Availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                    </select>
                  </div>

                  <div className="flex items-center pt-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasDriversLicense"
                        checked={formData.hasDriversLicense}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer"
                      />
                      <span className="text-sm font-medium text-card-foreground">
                        I have a valid driver's license
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Section 6: Online Presence */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Online Presence
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Optional Social Link (Facebook / Portfolio)
                    </label>
                    <input
                      type="url"
                      name="socialLink"
                      value={formData.socialLink}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                    />
                  </div>
                </div>
              </div>

              {/* Section 7: Uploads */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Uploads
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Upload Resume / CV
                      <span className="text-automotive-red">*</span>
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-automotive-red transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="resumeFile"
                        name="resumeFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label
                        htmlFor="resumeFile"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="text-muted-foreground" size={32} />
                        <span className="text-sm font-medium text-foreground">
                          {formData.resumeFile
                            ? formData.resumeFile.name
                            : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX (Max 5MB)
                        </span>
                      </label>
                    </div>
                    {errors.resumeFile && (
                      <p className="text-automotive-red text-sm mt-1">
                        {errors.resumeFile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Upload Profile Photo
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-automotive-red transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="photoFile"
                        name="photoFile"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <label
                        htmlFor="photoFile"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="text-muted-foreground" size={32} />
                        <span className="text-sm font-medium text-foreground">
                          {formData.photoFile
                            ? formData.photoFile.name
                            : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          JPG, PNG (Max 3MB)
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Optional</p>
                  </div>
                </div>
              </div>

              {/* Section 8: Declarations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  Declarations
                </h2>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="confirmAccurate"
                      checked={formData.confirmAccurate}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer mt-1"
                    />
                    <span className="text-sm text-card-foreground">
                      I confirm that the information provided is accurate.
                    </span>
                  </label>
                  {errors.confirmAccurate && (
                    <p className="text-automotive-red text-sm ml-8">
                      {errors.confirmAccurate}
                    </p>
                  )}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-border bg-input accent-automotive-red cursor-pointer mt-1"
                    />
                    <span className="text-sm text-card-foreground">
                      I agree to Automotivate's{" "}
                      <a
                        href="/terms"
                        className="text-automotive-red hover:underline"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-automotive-red hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-automotive-red text-sm ml-8">
                      {errors.agreeTerms}
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
