// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Login/LoginView.vue"),
  },
  {
    path: "/admin",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "home",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "students",
        name: "students",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Admin/Students/StudentsView.vue"
          ),
      },
      {
        path: "teachers",
        name: "teachers",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Admin/Teachers/TeachersView.vue"
          ),
      },
      {
        path: "subjects",
        name: "subjects",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Admin/Subjects/SubjectsView.vue"
          ),
      },
      {
        path: "groups",
        name: "groups",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/Admin/Groups/GroupsView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
