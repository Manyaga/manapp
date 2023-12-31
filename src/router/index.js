import { createWebHistory, createRouter } from "vue-router";
import SignIn from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

const authGuard = (to, from, next) => {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) next();
  else next("/login");
};

const routes = [
  { path: "/", component: SignIn, meta: { title: "Sign In" } },
  { path: "/login", component: SignIn, meta: { title: "Sign In" } },
  { path: "/register", component: Register, meta: { title: "Register" } },

  {
    path: "/services",
    component: () => import("@/components/admin/services.vue"),
    beforeEnter: authGuard,
    meta: { title: "Services" },
  },
  {
    path: "/states",
    component: () => import("@/components/admin/states.vue"),
    beforeEnter: authGuard,
    meta: { title: "States" },
  },
  {
    path: "/countries",
    component: () => import("@/components/admin/countries.vue"),
    beforeEnter: authGuard,
    meta: { title: "Countries" },
  },
  {
    path: "/cities",
    component: () => import("@/components/admin/cities.vue"),
    beforeEnter: authGuard,
    meta: { title: "Cities" },
  },
  {
    path: "/user-groups",
    component: () => import("@/components/admin/userGroups.vue"),
    beforeEnter: authGuard,
    meta: { title: "Roles" },
  },
  {
    path: "/users",
    component: () => import("@/components/admin/users.vue"),
    beforeEnter: authGuard,
    meta: { title: "All user Accounts" },
  },
  {
    path: "/members",
    component: () => import("@/components/admin/members.vue"),
    beforeEnter: authGuard,
    meta: { title: "Members" },
  },
  {
    path: "/admins",
    component: () => import("@/components/admin/admins.vue"),
    beforeEnter: authGuard,
    meta: { title: "Admins" },
  },
  {
    path: "/vendors",
    component: () => import("@/components/admin/vendors.vue"),
    beforeEnter: authGuard,
    meta: { title: "Vendors" },
  },
  {
    path: "/service-interests",
    component: () => import("@/components/admin/serviceInterests.vue"),
    beforeEnter: authGuard,
    meta: { title: "Service Interest" },
  },
  {
    path: "/service-pricing",
    component: () => import("@/components/admin/servicePricings.vue"),
    beforeEnter: authGuard,
    meta: { title: "Service Pricing" },
  },
  {
    path: "/interest-categories",
    component: () => import("@/components/admin/interestCategories.vue"),
    beforeEnter: authGuard,
    meta: { title: "Interest Categories" },
  },
  {
    path: "/interest-sub-categories",
    component: () => import("@/components/admin/interestSubcategories.vue"),
    beforeEnter: authGuard,
    meta: { title: "Interest Sub-Categories" },
  },

  {
    path: "/user-interests",
    component: () => import("@/components/admin/userInterests.vue"),
    beforeEnter: authGuard,
    meta: { title: "User Interests" },
  },

  {
    path: "/dashboard",
    component: () => import("@/components/dashboard.vue"),
    beforeEnter: authGuard,
    meta: { title: "Dashboard" },
  },
  {
    path: "/logs",
    component: () => import("@/components/admin/logs.vue"),
    beforeEnter: authGuard,
    meta: { title: "System Logs" },
  },

  //common routes  @/components/requestLanding.vue
  {
    path: "/profile",
    component: () => import("@/components/profile.vue"),
    beforeEnter: authGuard,
    meta: { title: "Profile" },
  },
  //common routes  @/components/requestLanding.vue
  {
    path: "/appointments",
    component: () => import("@/components/admin/appointments.vue"),
    beforeEnter: authGuard,
    meta: { title: "Appointments" },
  },
  {
    path: "/my-appointments",
    component: () => import("@/components/member/appointments.vue"),
    beforeEnter: authGuard,
    meta: { title: "My Appointments" },
  },
  {
    path: "/my-interests",
    component: () => import("@/components/member/userInterests.vue"),
    beforeEnter: authGuard,
    meta: { title: "Interest Categories" },
  },
  {
    path: "/member-interests-categories",
    component: () => import("@/components/member/interestCategories.vue"),
    beforeEnter: authGuard,
    meta: { title: "Interest Categories" },
  },
  {
    path: "/member-interest-subcategories",
    component: () => import("@/components/member/interestSubcategories.vue"),
    beforeEnter: authGuard,
    meta: { title: "Interest Sub-Categories" },
  },
  {
    path: "/member-services",
    component: () => import("@/components/member/services.vue"),
    beforeEnter: authGuard,
    meta: { title: "Services" },
  },
  {
    path: "/service-vendors",
    component: () => import("@/components/member/servicePricings.vue"),
    beforeEnter: authGuard,
    meta: { title: "Services Vendors" },
  },
  {
    path: "/payment",
    component: () => import("@/components/admin/payment.vue"),
    beforeEnter: authGuard,
    meta: { title: "Payment" },
  },
  {
    path: "/paymentcomplete",
    component: () => import("@/components/admin/paymentConfirmation.vue"),
    beforeEnter: authGuard,
    meta: { title: "Payment Complete" },
  },

  {
    path: "/vendor-appointments",
    component: () => import("@/components/vendor/appointments.vue"),
    beforeEnter: authGuard,
    meta: { title: "My Appointments" },
  },
  {
    path: "/vendor-services",
    component: () => import("@/components/vendor/services.vue"),
    beforeEnter: authGuard,
    meta: { title: "Services" },
  },
  {
    path: "/vendor-service-pricing",
    component: () => import("@/components/vendor/servicePricings.vue"),
    beforeEnter: authGuard,
    meta: { title: "My services Pricing" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
