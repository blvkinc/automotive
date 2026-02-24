import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    category: string;
    author: string;
    authorTitle: string;
    readTime: string;
    tags: string[];
}

const mockPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Automotive Industry in MENA",
        excerpt:
            "Explore the emerging trends and opportunities in the automotive sector across the Middle East and North Africa region.",
        content: [
            "The automotive industry in the Middle East and North Africa (MENA) region is undergoing a dramatic transformation driven by rapid urbanization, government-led diversification initiatives, and the global shift toward electrification. From Saudi Arabia's Vision 2030 to the UAE's Net Zero by 2050 plan, policymakers are placing the automotive sector at the center of a new economic blueprint.",
            "One of the most significant developments is the acceleration of electric vehicle (EV) adoption. Countries like the UAE, Saudi Arabia, and Egypt are actively investing in EV charging infrastructure, offering government subsidies, and setting ambitious targets for zero-emission vehicles. This opens up a vast array of career opportunities — from EV technicians and battery engineers to smart mobility strategists.",
            "Autonomous and connected vehicles are another frontier reshaping the landscape. Smart city projects across Dubai, Riyadh, and Cairo are integrating intelligent transportation systems, creating demand for software engineers, data scientists, and cybersecurity experts who understand automotive applications.",
            "The aftermarket services sector is also booming as vehicle ownership rates increase. Skilled mechanics, service advisors, and parts specialists are in high demand, particularly those who can navigate the newer hybrid and electric platforms. Companies investing in staff upskilling are positioned to lead in this competitive talent market.",
            "Supply chain localization is emerging as a priority. With disruptions from global events still fresh, OEMs and tier-one suppliers are exploring regional manufacturing partnerships. This creates employment prospects in quality engineering, logistics, procurement, and production management at the local level.",
            "For job seekers, the key is strategic positioning. Certifications in EV technology, familiarity with ADAS systems, and digital proficiency are now competitive differentiators. Professionals who proactively develop these competencies will find themselves well ahead in MENA's rapidly evolving automotive job market.",
        ],
        date: "December 10, 2024",
        category: "Industry Trends",
        author: "John Smith",
        authorTitle: "Senior Industry Analyst",
        readTime: "6 min read",
        tags: ["MENA", "EV", "Automotive", "Career", "Innovation"],
    },
    {
        id: "2",
        title: "Skills You Need for Automotive Excellence",
        excerpt:
            "Discover the key competencies and certifications that employers look for in automotive professionals.",
        content: [
            "The automotive industry is evolving at an unprecedented pace, and the skills required to thrive within it are shifting just as rapidly. Whether you are a seasoned professional or a recent graduate, understanding what employers value today is essential to building a lasting and rewarding career.",
            "Technical proficiency remains the foundation. Employers in the MENA region consistently rank hands-on mechanical knowledge and diagnostic expertise at the top of their requirements. Familiarity with OBD-II systems, hydraulic technologies, and modern engine management platforms is non-negotiable for workshop-facing roles.",
            "Digital literacy is no longer optional. Modern vehicles are increasingly software-defined, and the professionals who can interface with vehicle control units, perform over-the-air update analysis, or troubleshoot network communications are in significant demand across dealerships and OEM networks.",
            "Soft skills are underestimated but critical. Strong communication allows technicians to translate complex issues to customers clearly, while teamwork and adaptability help teams meet workshop throughput targets. Service advisors, in particular, must balance empathy with commercial awareness.",
            "Certifications from recognized bodies make a tangible difference. ASE, IMI, and manufacturer-specific qualifications like those from BMW Group, Toyota, or Mercedes-Benz signal commitment and competence to hiring managers. Investing in these credentials pays dividends throughout your career.",
        ],
        date: "December 8, 2024",
        category: "Career Development",
        author: "Sarah Johnson",
        authorTitle: "Talent Acquisition Lead",
        readTime: "5 min read",
        tags: ["Skills", "Certifications", "Career Development", "Training"],
    },
    {
        id: "3",
        title: "Top Companies Hiring in UAE Automotive Sector",
        excerpt:
            "Learn about the leading automotive companies in UAE that are actively hiring top talent.",
        content: [
            "The UAE remains one of the most dynamic automotive job markets in the world. With a high vehicle ownership rate, a thriving aftermarket, and a growing EV ecosystem, the talent demand from leading companies continues to accelerate.",
            "Al-Futtaim Automotive, one of the region's largest automotive distributors, is consistently among the most active recruiters. They represent brands including Toyota, Honda, Lexus, and Jeep — requiring technicians, service advisors, fleet managers, and customer experience professionals year-round.",
            "Agility Automotive and the broader Agility group are investing heavily in smart logistics and fleet solutions, opening roles in operations, IT infrastructure, and supply chain analytics for candidates with cross-sector experience.",
            "Emirates Motor Company, the Abu Dhabi representative for Mercedes-Benz, is known for its structured career development programs and active campus recruitment. They are a top choice for graduates entering the premium automotive segment.",
            "Beyond dealer networks, technology-forward companies like Careem, Swvl, and regional EV startups are creating entirely new automotive-adjacent roles — blending mobility, software, and product development for professionals looking at the cutting edge of the industry.",
        ],
        date: "December 5, 2024",
        category: "Job Market",
        author: "Michael Chen",
        authorTitle: "Regional Market Researcher",
        readTime: "4 min read",
        tags: ["UAE", "Hiring", "Companies", "Jobs"],
    },
    {
        id: "4",
        title: "Interview Tips for Automotive Roles",
        excerpt:
            "Get expert advice on how to ace your automotive job interview and land your dream position.",
        content: [
            "Landing an automotive job interview is a milestone, but converting it into an offer requires deliberate preparation. Whether you are applying to a dealership, an OEM, or an aftermarket supplier, the interview dynamics share common threads — and mastering them gives you a clear edge.",
            "Research the employer thoroughly. Knowing the brand portfolio, recent business announcements, and market positioning of the company you are interviewing with signals seriousness and professionalism. Hiring managers notice when candidates ask informed questions versus generic ones.",
            "Demonstrate your technical story with specifics. Rather than listing responsibilities from past roles, describe outcomes. 'I diagnosed and resolved an intermittent ABS fault on a fleet of 12 vehicles, reducing workshop return rates by 30%' is far more compelling than 'I performed diagnostics'.",
            "Prepare for behavioral questions. The STAR method (Situation, Task, Action, Result) is widely used in automotive HR processes. Practice at least four or five responses to common prompts about working under pressure, handling difficult customers, or navigating team conflicts.",
            "Ask thoughtful questions at the close. Inquiring about career progression paths, training investment, or team structure tells the interviewer you are thinking long-term — an attractive quality in any candidate.",
        ],
        date: "December 1, 2024",
        category: "Career Tips",
        author: "Emma Wilson",
        authorTitle: "Career Coach",
        readTime: "5 min read",
        tags: ["Interview", "Tips", "Career", "Preparation"],
    },
    {
        id: "5",
        title: "Electric Vehicles and Job Opportunities",
        excerpt:
            "Understand how the EV revolution is creating new career paths in the automotive industry.",
        content: [
            "The electric vehicle revolution is not merely an industrial shift — it is a complete restructuring of the automotive workforce. Traditional combustion-engine expertise, while still valuable in the short term, is being complemented and in some areas eclipsed by demand for EV-specific competencies.",
            "High-voltage system technicians are among the most sought-after professionals in the current market. Working safely with battery packs, inverters, and thermal management systems requires specialized training and certification that many markets are still building capacity for.",
            "Software engineers with automotive domain knowledge are commanding significant premium salaries. Embedded systems, AUTOSAR architecture, and cybersecurity for connected vehicles are specializations with a talent gap that employers are actively trying to close.",
            "Charging infrastructure development is generating demand for project managers, electrical engineers, and urban planners who understand how to site, build, and operate fast-charging networks at scale. Government-backed programs across the UAE, Saudi Arabia, and Egypt are driving this pipeline.",
            "For current automotive professionals, the transition is manageable with targeted reskilling. Many OEMs and training bodies now offer EV conversion courses designed for mechanical technicians. Embracing this upskilling journey proactively is the surest path to remaining relevant and competitive.",
        ],
        date: "November 28, 2024",
        category: "Innovation",
        author: "David Brown",
        authorTitle: "EV Technology Specialist",
        readTime: "6 min read",
        tags: ["EV", "Electric Vehicles", "Innovation", "Jobs"],
    },
    {
        id: "6",
        title: "Building Your Automotive Career Network",
        excerpt:
            "Learn the importance of networking and how to build meaningful connections in the industry.",
        content: [
            "In the automotive industry, who you know genuinely matters. A significant proportion of roles — particularly at the senior and specialist level — are filled through referrals and professional networks before they ever appear on a job board. Building a strong network is therefore not an optional extra; it is a career strategy.",
            "Start by optimizing your professional profiles. LinkedIn remains the dominant platform for automotive professionals. A complete, keyword-rich profile that highlights certifications, measurable achievements, and industry participation increases discoverability with recruiters actively searching for talent.",
            "Attend industry events and trade shows. The Gulf Motor Festival, Automechanika Dubai, and regional fleet management conferences are prime environments for meeting decision-makers, learning about emerging opportunities, and positioning yourself as an engaged industry participant.",
            "Join professional associations. Bodies like the IMI (Institute of the Motor Industry) have regional chapters and online communities that facilitate connections, continuing professional development, and early access to sector intelligence.",
            "Nurture relationships with intent. Networking is not about collecting contacts — it is about building genuine professional rapport over time. Following up after introductions, sharing useful content, and congratulating connections on achievements all contribute to a network that will actively advocate for you when opportunities arise.",
        ],
        date: "November 25, 2024",
        category: "Networking",
        author: "Lisa Anderson",
        authorTitle: "Professional Development Advisor",
        readTime: "5 min read",
        tags: ["Networking", "Career", "Professional Development"],
    },
];

