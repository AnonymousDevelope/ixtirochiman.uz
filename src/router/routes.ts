import { createBrowserRouter } from 'react-router-dom';
import BlogPage from '@/pages/Blog/page';
import HomePage from '@/pages/Home/page';
import { ContactSection } from '@/components/sections';
import App from '@/App';
import BlogPageSlug from '@/pages/Blog/slug/page';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'blog',
        Component: BlogPage,
      },
      {
        path: 'blog/:slug',
        Component: BlogPageSlug,
      },
      {
        path: 'contact',
        Component: ContactSection, // Section emas, to'liq page component
      },
    ],
  },
]);

export default routes;