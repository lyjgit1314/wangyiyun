<template>
  <div class="content" @touchmove.prevent>
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>

    <div class="login">
      <div class="login_item">
        <div class="item_icon">
          <img src="@/assets/phone.png" alt="" />
        </div>
        <input type="number" placeholder="请输入手机号" v-model="phone"/>
      </div>
      <div class="login_item">
        <div class="item_icon">
          <img src="@/assets/mima.png" alt="" />
        </div>
        <input type="text" placeholder="请输入密码" v-model="password" />
      </div>
    </div>

    <div class="bottom">
        <div class="bottom_left" @click="goback()">
          <img src="@/assets/fanhui.png" alt="">
        </div>
        <div class="bottom_right" @click="login()">登录</div>
    </div>

    <div class="wangji" @click="goxiugai()">忘记密码？</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      phone:'',
      password:''
    };
  },
  methods: {
    // 点击登录
    login(){
      if (this.phone == "") {
        this.$toast("请输入手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号格式不正确");
        return false;
      }
      if (this.password == "") {
        this.$toast("请输入密码");
        return false;
      }
    // 调用登录接口
    this.setlogin()
    },

    // 调用登录接口
    async setlogin(){
      let res =  await this.$api('/login/cellphone',{
        phone:this.phone,
        password:this.password
      })
      console.log(res.data.message)
      var that = this
      if(res.data.code==502){
        this.$toast(`${res.data.message}`);
        return
      }
      if(res.data.code==200){
        this.$toast("登录成功");
        setTimeout(function(){that.$router.go(-2);},1000);
      }
    },

    // 跳转到修改密码页面
    goxiugai(){
      this.$router.push('/wangjimima')
    },
    goback(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 100vh;
  background: #f5615d;
  overflow: hidden;
  .logo {
    width: 60px;
    height: 60px;
    margin: 80px auto 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
      // background: red;
    }
  }

  .login {
    margin-top: 50px;
    .login_item {
      width: 236px;
      height: 30px;
      // background: green;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: 10px;
      .item_icon {
        width: 20px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
          display: block;
          // background: yellow;
        }
      }
      input {
        width: 200px;
        height: 28px;
        background: transparent;
        border: 0;
        color: white;
        font-size: 14px;
        margin-left: 10px;
        text-indent: 10px;
        border-bottom: 2px solid white;
      }
      input::placeholder {
        font-weight: 400;
        color: #fff;
      }
    }
  }

  .bottom{
    width: 236px;
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bottom_left{
      width: 35px;
      height: 30px;
      img{
        width: 100%;
        height: 100%;
        display: block;
        // background: red;
      }
    }
    .bottom_right{
      width: 100px;
      height: 30px;
      border: 1px solid #fff;
      border-radius: 15px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: white;
    }
  }
  .wangji{
    // display: inline-block;
    width: 80px;
    // height: 50px;
    // background: red;
    text-align: center;
    font-size: 12px;
    color: white;
    // margin-top: 20px;
    border-bottom: 1px solid white;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0;
  }
}
</style>