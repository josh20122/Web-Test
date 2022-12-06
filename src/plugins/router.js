import { createRouter,createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import MySubscription from "@/pages/MySubscription.vue"
import Profile from "@/pages/Profile.vue"
import Settings from "@/pages/Settings.vue"
import TestOverview from "@/pages/TestOverview.vue"


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', name:'Home', component:Home},
        {path:'/subscription', name:'Subscription', component:MySubscription},
        {path:'/profile',name:'profile',component:Profile},
        {path:'/settings',name:'settings',component:Settings},
        {path:'/test-overview',name:'test-overview',component:TestOverview},
    ]
 })


 export default router;