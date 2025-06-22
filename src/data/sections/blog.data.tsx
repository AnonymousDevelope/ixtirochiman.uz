import type { Article } from "@/types/blog-section";

export const articles: Article[] = [
    {
      id: 1,
      category: 'Technology',
      tags: ['AI', 'Startups', 'Innovation'],
      title: 'AI Revolution in Tashkent: How Local Startups Are Leading Innovation',
      description:
        'Discover how young entrepreneurs in Tashkent region are leveraging artificial intelligence to solve real-world problems and create groundbreaking solutions.',
      author: 'Dr. Sardor Rahimov',
      readTime: '5 min read',
      date: '18.06.2024',
    },
    {
      id: 2,
      category: 'Maker Space',
      tags: ['FABLAB', 'Prototyping', 'Success Stories'],
      title: 'FABLAB Success Stories: From Prototype to Product',
      description:
        'Meet the makers who transformed their ideas into reality using our state-of-the-art fabrication laboratory. Their journey will inspire you.',
      author: 'Eng. Malika Karimova',
      readTime: '7 min read',
      date: '16.06.2024',
    },
    {
      id: 3,
      category: 'Weekly Digest',
      tags: ['Blockchain', 'IoT', 'Quantum'],
      title: 'Weekly Tech Digest: Blockchain, IoT, and Quantum Computing Trends',
      description:
        'Stay updated with the latest technological developments and how they impact the startup ecosystem in Uzbekistan.',
      author: 'Tech Editorial Team',
      readTime: '10 min read',
      date: '15.06.2024',
    },
    {
      id: 4,
      category: 'Education',
      tags: ['Robotics', 'Education', 'Careers'],
      title: 'Robotics Course Graduates Land Jobs at Top Tech Companies',
      description:
        'Our robotics program continues to produce industry-ready professionals. Learn about the latest success stories and career opportunities.',
      author: 'Prof. Aziz Normatov',
      readTime: '4 min read',
      date: '14.06.2024',
    },
  ];