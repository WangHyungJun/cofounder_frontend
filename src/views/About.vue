<template>
  <div class="about">
      <div>이메일을 입력하세요: <input v-model="loginform.email" type="text" placeholder="example@gmail.com"/></div>
      <div>유저네임을 입력하세요: <input v-model="loginform.username" type="text" placeholder="왕형준"/></div>
      <span v-show="!message.usernamevalid" style="color: red; font-size: 9px;">유져네임은 3글자 이상으로 지정해주세요</span>
      <div>비밀번호를 입력하세요:<input v-model="loginform.password" type="password" placeholder="숫자 및 기호 섞어서 사용"/></div>
      <div>비밀번호를 재입력하세요: <input v-model="loginform.checkpassword" type="password" placeholder="숫자 및 기호 섞어서 사용"/></div>
      <button v-on:click="submit">가입하기</button>
      <div>{{message.errormessage}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        apiurl: "https://www.wanghyungjun-api.co.uk/cofounderapi/users",
        loginform:{email: '', username: '',password: '',checkpassword: ''},
        message: {errormessage:'', usernamevalid: false, success:''}
      }
    },
    methods:{
      submit: function () {
          if(this.message.usernamevalid){
              this.$http.post(this.apiurl,{
                  email: this.loginform.email,
                  username: this.loginform.username,
                  password: this.loginform.password,
                  checkpassword: this.loginform.checkpassword
              }).then(function (data) {
                  if(data.body['error']!=undefined) this.message.errormessage=data.body['error'][0];
                  if(data.body['success']!=undefined) alert(data.body['success'])
              })
          }else{
              this.message.errormessage="닉네임을 3글자 이상으로 정해주세요";
          }
      }
    },
    created(){

    },
    beforeUpdate(){
        if(this.loginform.username.length>2){
            this.message.usernamevalid=true;
        }
    }
  }
</script>
