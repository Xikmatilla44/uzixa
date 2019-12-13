<template>
    <div>
        <body v-if="testHiddin">
        <nav class="navbar navbar-inverse navbar-expand-xl navbar-dark">
            <div class="navbar-header d-flex col">
                <a class="navbar-brand" href="#"><i class="fa fa-cube"></i>
                    <router-link to="/home" exact>Brand<b>Name</b></router-link></a>
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle navbar-toggler ml-auto">


                </button>
            </div>
            <!-- Collection of nav links, forms, and other content for toggling -->
            <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                <form class="navbar-form form-inline">
                    <div class="input-group search-box">
                        <input type="text" id="search" class="form-control" placeholder="Search here...">
                    </div>
                </form>
                <ul class="nav navbar-nav navbar-right ml-auto">
                    <li class="nav-item active"><a class="nav-link"><a-icon  type="home"/><router-link tag="li" class="col" class-active="active" to="/home" exact>
                        Home</router-link></a></li>

                    <li class="nav-item active"><a class="nav-link"><a-icon type="project"/><span>
                        <router-link tag="li" class="col" class-active="active" to="/education" exact>Education</router-link></span></a></li>
                    <li class="nav-item active"><a class="nav-link"><a-icon type="project"/><span>
                        <router-link tag="li" class="col" class-active="active" to="/dekanat" exact>Dekanat</router-link></span></a></li>

                    <li class="nav-item active"><a class="nav-link"><a-icon type="profile"/><span>
                        <router-link tag="li" class="col" class-active="active" to="/student" exact>Student</router-link></span></a></li>


                    <li class="nav-item active"><a class="nav-link"><a-icon type="profile"/><span>
                        <router-link tag="li" class="col" class-active="active" to="/kafedra" exact>Kafedra</router-link></span></a></li>


                    <li class="nav-item"><a href="#" class="nav-link"><a-icon type="bell" /><span>Notifications</span></a></li>

                    <b-nav-item-dropdown text="" right>
                        <template slot="button-content"><a-icon type="global"/></template>
                        <b-dropdown-item href="#"><i class="fa fa-sliders"><eva-icon name="flag-outline"></eva-icon><span>  UZ  </span></i><a-icon type="loading" /></b-dropdown-item>
                        <b-dropdown-item href="#"><i class="fa fa-sliders"><eva-icon name="flag-outline"></eva-icon><span>  RU</span></i></b-dropdown-item>
                        <b-dropdown-item href="#"><i class="fa fa-sliders"><eva-icon name="flag-outline"></eva-icon><span>  EN</span></i></b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><a-icon type="user" /></template>
                        <b-dropdown-item href="#"><a-icon type="profile" /><i class="fa fa-sliders"><span> Profile</span></i></b-dropdown-item>
                        <b-dropdown-item href="#"><a-icon type="message" /><i class="fa fa-sliders"><span> chat</span></i></b-dropdown-item>
                        <b-dropdown-item v-show="!hiddenTest"><eva-icon name="person-outline"></eva-icon><i class="fa fa-sliders"><router-link to="/" exact><span>Login</span></router-link></i></b-dropdown-item>
                        <b-dropdown-item href="/#/register"><eva-icon name="person-add-outline"></eva-icon><i class="fa fa-sliders" exact><router-link to="/register">Register</router-link></span></i></b-dropdown-item>
                        <b-dropdown-item href="#"><a-icon type="setting" /><i class="fa fa-sliders"><span> Settings</span></i></b-dropdown-item>
                        <li class="divider dropdown-divider"></li>
                        <b-dropdown-item href="#"><a-icon type="poweroff" /><i class="fa fa-sliders"><span @click="logout()"> Logout</span></i></b-dropdown-item>
                    </b-nav-item-dropdown>



                </ul>
            </div>
        </nav>
        </body>

    </div>

</template>

<script>

    import {mapActions, mapState} from "vuex";

    export default {


        computed: {
            ...mapState('SecurtyModule', [
                'testHiddin',
            ]),


        },

        data(){
            return{

                hiddenTest: false

            }
        },
        methods:{


            ...mapActions('SecurtyModule', [
                'TestHiddin',
            ]),


            logout(){
                 debugger
                localStorage.removeItem('token');
                this.$router.push({ name: 'login' });
                this.TestHiddin();
            }
        },
        created(){
            this.TestHiddin();
        }

    }

