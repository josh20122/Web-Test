import { createRouter,createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import MySubscription from "@/pages/MySubscription.vue"
import Profile from "@/pages/Profile.vue"
import Settings from "@/pages/Settings.vue"
import TestOverview from "@/pages/TestOverview.vue"
import TestChart from "@/components/PageLoadTimeChart.vue"
import TestResults from "@/pages/TestResults.vue"
import Pricing from "@/pages/Pricing.vue"
import Login from "@/auth/Login.vue"
import Support from "@/pages/Support.vue"
import Register from "@/auth/Register.vue"




const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', name:'Home', component:Home},
        {path:'/subscription', name:'Subscription', component:MySubscription},
        {path:'/profile',name:'profile',component:Profile},
        {path:'/settings',name:'settings',component:Settings},
        {path:'/chart',name:'test-overview',component:TestChart},
        {path:'/test-overview',name:'test-overview',component:TestOverview},
        {path:'/test-overview/:slug',name:'test-results',component:TestResults},
        {path:'/pricing',name:'pricing',component:Pricing},
        {path:'/login',name:'login',component:Login},
        {path:'/support',name:'support',component:Support},
        {path:'/register',name:'register',component:Register},
    ]
 })


 export default router;