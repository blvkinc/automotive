import React, { useState } from "react";
import Layout from "../components/Layout";

interface CandidateFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  country: string;
  currentCity: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  jobTitle: string;
  employer: string;
  yearsExperience: string;
  department: string;
  industry: string;
  qualification: string;
  fieldOfStudy: string;
  university: string;
  specialSkills: string;
  languages: string[];
  residenceLocation: string;
  visaStatus: string;
  availability: string;
  driversLicense: boolean;
  linkedinProfile: string;
  socialLink: string;
  resumeFile: File | null;
  photoFile: File | null;
  agreeAccurate: boolean;
  agreeTnC: boolean;
}

const initialState: CandidateFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  country: "",
  currentCity: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  nationality: "",
  jobTitle: "",
  employer: "",
  yearsExperience: "",
  department: "",
  industry: "",
  qualification: "",
  fieldOfStudy: "",
  university: "",
  specialSkills: "",
  languages: [],
  residenceLocation: "",
  visaStatus: "",
  availability: "",
  driversLicense: false,
  linkedinProfile: "",
  socialLink: "",
  resumeFile: null,
  photoFile: null,
  agreeAccurate: false,
  agreeTnC: false,
};

export default function CandidateRegister() {
  const [formData, setFormData] = useState<CandidateFormData>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguagesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.options);
    const selected = options.filter((o) => o.selected).map((o) => o.value);
    setFormData((prev) => ({ ...prev, languages: selected }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const validate = () => {
    setError(null);
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.password) return "Password is required.";
    if (formData.password !== formData.confirmPassword) return "Passwords do not match.";
    if (!formData.phone.trim()) return "Mobile number is required.";
    if (!formData.country) return "Country is required.";
    if (!formData.currentCity) return "City is required.";
    if (!formData.languages.length) return "Please select at least one language.";
    if (!formData.resumeFile) return "Please upload your resume/CV.";
    if (!formData.agreeAccurate) return "Please confirm information accuracy.";
    if (!formData.agreeTnC) return "Please agree to Terms & Conditions and Privacy Policy.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // In a real app submit the formData and files to the backend here.
    // For UI-only, print to console and show a confirmation.
    const safeData = { ...formData, resumeFile: formData.resumeFile?.name ?? null, photoFile: formData.photoFile?.name ?? null };
    console.log("Candidate registration submitted:", safeData);
    alert("Thank you for registering! We have received your application.");
    setFormData(initialState);
  };

  return (
    <Layout>
      <section className="bg-automotive-dark py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Candidate Registration</h1>
          <p className="text-muted-foreground">Create an account and apply to the latest automotive roles.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-100 p-4 rounded mb-6">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Account */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Account</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Full Name <span className="text-automotive-red">*</span></label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full name" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email <span className="text-automotive-red">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email address" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Password <span className="text-automotive-red">*</span></label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Create password" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Confirm Password <span className="text-automotive-red">*</span></label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm password" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Personal Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Mobile Number <span className="text-automotive-red">*</span></label>
                  <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Mobile number" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Country <span className="text-automotive-red">*</span></label>
                  <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select Country</option>
                    <option value="uae">UAE</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="egypt">Egypt</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">City <span className="text-automotive-red">*</span></label>
                  <input name="currentCity" value={formData.currentCity} onChange={handleChange} required placeholder="City" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Date of Birth</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Marital Status</label>
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Nationality</label>
                  <input name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Professional Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Job Title</label>
                  <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job title" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Employer / Company</label>
                  <input name="employer" value={formData.employer} onChange={handleChange} placeholder="Employer / Company" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Total Years of Experience</label>
                  <input type="number" min={0} name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} placeholder="Years" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Department</label>
                  <select name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select Department</option>
                    <option value="sales">Sales & Marketing</option>
                    <option value="service">After-Sales / Service</option>
                    <option value="manufacturing">Manufacturing / Production / Engineering / Design</option>
                    <option value="supply">Supply Chain & Logistics</option>
                    <option value="hr">HR & Admin</option>
                    <option value="management">Management / Field Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Industry / Segment</label>
                  <input name="industry" value={formData.industry} onChange={handleChange} placeholder="e.g., Passenger, Commercial, EV/Tech" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>
              </div>
            </div>

            {/* Education & Skills */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Education & Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Highest Qualification / Degree</label>
                  <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select Qualification</option>
                    <option value="highschool">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Field of Study</label>
                  <input name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} placeholder="Field of study" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">University / Institute</label>
                  <input name="university" value={formData.university} onChange={handleChange} placeholder="University / Institute" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Special Skills / Value-Add <span className="text-sm text-muted-foreground">(≤200 characters)</span></label>
                  <input name="specialSkills" value={formData.specialSkills} onChange={handleChange} maxLength={200} placeholder="Short summary of key skills" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-card-foreground mb-2">Languages Known <span className="text-automotive-red">*</span></label>
                  <select multiple name="languages" value={formData.languages} onChange={handleLanguagesChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground h-32">
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                    <option value="hindi">Hindi</option>
                    <option value="urdu">Urdu</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-2">Hold Ctrl (Cmd on Mac) to select multiple.</p>
                </div>
              </div>
            </div>

            {/* Eligibility & Status */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Eligibility & Status</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Residence Location</label>
                  <select name="residenceLocation" value={formData.residenceLocation} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select</option>
                    <option value="middleeast">Middle East</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Visa Status</label>
                  <select name="visaStatus" value={formData.visaStatus} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select</option>
                    <option value="employment">Employment</option>
                    <option value="visit">Visit</option>
                    <option value="student">Student</option>
                    <option value="dependent">Dependent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Availability</label>
                  <select name="availability" value={formData.availability} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-foreground">
                    <option value="">Select</option>
                    <option value="immediate">Immediate</option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input id="driversLicense" name="driversLicense" type="checkbox" checked={formData.driversLicense} onChange={handleChange} className="h-4 w-4 text-automotive-red bg-input border-border rounded" />
                  <label htmlFor="driversLicense" className="text-sm text-card-foreground">I have a valid driver's license</label>
                </div>
              </div>
            </div>

            {/* Online Presence & Uploads */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Online Presence & Uploads</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">LinkedIn Profile URL</label>
                  <input type="url" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Optional Social Link (Facebook / Portfolio)</label>
                  <input type="url" name="socialLink" value={formData.socialLink} onChange={handleChange} placeholder="Optional social or portfolio link" className="w-full px-3 py-2 bg-input border border-border rounded text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Upload Resume / CV <span className="text-automotive-red">*</span></label>
                  <input type="file" name="resumeFile" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="w-full text-sm text-foreground" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Upload Profile Photo (optional)</label>
                  <input type="file" name="photoFile" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-foreground" />
                </div>
              </div>
            </div>

            {/* Declarations */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <input id="agreeAccurate" name="agreeAccurate" type="checkbox" checked={formData.agreeAccurate} onChange={handleChange} className="h-4 w-4 text-automotive-red bg-input border-border rounded mt-1" />
                <label htmlFor="agreeAccurate" className="text-sm text-card-foreground">I confirm that the information provided is accurate.</label>
              </div>

              <div className="flex items-start space-x-3 mt-3">
                <input id="agreeTnC" name="agreeTnC" type="checkbox" checked={formData.agreeTnC} onChange={handleChange} className="h-4 w-4 text-automotive-red bg-input border-border rounded mt-1" />
                <label htmlFor="agreeTnC" className="text-sm text-card-foreground">I agree to Automotivate's Terms & Conditions and Privacy Policy.</label>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-automotive-red text-automotive-red-foreground px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">Create Account</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
