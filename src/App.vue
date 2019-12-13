<template>
    <div id="app">
        <Navbar></Navbar>
        <transition name="moveInUp">
            <router-view/>
        </transition>


        <!--        <router-view></router-view>-->
    </div>
</template>

<script>
    import Admin from './components/Admin'
    import HelloWorld from './components/HelloWorld.vue'
    import Login from './components/Login.vue'
    import Navbar from './components/Navbar.vue'
    import Register from './components/Register.vue'
    import NotFoundPage from './components/NotFoundPage.vue'
    import Education from './components/Education.vue'
    import Dekanat from './components/Dekanat.vue'
    import Student from './components/Student.vue'

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Vue from 'vue'
    import {Button, message} from 'ant-design-vue'

    Vue.config.productionTip = false

    /* v1.1.2 */
    Vue.component(Button.name, Button)
    Vue.component(Button.Group.name, Button.Group)

    /* v1.1.3+ Automatically register components under Button, such as Button.Group */
    Vue.use(Button)

    Vue.prototype.$message = message


    export default {
        name: 'app',
        components: {
            HelloWorld,
            Admin,
            Login,
            Navbar,
            Register,
            NotFoundPage,
            Education,
            Dekanat,
            Student
        },
        data(){
          return{
              tokenA:''
          }
        },
        created(){
          }
    }
</script>

<style>

    .moveInUp-enter-active{
        animation: fadeIn 2s ease-in;
    }

    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }

    .moveInUp-leave-active{
        animation: moveInUp .3s ease-in;
    }
    @keyframes moveInUp{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-400px);
        }
    }

</style>
