import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{description}</p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This page is currently under development. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-automotive-red text-automotive-red-foreground px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Return to Homepage
              </Link>
              <button 
                className="border border-automotive-red text-automotive-red px-6 py-3 rounded font-semibold hover:bg-automotive-red hover:text-automotive-red-foreground transition-colors"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
