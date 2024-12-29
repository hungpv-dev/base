import Wecome from "@/pages/Wecome.vue";
import Login from "@/pages/auth/Login.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import DashboardPage from "@/pages/DashboardPage.vue";

const client = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        component: Wecome,
        // beforeEnter: requireAuth,
        children: [
            {
                path: "users",

                component: DashboardPage,
            },
        ],
    },
];

export default client;
