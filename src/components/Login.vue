<template>
    <div>
        <body>
        <div class="login-form" hide-footer ok-title="Button">
            <form method="post">
                <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
                <h4 class="modal-title">Login to Your Account</h4>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Username" required="required"
                           v-model="payload.username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required"
                           v-model="payload.password">
                </div>

                <span v-if="error" class="error" style="color: red;">{{this.errorMessage}}</span>
                <br><br>

                <input type="submit" style="background-color: #84bbf3" class="btn btn-primary btn-block btn-lg" @click.prevent="loginClick">

            </form>
            <div class="text-center small">Don't have an account? <a><router-link to="/register">Sign up</router-link></a></div>
        </div>
        </body>


    </div>

</template>

<script>
    import { mapActions, mapState } from "vuex";

    export default {



        data() {
            return {

                Authorization: false,
                payload: {
                    username: '',
                    password: ''
                },
                status: '',
                error: false,
                errorMessage: '',
                data: {
                    accessToken: '',
                    tokenType: ''
                }
            }
        },
        methods: {
            async loginClick() {
                debugger
                await this.$axios.post('http://localhost:8080/api/auth/signin', this.payload).then(response => {
                    this.status = response.status;
                    this.data = response.data;
                    // debugger
                    // console.log(response.data);
                    // console.log(response.status);
                })
                    .catch(error => {
                        if (error.response.status == 401 || error.response.status == 400) {
                            this.error = true;
                            this.errorMessage = "Login yoki parol xato kiritildi";
                        }
                    });

                if (this.status == 200) {
                    debugger
                    if (this.data.accessToken) {
                        localStorage.setItem('token', this.data.accessToken);
                        return this.$router.push('/admin');

                    }


                    this.$axios.get('http://localhost:8080/api/test/user', {headers: {Authorization: `Bearer ${this.data.accessToken}`}}).then(response => {
                        console.log(response);
                    });


                } else {
                    this.error = true;
                    this.errorMessage = "Login yoki parol xato kiritildi";
                }

            }
        }
    }


</script>


<style scoped>

    .error{
        margin-left: 50px;
        font-family: Arial;
    }

    body {
        color: #999;
        /*background: #f5f5f5;*/
        font-family: 'Varela Round', sans-serif;
    }

    .form-control {
        box-shadow: none;
        border-color: #ddd;
    }

    .form-control:focus {
        border-color: #4aba70;
    }

    .login-form {
        width: 350px;
        margin: 0 auto;
        padding: 30px 0;
    }

    .login-form form {
        color: #434343;
        border-radius: 1px;
        margin-bottom: 15px;
        background: #fff;
        border: 1px solid #f3f3f3;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }

    .login-form h4 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .login-form .avatar {
        color: #fff;
        margin: 0 auto 30px;
        text-align: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        z-index: 9;
        background: #4aba70;
        padding: 15px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        background-color: #84bbf3;
    }

    .login-form .avatar i {
        font-size: 62px;
    }

    .login-form .form-group {
        margin-bottom: 20px;
    }

    .login-form .form-control, .login-form .btn {
        min-height: 40px;
        border-radius: 2px;
        transition: all 0.5s;
    }

    .login-form .close {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .login-form .btn {
        background: #4aba70;
        border: none;
        line-height: normal;
    }

    .login-form .btn:hover, .login-form .btn:focus {
        background: #42ae68;
    }

    .login-form .checkbox-inline {
        float: left;
    }

    .login-form input[type="checkbox"] {
        margin-top: 2px;
    }

    .login-form .forgot-link {
        float: right;
    }

    .login-form .small {
        font-size: 13px;
    }

    .login-form a {
        color: #4aba70;
    }

</style>
