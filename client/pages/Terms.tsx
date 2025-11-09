import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          
          <div className="bg-card p-8 rounded-lg border border-border space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">1. Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Automotivate ME Careers's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">3. Disclaimer</h2>
              <p>
                The materials on Automotivate ME Careers's website are provided on an 'as is' basis. Automotivate ME Careers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">4. Limitations</h2>
              <p>
                In no event shall Automotivate ME Careers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Automotivate ME Careers's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Automotivate ME Careers's website could include technical, typographical, or photographic errors. Automotivate ME Careers does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">6. Links</h2>
              <p>
                Automotivate ME Careers has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Automotivate ME Careers of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">7. Modifications</h2>
              <p>
                Automotivate ME Careers may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
