import type { Article } from "@/types/blog-page";
export const articles: Article[] = [
  {
    id: 1,
    image: "/images/blog/ai-revolution.jpg",
    category: "Technology",
    tags: ["AI", "Startups", "Innovation"],
    title:
      "AI Revolution in Tashkent: How Local Startups Are Leading Innovation",
    description:
      "Discover how young entrepreneurs in Tashkent region are leveraging artificial intelligence to solve real-world problems and create groundbreaking solutions.",
    author: "Dr. Sardor Rahimov",
    readTime: "5 min read",
    date: "18.06.2024",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence (AI) is rapidly transforming industries across the globe. In Tashkent, young entrepreneurs are embracing this technology to develop solutions that address local challenges.</p>
      <h3>Key Innovations</h3>
      <ul>
        <li>Smart traffic management systems</li>
        <li>AI-powered medical diagnostics</li>
        <li>Predictive analytics for agriculture</li>
      </ul>
      <p>These startups are not only building innovative products but also creating new job opportunities and boosting the regional economy.</p>
      <blockquote>
        "Our goal is to build an AI hub right here in Tashkent," says tech entrepreneur Aziza Ergasheva.
      </blockquote>
    `,
  },
  {
    id: 2,
    image: "/images/blog/faablab.jpg",
    category: "Maker Space",
    tags: ["FABLAB", "Prototyping", "Success Stories"],
    title: "FABLAB Success Stories: From Prototype to Product",
    description:
      "Meet the makers who transformed their ideas into reality using our state-of-the-art fabrication laboratory. Their journey will inspire you.",
    author: "Eng. Malika Karimova",
    readTime: "7 min read",
    date: "16.06.2024",
    content: `
      <h2>Turning Ideas into Products</h2>
      <p>FABLAB Tashkent has been the birthplace of countless innovations. With access to 3D printers, CNC machines, and laser cutters, creators have built everything from smart furniture to IoT-enabled devices.</p>
      <h3>Real-World Examples</h3>
      <p>One standout story is of a high school team that created a solar-powered water purifier. Their invention has now reached villages in need of clean water.</p>
      <img src="/images/blog/fablab-team.jpg" alt="FABLAB Team" class="rounded shadow-md"/>
    `,
  },
  {
    id: 3,
    image: "/images/blog/weekly.webp",
    category: "Weekly Digest",
    tags: ["Blockchain", "IoT", "Quantum"],
    title: "Weekly Tech Digest: Blockchain, IoT, and Quantum Computing Trends",
    description:
      "Stay updated with the latest technological developments and how they impact the startup ecosystem in Uzbekistan.",
    author: "Tech Editorial Team",
    readTime: "10 min read",
    date: "15.06.2024",
    content: `
      <h2>Blockchain Revolution</h2>
      <p>Uzbekistan is exploring blockchain to ensure transparency in public sectors, especially in land registration and healthcare data management.</p>
      <h2>Quantum Computing: Are We Ready?</h2>
      <p>Quantum technologies are still in early stages, but research centers in the region are slowly beginning to invest in quantum simulations.</p>
      <h2>IoT Growth</h2>
      <p>With the rise of smart homes and industries, IoT device adoption is increasing, and local developers are contributing by building open-source firmware.</p>
    `,
  },
  {
    id: 4,
    image: "/images/blog/robotics.jpg",
    category: "Education",
    tags: ["Robotics", "Education", "Careers"],
    title: "Robotics Course Graduates Land Jobs at Top Tech Companies",
    description:
      "Our robotics program continues to produce industry-ready professionals. Learn about the latest success stories and career opportunities.",
    author: "Prof. Aziz Normatov",
    readTime: "4 min read",
    date: "14.06.2024",
    content: `
      <h2>Robotics and Career Growth</h2>
      <p>Graduates from the Youth Technopark's robotics courses have landed positions at companies like EPAM, Yandex, and local startups.</p>
      <h3>Hands-On Learning</h3>
      <p>Students gain practical experience with Arduino, Raspberry Pi, and industrial robot arms, preparing them for real-world challenges.</p>
      <p>Over <strong>87%</strong> of graduates receive job offers within 3 months of completing the program.</p>
      <ul>
        <li>Project-based learning</li>
        <li>Industry mentorship</li>
        <li>Startup incubation support</li>
      </ul>
    `,
  },
];

export const keywords: string[] = [
  "Tashkent Youth Technopark",
  "Innovation Uzbekistan",
  "AI Startups",
  "FABLAB Tashkent",
  "Robotics Courses",
  "Tech Blog Uzbekistan",
  "Startup School",
  "Technology Trends",
  "Prototyping",
  "Youth Innovation",
];
