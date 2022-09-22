import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { ProfilePage } from './ProfilePage';

const routes = [
    {
        path: '/',
        element: <HomePage />,
        text: 'Home'
    },
    {
        path: '/blog',
        element: <BlogPage />,
        text: 'Blog'
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        text: 'Profile'
    },
]

export {routes}