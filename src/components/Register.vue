<template>
    <div>

        <div class="container">

            <h2>Registration</h2>

            <p>
                <input type="text" v-model="registerPayload.name">

                <label>Name :</label>
                <br>
            </p>


            <p>
                <input type="text" v-model="registerPayload.username">
                <label>Surname :</label>
                <br>
            </p>

            <p>
                <input type="text" v-model="registerPayload.email">
                <label>email :</label>
                <br>
            </p>

            <p>
                <input type="password" v-model="registerPayload.password">
                <label>password :</label>
                <br>
            </p>

            <p>
                <input type="password">
                <label>Confirm :</label>
                <br>
                <span id="eror" v-if="error" style="color: red;">{{this.errorMessage}}</span>
            </p>

            <p>
                <a v-on:click="registerClick()" class="myButton"><span>Register</span></a>
            </p>

        </div>


    </div>

</template>

<script>
    export default {
        data() {
            return {
                registerPayload: {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    role: ["user"]
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

             registerClick() {

                 this.$axios.post('http://localhost:8080/api/auth/signup', this.registerPayload).then(response => {
                    })
                     .catch((error) => {
                      debugger
                         this.error = true;
                         this.errorMessage = error.response.data;
                             console.log(error.response.status);
                             console.log(error.response.statusText);

                             if(error.response.data  ==  '' && error.response.status == 400 ){
                                 this.errorMessage = "formada xato mavjud";
                             }

                     });

            }
        }
    }
</script>

<style scoped>

    #eror{
        margin-left: 30%;
        margin-top: 55px;
        font-size: 20px;
    }

    .container {
        margin-left: 35%;
        margin-top: 70px;
        box-shadow: 1px 2px 5px 2px lightgray;
        width: 400px;
        display: inline-block;
        padding: 20px;

    }

    .container input {
        /*border: none;*/
        font-size: 19px;
        padding: 5px;
        border-bottom: 1px solid lightgray;
        margin-top: 15px;
        width: 250px;
        margin-left: 100px;
    }

    .container label {
        left: 490px;
        color: black;
        font-weight: bold;
        position: absolute;
        margin-top: 22px;
        font-size: 20px;
        font-family: "Bradley Hand ITC";

    }

    .container h2 {
        font-weight: bold;
        font-family: "Bradley Hand ITC";
        margin-top: 10px;
        margin-left: 90px;
    }

    .container button {

        border: none;
        padding: 10px 100px;
        width: 350px;
        color: black;
        background-color: limegreen;
        padding: 5px;
        border-radius: 20px;
    }

    .container button p {

    }

    .myButton span {
        font-size: 15px;
        font-weight: bold;
        font-family: "Bradley Hand ITC";
        margin-left: 90px;
        margin-top: 10px;

    }

    .myButton {
        padding: 10px 100px;
        margin-left: 40px;
        margin-top: 15px;
        padding: -10px;
        width: 300px;
        -moz-box-shadow: inset 0px 1px 0px 0px #dcecfb;
        -webkit-box-shadow: inset 0px 1px 0px 0px #dcecfb;
        box-shadow: inset 0px 1px 0px 0px #dcecfb;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #bddbfa), color-stop(1, #80b5ea));
        background: -moz-linear-gradient(top, #bddbfa 5%, #80b5ea 100%);
        background: -webkit-linear-gradient(top, #bddbfa 5%, #80b5ea 100%);
        background: -o-linear-gradient(top, #bddbfa 5%, #80b5ea 100%);
        background: -ms-linear-gradient(top, #bddbfa 5%, #80b5ea 100%);
        background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea', GradientType=0);
        background-color: #bddbfa;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #84bbf3;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #528ecc;
    }

    .myButton:hover {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #80b5ea), color-stop(1, #bddbfa));
        background: -moz-linear-gradient(top, #80b5ea 5%, #bddbfa 100%);
        background: -webkit-linear-gradient(top, #80b5ea 5%, #bddbfa 100%);
        background: -o-linear-gradient(top, #80b5ea 5%, #bddbfa 100%);
        background: -ms-linear-gradient(top, #80b5ea 5%, #bddbfa 100%);
        background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa', GradientType=0);
        background-color: #80b5ea;
    }

    .myButton:active {
        position: relative;
        top: 1px;
    }


</style>
