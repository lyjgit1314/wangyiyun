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
        <input
          type="number"
          placeholder="请输入手机号"
          class="inp"
          v-model="phone"
        />
      </div>

      <div class="login_item">
        <div class="item_icon">
          <img src="@/assets/mima.png" alt="" />
        </div>
        <div class="yanzheng">
          <div class="yanzheng_left">
            <input
              type="number"
              placeholder="请输入验证码"
              class="yanzheng_inp"
              v-model="yanzhnegma"
            />
          </div>
          <div class="ma_size" @click="fasong()">
            {{ shousize ? "发送验证码" : `${miao}秒` }}
          </div>
        </div>
      </div>

      <div class="login_item">
        <div class="item_icon">
          <img src="@/assets/mima.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="请输入新密码"
          class="inp"
          v-model="password"
        />
      </div>
      <!-- <div class="login_item">
        <div class="item_icon">
          <img src="@/assets/mima.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="请输入昵称"
          class="inp"
          v-model="ninkname"
        />
      </div> -->
    </div>

    <div class="bottom">
      <div class="bottom_left" @click="goback()">
        <img src="@/assets/fanhui.png" alt="" />
      </div>
      <div class="bottom_right" @click="zhuce()">立即修改</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 手机号
      phone: "",
      // 判断是否显示秒数
      shousize: true,
      // 倒计时
      miao: 60,
      //   验证码
      yanzhnegma: "",
      //   密码
      password: "",
      // 昵称
      //   ninkname: "",
    };
  },
  methods: {
    //   点击发送验证码
    fasong() {
      if (this.shousize !== true) {
        return;
      }
      if (this.phone == "") {
        this.$toast("请输入手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号格式不正确");
        return false;
      }

      // 发送验证码
      this.getma();
      // 检测手机是否注册
      //   this.jiance();
    },
    // 检测手机是否注册
    // async jiance(isshou) {
    //   let res = await this.$api("/cellphone/existence/check", {
    //     phone: this.phone,
    //   });
    //   console.log("检测注册", res.data.exist);
    //   if (res.data.exist == 1) {
    //     this.$toast("手机号已存在");
    //     return;
    //   } else {
    //     if (isshou == 1) {
    //       // 注册了
    //       this.clickzhuce();
    //     } else {
    //       // 发送验证码
    //       this.getma();
    //     }
    //   }
    // },

    // 发送验证码
    async getma() {
      let res = await this.$api("/captcha/sent", {
        phone: this.phone,
      });
      await this.daojishi();
    },

    // 倒计时开始
    daojishi() {
      this.shousize = false;
      let time = setInterval(() => {
        this.miao--;
        if (this.miao <= 0) {
          clearInterval(time);
          this.shousize = true;
          this.miao = 60;
        }
      }, 1000);
    },

    // 点击修改
    zhuce() {
      if (this.phone == "") {
        this.$toast("请输入手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号格式不正确");
        return false;
      }
      if (this.yanzhnegma == "") {
        this.$toast("请输入验证码");
        return false;
      }
      if (this.password == "") {
        this.$toast("请输入密码");
        return false;
      }
      //   if (this.ninkname == "") {
      //     this.$toast("请输入昵称");
      //     return false;
      //   }
      // 检测手机是否注册
      //   this.jiance(1);

      // 修改密码
      this.clickzhuce();
    },

    // 注册传值
    async clickzhuce() {
      let res = await this.$api("/register/cellphone", {
        captcha: this.yanzhnegma,
        phone: this.phone,
        password: this.password,
        // nickname: this.ninkname,
      }).catch((err) => {
        // console.log("错误打印", err.response.data);
        if (err.response.data.code == 503) {
          this.$toast(`${err.response.data.message}`);
        }
      });
      console.log(res.data.code);
      var that = this;
      if (res.data.code == 200) {
        this.$toast("修改成功");
        setTimeout(function () {
          that.$router.go(-1);
        }, 1000);
      }
    },
    // 返回上一页
    goback() {
      this.$router.go(-1);
    },
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
      .inp {
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
      .yanzheng {
        width: 200px;
        height: 28px;
        border-bottom: 2px solid white;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .yanzheng_left {
          width: 120px;
          height: 28px;
          display: flex;
          align-items: center;
          // background: red;
          .yanzheng_inp {
            width: 100%;
            height: 100%;
            background: transparent;
            border: 0;
            color: white;
            font-size: 14px;
            text-indent: 10px;
          }
        }
        .ma_size {
          font-size: 10px;
          padding: 6px 10px;
          color: white;
          background: #de2624;
          border-radius: 5px;
        }
      }
    }
  }

  .bottom {
    width: 236px;
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bottom_left {
      width: 35px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        display: block;
        // background: red;
      }
    }
    .bottom_right {
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
}
</style>