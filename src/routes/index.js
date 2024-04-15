import { createWebHistory, createRouter } from "vue-router";
// Auth
import Register from "@/pages/auth/RegisterPage.vue";
import LoginPage from "@/pages/auth/LoginPage.vue";

// Function admin
import ContactBook from "@/pages/admin/user_manager/UserBook.vue";
import Product from "@/pages/admin/product_manager/BookManager.vue"
import OrderManager from "@/pages/admin/order_manager/OrderManager.vue";
const routes = [
    //Auth
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/admin",
        name: "adminpage",
        component: Product,
    },
    {
        path: "/",
        name: "login",
        component: LoginPage,
    },

    // User_manager
    {
        path: "/admin/user_manager",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/pages/NotFound.vue"),
    },
    {
        path: "/admin/user_manager/:id",
        name: "contact.edit",
        component: () => import("@/pages/admin/user_manager/UserEdit.vue"),
        props: true
    },
    // Product_manager
    {
        path: "/admin/product_manager",
        name: "book_manager",
        component: Product,
    },
    {
        path: "/admin/product_manager/:id",
        name: "product.edit",
        component: () => import("@/pages/admin/product_manager/ProductEdit.vue"),
        props: true
    },
    {
        path: "/admin/product_managar/addProduct",
        name: "product.add",
        component: () => import("@/pages/admin/product_manager/ProductAdd.vue"),
        props: true
    },
    // Order_manager
    {
        path: "/admin/order_manager",
        name: "order_manager",
        component: OrderManager,
    },
    {
        path: "/admin/order_manager/:id",
        name: "order.edit",
        component: () => import("@/pages/admin/order_manager/OrderEdit.vue"),
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;