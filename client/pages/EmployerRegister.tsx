import Layout from "@/components/Layout";
import { useState } from "react";

interface EmployerFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  companyName: string;
  availability: string;
  maritalStatus: string;
  languages: string;
  yearsExperience: string;
  driversLicense: string;
  linkedinProfile: string;
  qualification: string;
  region: string;
  specialSkills: string;
}

export default function EmployerRegister() {
  const [formData, setFormData] = useState<EmployerFormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    companyName: "",
    availability: "",
    maritalStatus: "",
    languages: "",
    yearsExperience: "",
    driversLicense: "",
    linkedinProfile: "",
    qualification: "",
    region: "",
    specialSkills: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Employer registration submitted:", formData);
    alert("Thank you for registering! We'll verify your company information soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      companyName: "",
      availability: "",
      maritalStatus: "",
      languages: "",
      yearsExperience: "",
      driversLicense: "",
      linkedinProfile: "",
      qualification: "",
      region: "",
      specialSkills: ""
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
            Post jobs and find top automotive talent in the MENA region
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Company Name:<span className="text-automotive-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email:<span className="text-automotive-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Country:<span className="text-automotive-red">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  >
                    <option value="">Select Country</option>
                    <option value="uae">UAE</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="egypt">Egypt</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    City:<span className="text-automotive-red">*</span>
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  >
                    <option value="">Select City</option>
                    <option value="dubai">Dubai</option>
                    <option value="sharjah">Sharjah</option>
                    <option value="abudhabi">Abu Dhabi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Availability:<span className="text-automotive-red">*</span>
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  >
                    <option value="">Select Availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2weeks">2 Weeks</option>
                    <option value="1month">1 Month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Languages:<span className="text-automotive-red">*</span>
                  </label>
                  <select
                    name="languages"
                    value={formData.languages}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Marital Status:<span className="text-automotive-red">*</span>
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Years of Experience:<span className="text-automotive-red">*</span>
                  </label>
                  <input
                    type="number"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    required
                    placeholder="Number"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Driver's License:<span className="text-automotive-red">*</span>
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, driversLicense: "yes" }))}
                      className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${formData.driversLicense === "yes" ? "bg-automotive-red text-automotive-red-foreground" : "bg-input border border-border text-foreground hover:border-automotive-red"}`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, driversLicense: "no" }))}
                      className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${formData.driversLicense === "no" ? "bg-automotive-red text-automotive-red-foreground" : "bg-input border border-border text-foreground hover:border-automotive-red"}`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number:<span className="text-automotive-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Number"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  LinkedIn Profile:
                </label>
                <input
                  type="url"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  placeholder="Enter URL here"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red"
                />
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Special Unique Skills
                </label>
                <textarea
                  name="specialSkills"
                  value={formData.specialSkills}
                  onChange={handleInputChange}
                  placeholder="Enter Details Here"
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-red resize-none"
                />
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-automotive-red text-automotive-red-foreground px-12 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
