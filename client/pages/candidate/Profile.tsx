import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboards/shared/DashboardLayout";
import DashboardNav from "@/components/dashboards/shared/DashboardNav";
import ProfileForm from "../../components/dashboards/candidate/ProfileForm";

const candidateNavItems = [
  { label: "Dashboard", path: "/candidate/dashboard" },
  { label: "Profile", path: "/candidate/profile" },
  { label: "Applied Jobs", path: "/candidate/applied-jobs" },
  { label: "Favourite Jobs", path: "/candidate/favourites" },
  { label: "Followings", path: "/candidate/followings" },
  { label: "Job Alerts", path: "/candidate/job-alerts" },
];

export default function Profile() {
  return (
    <DashboardLayout
      userType="candidate"
      nav={<DashboardNav items={candidateNavItems} userType="candidate" />}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your profile information and preferences
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="career">Career Informations</TabsTrigger>
            <TabsTrigger value="cv-builder">CV Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
                <CardDescription>
                  Update your personal and contact information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resume</CardTitle>
                <CardDescription>
                  Upload and manage your resume documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Resume management coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Career Information</CardTitle>
                <CardDescription>
                  Manage your career details and work history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Career information management coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cv-builder" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CV Builder</CardTitle>
                <CardDescription>
                  Create and customize your CV using our builder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  CV builder coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
