import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
}

const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Automotive Industry in MENA",
    excerpt: "Explore the emerging trends and opportunities in the automotive sector across the Middle East and North Africa region.",
    date: "December 10, 2024",
    category: "Industry Trends",
    author: "John Smith"
  },
  {
    id: "2",
    title: "Skills You Need for Automotive Excellence",
    excerpt: "Discover the key competencies and certifications that employers look for in automotive professionals.",
    date: "December 8, 2024",
    category: "Career Development",
    author: "Sarah Johnson"
  },
  {
    id: "3",
    title: "Top Companies Hiring in UAE Automotive Sector",
    excerpt: "Learn about the leading automotive companies in UAE that are actively hiring top talent.",
    date: "December 5, 2024",
    category: "Job Market",
    author: "Michael Chen"
  },
  {
    id: "4",
    title: "Interview Tips for Automotive Roles",
    excerpt: "Get expert advice on how to ace your automotive job interview and land your dream position.",
    date: "December 1, 2024",
    category: "Career Tips",
    author: "Emma Wilson"
  },
  {
    id: "5",
    title: "Electric Vehicles and Job Opportunities",
    excerpt: "Understand how the EV revolution is creating new career paths in the automotive industry.",
    date: "November 28, 2024",
    category: "Innovation",
    author: "David Brown"
  },
  {
    id: "6",
    title: "Building Your Automotive Career Network",
    excerpt: "Learn the importance of networking and how to build meaningful connections in the industry.",
    date: "November 25, 2024",
    category: "Networking",
    author: "Lisa Anderson"
  }
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Automotive Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Latest news, trends and career advice from the industry experts
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockPosts.map((post) => (
              <article key={post.id} className="bg-card p-6 rounded-lg border border-border hover:border-automotive-red transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-automotive-red text-automotive-red-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>

                <h2 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-automotive-red transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">By {post.author}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-automotive-red hover:underline font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center mt-12">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
