// Layouts
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Blog from '~/pages/Blog';
import Product from '~/pages/Product';
import Team from '~/pages/Team';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog },
    { path: '/product', component: Product },
    { path: '/team', component: Team },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
