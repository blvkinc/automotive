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
      <section className="bg-automotive-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with industry insights and career advice
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
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground font-semibold">
              Previous
            </button>
            <button className="px-4 py-2 bg-automotive-red text-automotive-red-foreground rounded font-semibold">
              1
            </button>
            <button className="px-4 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground">
              2
            </button>
            <button className="px-4 py-2 bg-card border border-border rounded hover:border-automotive-red text-foreground font-semibold">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-automotive-red py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-automotive-red-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-automotive-red-foreground mb-8">
            Subscribe to our newsletter for the latest automotive industry news and career tips.
          </p>
          
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-white text-foreground rounded placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-automotive-dark"
            />
            <button className="bg-automotive-dark text-automotive-red px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