const relatedPosts = (currentId: string) =>
    mockPosts.filter((p) => p.id !== currentId).slice(0, 3);

export default function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const post = mockPosts.find((p) => p.id === id) ?? mockPosts[0];
    const related = relatedPosts(post.id);

    return (
        <Layout>
            {/* Hero / Header */}
            <section className="bg-background py-10 px-4 border-b border-border">
                <div className="container mx-auto max-w-5xl">
                    <Link
                        to="/blog"
                        className="text-primary hover:underline mb-6 inline-block text-sm font-medium"
                    >
                        ← Back to Insights
                    </Link>

                    {/* Category + Meta */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-automotive-red text-automotive-red-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {post.excerpt}
                    </p>

                    {/* Author row */}
                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-10 h-10 rounded-full bg-automotive-red/10 border-2 border-automotive-red/20 flex items-center justify-center font-bold text-automotive-red text-sm">
                            {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div>
                            <div className="font-semibold text-foreground text-sm">
                                {post.author}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {post.authorTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Article Body */}
                    <div className="lg:col-span-3">
                        <div className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-6">
                            {post.content.map((para, idx) => (
                                <p
                                    key={idx}
                                    className="text-muted-foreground leading-relaxed text-base"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-foreground mb-3">
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-automotive-gray text-foreground px-3 py-1 rounded-full text-xs font-medium border border-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-8 bg-card rounded-lg border border-border p-6 flex items-start gap-5">
                            <div className="w-14 h-14 flex-shrink-0 rounded-full bg-automotive-red/10 border-2 border-automotive-red/20 flex items-center justify-center font-bold text-automotive-red text-lg">
                                {post.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </div>
                            <div>
                                <div className="font-bold text-card-foreground text-base mb-0.5">
                                    {post.author}
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">
                                    {post.authorTitle}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    An experienced voice in the automotive industry, contributing
                                    expert analysis, career guidance, and industry intelligence to
                                    Automotive Insights.
                                </p>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-foreground mb-6">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {related.map((rp) => (
                                    <Link
                                        key={rp.id}
                                        to={`/blog/${rp.id}`}
                                        className="bg-card rounded-lg border border-border p-4 hover:border-automotive-red transition-colors group block"
                                    >
                                        <span className="bg-automotive-red text-automotive-red-foreground px-2 py-0.5 rounded-full text-xs font-semibold mb-3 inline-block">
                                            {rp.category}
                                        </span>
                                        <h3 className="font-semibold text-card-foreground text-sm mb-2 group-hover:text-automotive-red transition-colors leading-snug">
                                            {rp.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                            {rp.excerpt}
                                        </p>
                                        <div className="mt-3 text-xs text-muted-foreground flex items-center justify-between border-t border-border pt-3">
                                            <span>{rp.author}</span>
                                            <span>{rp.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Share */}
                        <div className="bg-card rounded-lg border border-border p-5 sticky top-4">
                            <h3 className="text-sm font-bold text-card-foreground mb-4">
                                Share Article
                            </h3>
                            <div className="flex flex-col gap-3">
                                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-automotive-gray rounded font-semibold text-sm text-foreground hover:bg-opacity-80 transition-colors border border-border">
                                    <span>f</span>
                                    <span>Facebook</span>
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-automotive-gray rounded font-semibold text-sm text-foreground hover:bg-opacity-80 transition-colors border border-border">
                                    <span>𝕏</span>
                                    <span>Twitter / X</span>
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-automotive-gray rounded font-semibold text-sm text-foreground hover:bg-opacity-80 transition-colors border border-border">
                                    <span>in</span>
                                    <span>LinkedIn</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-border mt-5 pt-5">
                                <h3 className="text-sm font-bold text-card-foreground mb-3">
                                    Article Info
                                </h3>
                                <div className="space-y-2 text-xs text-muted-foreground">
                                    <div className="flex justify-between">
                                        <span>Published</span>
                                        <span className="text-foreground font-medium">
                                            {post.date}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Read time</span>
                                        <span className="text-foreground font-medium">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Category</span>
                                        <span className="text-automotive-red font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* More Articles */}
                        <div className="bg-card rounded-lg border border-border p-5">
                            <h3 className="text-sm font-bold text-card-foreground mb-4">
                                More Articles
                            </h3>
                            <div className="space-y-4">
                                {mockPosts.slice(0, 5).map((mp) => (
                                    <Link
                                        key={mp.id}
                                        to={`/blog/${mp.id}`}
                                        className={`block group ${mp.id === post.id ? "opacity-40 pointer-events-none" : ""}`}
                                    >
                                        <div className="flex gap-3">
                                            <div className="mt-1 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-automotive-red"></div>
                                            <div>
                                                <h4 className="text-xs font-semibold text-card-foreground group-hover:text-automotive-red transition-colors leading-snug">
                                                    {mp.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                    {mp.date}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                to="/blog"
                                className="block mt-5 text-center text-xs font-semibold text-automotive-red hover:underline"
                            >
                                View All Articles →
                            </Link>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary rounded-lg p-5 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold text-primary-foreground mb-2">
                                    Ready to advance your career?
                                </h3>
                                <p className="text-xs text-primary-foreground/80 mb-4">
                                    Browse hundreds of automotive jobs across MENA
                                </p>
                                <Link
                                    to="/jobs"
                                    className="block bg-background text-primary py-2.5 rounded font-semibold text-xs hover:bg-muted transition-colors"
                                >
                                    Browse Jobs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
