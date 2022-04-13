<template>
  <div class="content">
    <van-nav-bar title="" left-text="" :left-arrow="false">
      <template #left>
        <div class="left_icon">
          <van-icon name="wap-nav" />
        </div>
      </template>
      <template #title>
        <div class="nav">
          <div class="nav_icon">
            <img src="@/assets/sousuo.png" alt="" />
          </div>
          <input type="text" placeholder="爱意随风起，风止意难平" disabled />
        </div>
      </template>
      <template #right>
        <div class="left_icon">
          <van-icon name="music" />
        </div>
      </template>
    </van-nav-bar>
    <!-- 轮播图部分 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperlist" :key="index">
          <img :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="buts">
        <div class="but">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20140323%2F23-034936_851.jpg&refer=http%3A%2F%2Fimg1.touxiang.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432019&t=706df81c47651d261bfdc4ab8d54bc7b" alt="">
            <div>经</div>
        </div>
        <div class="but">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F19%2F77%2F24K58PICcRj_1024.jpg&refer=http%3A%2F%2Fpic.qiantucdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432244&t=58c6f85e98f873b9906c8ad36a91e350" alt="">
            <div>典</div>
        </div>
        <div class="but">
            <img src="https://img2.baidu.com/it/u=2695889812,2518799617&fm=253&fmt=auto&app=138&f=JPEG?w=440&h=440" alt="">
            <div>网</div>
        </div>
        <div class="but">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F1a3193111279x187904664b15.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432291&t=d9a14acbbf888478e2aa3f6390c60faf" alt="">
            <div>易</div>
        </div>
        <div class="but">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.woyaogexing.com%2F2017%2F01%2F23%2F1563d0188809c620%21400x400_big.jpg&refer=http%3A%2F%2Fimg.woyaogexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432315&t=79425bf14bb3fb919e4a0cb3a4e593a8" alt="">
            <div>云</div>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
        // 轮播图数据
        swiperlist:null
    };
  },
  mounted(){
    //   获取轮播图
    this.getswiper()
  },
  methods: {
    //   获取轮播图
    async getswiper(){
      // 这个接口没有offset 参数
      let res = await this.$api("/banner", {
        type:1
      });
    //   console.log(res.data.banners);
      this.swiperlist = res.data.banners;
    },
  },
};
</script>

<style lang="less" scoped>
body {
  background: white;
}
.content {
  .van-nav-bar {
    background: #e1e1e1 !important;
    border: 0 !important;
  }
  .van-nav-bar .van-icon {
    font-size: 20px;
    color: #000;
  }
  .nav {
    // width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 4px 20px;
    border-radius: 15px;
    .nav_icon {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    input {
      font-size: 10px;
      border: 0;
      background: transparent;
      color: #9c999a;
    }
  }

  // 轮播图部分
  .swiper {
    width: 320px;
    height: 140px;
    background: linear-gradient(to bottom, #dddbdc 0%, #ffffff 50%);
    overflow: hidden;
    .my-swipe {
      width: 280px;
      height: 120px;
      margin: 10px auto 0;
      .van-swipe-item {
        width: 280px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 10px;
        }
      }
    }
  }

  .buts{
      width: 320px;
      height: 52px;
    //   background: red;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .but{
          width: 50px;
          height: 52px;
        //   background: green;
          flex-shrink: 0;
          img{
              width: 30px;
              height: 30px;
              display: block;
            //   background: yellow;
              margin: 0 auto;
          }
          div{
              font-size: 12px;
              text-align: center;
              margin-top: 3px;
              font-weight: 700;
          }
      }
  }
}
</style>