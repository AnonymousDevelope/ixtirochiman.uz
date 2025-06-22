
interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    views: string;
    rating: number;
  }
  
  interface Stat {
    id: number;
    value: string;
    label: string;
  }
export {
    Course,
    Stat
}  