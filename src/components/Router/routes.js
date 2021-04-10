import Home from '../Home/Home';
import About from '../About/About';
import Comments from '../Comments/All';
import SingleComment from '../Comments/SingleComment';
import Container from '../Comments/Container';
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path : '/',
        component : Home,
        name : 'home'
    },
    {
        path : '/about',
        component : About,
        name : 'about'
    },
    {
        path : "/comments",
        component : Container,
        children : [
            {
                path : '',
                component : Comments,
                name : 'all_comments'
            },
            {
                path : ':id',
                component : SingleComment,
                name : 'single_comment'
            }
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;