</script>



<style scoped>
    body{
        background: #eeeeee;
        font-family: 'Varela Round', sans-serif;
    }
    .form-inline {
        display: inline-block;
    }
    .navbar-header.col {
        padding: 0 !important;
    }
    .navbar {
        color: #fff;
        background: #926dde;
        padding: 5px 16px;
        border-radius: 0;
        border: none;
        box-shadow: 0 0 4px rgba(0,0,0,.1);
    }
    .navbar img {
        border-radius: 0%;
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }
    .navbar .navbar-brand {
        color: #efe5ff;
        padding-left: 0;
        padding-right: 50px;
        font-size: 24px;
    }
    .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {
        color: #fff;
    }
    .navbar .navbar-brand i {
        font-size: 25px;
        margin-right: 5px;
    }
    .search-box {
        position: relative;
    }
    .search-box input {
        padding-right: 35px;
        min-height: 38px;
        border: none;
        background: #faf7fd;
        border-radius: 3px !important;
    }
    .search-box input:focus {
        background: #fff;
        box-shadow: none;
    }
    .search-box .input-group-addon {
        min-width: 35px;
        border: none;
        background: transparent;
        position: absolute;
        right: 0;
        z-index: 9;
        padding: 10px 7px;
        height: 100%;
    }
    .search-box i {
        color: #a0a5b1;
        font-size: 19px;
    }
    .navbar .nav-item i {
        font-size: 18px;
    }
    .navbar .nav-item span {
        position: relative;
        top: 3px;
    }
    .navbar .nav > li a {
        color: #efe5ff;
        padding: 8px 15px;
        font-size: 14px;
    }
    .navbar .nav > li a:hover, .navbar .nav > li a:focus {
        color: #fff;
        text-shadow: 0 0 4px rgba(255,255,255,0.3);
    }
    .navbar .nav > li > a > i {
        display: block;
        text-align: center;
    }
    .navbar .dropdown-item i {
        font-size: 16px;
        min-width: 22px;
    }

    .navbar .nav-item.open > a, .navbar .nav-item.open > a:hover, .navbar .nav-item.open > a:focus {
        color: #fff;
        background: none !important;
    }

    .navbar .dropdown-menu li a {
        color: #777 !important;
        padding: 8px 20px;
        line-height: normal;
    }
    .navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:focus {
        color: #333 !important;
        background: transparent !important;
    }
    .navbar .nav .active a, .navbar .nav .active a:hover, .navbar .nav .active a:focus {
        color: #fff;
        text-shadow: 0 0 4px rgba(255,255,255,0.2);
        background: transparent !important;
    }
    .navbar .nav .user-action {
        padding: 9px 15px;
    }
    .navbar .navbar-toggle {
        border-color: #fff;
    }
    .navbar .navbar-toggle .icon-bar {
        background: #fff;
    }
    .navbar .navbar-toggle:focus, .navbar .navbar-toggle:hover {
        background: transparent;
    }
    .navbar .navbar-nav .open .dropdown-menu {
        background: #faf7fd;
        border-radius: 1px;
        border-color: #faf7fd;
        box-shadow: 0 2px 8px rgba(0,0,0,.05);
    }
    .navbar .divider {
        background-color: #e9ecef !important;
    }
    @media (min-width: 1200px){
        .form-inline .input-group {
            width: 350px;
            margin-left: 30px;
        }
    }
    @media (max-width: 1199px){
        .navbar .nav > li > a > i {
            display: inline-block;
            text-align: left;
            min-width: 30px;
            position: relative;
            top: 4px;
        }
        .navbar .navbar-collapse {
            border: none;
            box-shadow: none;
            padding: 0;
        }
        .navbar .navbar-form {
            border: none;
            display: block;
            margin: 10px 0;
            padding: 0;
        }
        .navbar .navbar-nav {
            margin: 8px 0;
        }
        .navbar .navbar-toggle {
            margin-right: 0;
        }
        .input-group {
            width: 100%;
        }
    }


    a{
        color: #fff;
        text-decoration: none;
        padding: 2px 5px;
        border-radius: 1px;
    }

    .router-link-active{
        background: #eee;
        color: #444;
        color: red;

    }

    nav li:hover,
    nav li:active{
        background-color: indianred;
        cursor: pointer;
    }

</style>
