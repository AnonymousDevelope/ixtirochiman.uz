interface ContactDetail {
    id: number;
    icon: string;
    text: string;
}
interface LinkItem {
    id: number;
    label: string;
    href: string;
  }
  
  interface LinkGroup {
    id: number;
    title: string;
    links: LinkItem[];
  }
  export {
    LinkGroup,
    LinkItem,
    ContactDetail
  }