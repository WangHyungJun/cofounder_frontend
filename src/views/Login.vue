<template>
    <div>
        <div v-show="!findpassword">
            <div>이메일을 입력하세요: <input v-model="loginform.email" type="text" placeholder="example@gmail.com"/></div>
            <div>비밀번호를 입력하세요:<input v-model="loginform.password" type="password" placeholder="숫자 및 기호 섞어서 사용"/></div>
            <button v-on:click="login">로그인</button>
        </div>
        <div v-show="findpassword">
            <div>이메일을 입력하세요: <input v-model="loginform.email" type="text" placeholder="example@gmail.com"/></div>
            <button v-on:click="sendTemp">입력한 이메일에 임시비밀번호 전송하기</button>
        </div>
        <button v-show="!findpassword" v-on:click="findpassword=!findpassword">비밀번호 찾기</button>
        <div>{{errormessage}}</div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                loginform: {email:'', password:''},
                errormessage: '',
                findpassword: false,
                url:"https://www.wanghyungjun-api.co.uk/cofounderapi/loginapi"
            }
        },
        methods:{
            login: function () {
                this.$http.post(this.url,{
                    email: this.loginform.email,
                    password: this.loginform.password
                }).then(function (data) {
                    if(data.body['success']==false) this.errormessage=data.body['message'];
                    else {this.errormessage=''; alert(data.body['message']); this.$router.push({'name':"home"})}
                })
            },
            sendTemp: function () {
                this.$http.post(this.url,{
                    email: this.loginform.email,
                    findPassword: true
                }).then(function (data) {
                  alert(data.body['message']);
                })
            }
        }
    }
</script>

<style scoped>

</style>