<template>
  <div class="content">
    <div class="top">
      <div class="one" @click="gologin()">
        <div class="one_img">
          <img :src="userinfor.avatarUrl" alt="" v-if="userinfor">
        </div>
        <div class="name">{{userinfor?userinfor.nickname:'立即登录'}}</div>
        <div class="one_size">
          <div class="one_one">{{userinfor?userinfor.authStatus:'0'}}关注</div>
          <div class="one_one">{{userinfor?userinfor.authority:'0'}}粉丝</div>
          <div class="one_one">Lv.8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          userinfor:null
        }
    },
    mounted(){
      // 获取个人信息
      this.getuser()
    },
    methods:{

      // 获取个人信息
      async getuser(){
        let res = await this.$api('/user/account',{

        })
        console.log('用户信息',res)
        this.userinfor = res.data.profile
      },

      // 跳转到登录页面
      gologin(){
        this.$router.push('/loginindex')
      }
    }
}
</script>

<style lang="less" scoped>
.content{
  overflow: hidden;
  .top{
    width: 280px;
    height: 100px;
    // background: transparent;
    margin: 50px auto 0;
    // border-radius: 15px;
    .one{
      width: 100%;
      height: 100px;
      background: white;
    border-radius: 15px;
    position: relative;
    .one_img{
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 30px;
      position: absolute;
      top: -30px;
      left: 110px;
      img{
        width: 100%;
        height: 100%;
        display: block;
        background: white;
        border-radius: 30px;
        border: 0;
      }
    }
    .name{
      font-size: 14px;
      text-align: center;
      font-weight: 700;
      color: #000;
      padding-top: 40px;
    }
    .one_size{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      .one_one{
        font-size: 12px;
        color: #b0aeaf;
        margin: 0 5px;
      }
    }
    }
  }
}
</style>