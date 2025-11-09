import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="bg-card p-8 rounded-lg border border-border space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">1. Introduction</h2>
              <p>
                Automotivate ME Careers ("we", "us", or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Personal Data: Name, email address, phone number, and other information you provide</li>
                <li>Usage Data: Information about how you access and use the Service</li>
                <li>Cookies: Data stored on your device to enhance your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">3. Use of Data</h2>
              <p>
                Automotivate ME Careers uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: privacy@automotivate.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
