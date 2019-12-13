import HelloWorld from '../components/HelloWorld.vue';
import Admin from '../components/Admin.vue';
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import NotFoundPage from '../components/NotFoundPage.vue'
import Education from '../components/Education.vue'
import Dekanat from '../components/Dekanat.vue'
import Student from '../components/Student.vue'
import Kafedra from '../components/Kafedra.vue'




export default [


    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            allowAnonymous: true
        }

    },

    {path: '/home', component: HelloWorld},
    {path: '/admin', component: Admin},
    {path: '/register', component: Register},
    {path: '/education', component: Education},
    {path: '/dekanat', component: Dekanat},
    {path: '/student', component: Student},
    {path: '/kafedra', name:'kafedra', component: Kafedra},
    {path: '*', component: NotFoundPage}


]

