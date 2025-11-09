import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { mockEmployer } from "@shared/mock-data/employer";
import type { EmployerProfileData } from "@shared/types";

const employerNavItems = [
  { label: "Dashboard", path: "/employer/dashboard" },
  { label: "Profile", path: "/employer/profile" },
  { label: "Jobs", path: "/employer/jobs" },
  { label: "Job Stages", path: "/employer/job-stages" },
  { label: "Followers", path: "/employer/followers" },
];

// Mock data for dropdowns
const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Other",
];

const ownershipTypes = [
  "Public",
  "Private",
  "Non-Profit",
  "Government",
];

const companySizes = [
  "1-10",
  "11-50",
  "51-100",
  "100-500",
  "500-1000",
  "1000+",
];

const countries = ["United States", "Canada", "United Kingdom", "Australia"];
const states: Record<string, string[]> = {
  "United States": ["California", "Texas", "New York", "Florida"],
  "Canada": ["Ontario", "Quebec", "British Columbia", "Alberta"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia"],
};
const cities: Record<string, string[]> = {
  "California": ["San Francisco", "Los Angeles", "San Diego", "Sacramento"],
  "Texas": ["Austin", "Houston", "Dallas", "San Antonio"],
  "New York": ["New York City", "Buffalo", "Rochester", "Albany"],
  "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville"],
};

export default function EmployerProfile() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(mockEmployer.country);
  const [selectedState, setSelectedState] = useState(mockEmployer.state);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EmployerProfileData>({
    defaultValues: {
      name: mockEmployer.name,
      email: mockEmployer.email,
      phone: mockEmployer.phone,
      ceoName: mockEmployer.ceoName,
      industry: mockEmployer.industry,
      ownershipType: mockEmployer.ownershipType,
      companySize: mockEmployer.companySize,
      country: mockEmployer.country,
      state: mockEmployer.state,
      city: mockEmployer.city,
      establishedIn: mockEmployer.establishedIn,
      employerDetails: mockEmployer.employerDetails?.replace(/<[^>]*>/g, ""), // Strip HTML for textarea
      location: mockEmployer.location,
      secondOfficeLocation: mockEmployer.secondOfficeLocation,
      numberOfOffices: mockEmployer.numberOfOffices,
      websiteUrl: mockEmployer.websiteUrl,
      fax: mockEmployer.fax,
      socialMedia: mockEmployer.socialMedia,
      isFeatured: mockEmployer.isFeatured,
    },
  });

  const country = watch("country");
  const state = watch("state");

  const onSubmit = async (data: EmployerProfileData) => {
    setIsSubmitting(true);
    
    // Mock form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Profile data:", data);
    toast.success("Profile updated successfully!");
    
    setIsSubmitting(false);
  };

  return (
    <DashboardLayout
      userType="employer"
      nav={
        <DashboardNav
          items={employerNavItems}
          userType="employer"
          notificationCount={3}
        />
      }
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Company Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company information and settings
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Update your company details to help candidates learn more about your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Company name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    {...register("phone", { required: "Phone is required" })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ceoName">CEO Name</Label>
                  <Input id="ceoName" {...register("ceoName")} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={watch("industry")}
                    onValueChange={(value) => setValue("industry", value)}
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownershipType">Ownership Type</Label>
                  <Select
                    value={watch("ownershipType")}
                    onValueChange={(value) => setValue("ownershipType", value)}
                  >
                    <SelectTrigger id="ownershipType">
                      <SelectValue placeholder="Select ownership type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ownershipTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select
                    value={watch("companySize")}
                    onValueChange={(value) => setValue("companySize", value)}
                  >
                    <SelectTrigger id="companySize">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="establishedIn">Established In</Label>
                  <Input
                    id="establishedIn"
                    type="number"
                    min="1800"
                    max={new Date().getFullYear()}
                    {...register("establishedIn", {
                      valueAsNumber: true,
                      min: {
                        value: 1800,
                        message: "Year must be after 1800",
                      },
                      max: {
                        value: new Date().getFullYear(),
                        message: "Year cannot be in the future",
                      },
                    })}
                  />
                  {errors.establishedIn && (
                    <p className="text-sm text-destructive">
                      {errors.establishedIn.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="websiteUrl">Website URL</Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    {...register("websiteUrl", {
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Please enter a valid URL",
                      },
                    })}
                  />
                  {errors.websiteUrl && (
                    <p className="text-sm text-destructive">
                      {errors.websiteUrl.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select
                      value={country}
                      onValueChange={(value) => {
                        setValue("country", value);
                        setSelectedCountry(value);
                        setValue("state", "");
                        setValue("city", "");
                      }}
                    >
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select
                      value={state}
                      onValueChange={(value) => {
                        setValue("state", value);
                        setSelectedState(value);
                        setValue("city", "");
                      }}
                      disabled={!country}
                    >
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {country &&
                          states[country]?.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Select
                      value={watch("city")}
                      onValueChange={(value) => setValue("city", value)}
                      disabled={!state}
                    >
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {state &&
                          cities[state]?.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Employer Details */}
              <div className="space-y-2">
                <Label htmlFor="employerDetails">Company Description</Label>
                <Textarea
                  id="employerDetails"
                  rows={5}
                  placeholder="Tell candidates about your company..."
                  {...register("employerDetails")}
                />
                <p className="text-xs text-muted-foreground">
                  Rich text editor will be available in a future update
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Office Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Primary Office Address *</Label>
                    <Input
                      id="location"
                      {...register("location", { required: "Address is required" })}
                    />
                    {errors.location && (
                      <p className="text-sm text-destructive">{errors.location.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secondOfficeLocation">Second Office Location</Label>
                    <Input
                      id="secondOfficeLocation"
                      {...register("secondOfficeLocation")}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="numberOfOffices">Number of Offices</Label>
                      <Input
                        id="numberOfOffices"
                        type="number"
                        min="1"
                        {...register("numberOfOffices", { valueAsNumber: true })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fax">Fax</Label>
                      <Input id="fax" {...register("fax")} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social Media</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      placeholder="https://facebook.com/yourcompany"
                      {...register("socialMedia.facebook")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      placeholder="https://twitter.com/yourcompany"
                      {...register("socialMedia.twitter")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/company/yourcompany"
                      {...register("socialMedia.linkedin")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="googlePlus">Google Plus</Label>
                    <Input
                      id="googlePlus"
                      placeholder="https://plus.google.com/yourcompany"
                      {...register("socialMedia.googlePlus")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pinterest">Pinterest</Label>
                    <Input
                      id="pinterest"
                      placeholder="https://pinterest.com/yourcompany"
                      {...register("socialMedia.pinterest")}
                    />
                  </div>
                </div>
              </div>

              {/* Featured Toggle */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="isFeatured" className="text-base">
                    Make Featured
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Featured companies appear prominently in search results
                  </p>
                </div>
                <Switch
                  id="isFeatured"
                  checked={watch("isFeatured")}
                  onCheckedChange={(checked) => setValue("isFeatured", checked)}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Profile"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </DashboardLayout>
  );
}
