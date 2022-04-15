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
        <van-swipe-item v-for="(item, index) in swiperlist" :key="index">
          <img :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="buts">
      <div class="but">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20140323%2F23-034936_851.jpg&refer=http%3A%2F%2Fimg1.touxiang.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432019&t=706df81c47651d261bfdc4ab8d54bc7b"
          alt=""
        />
        <div>经</div>
      </div>
      <div class="but">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F19%2F77%2F24K58PICcRj_1024.jpg&refer=http%3A%2F%2Fpic.qiantucdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432244&t=58c6f85e98f873b9906c8ad36a91e350"
          alt=""
        />
        <div>典</div>
      </div>
      <div class="but">
        <img
          src="https://img2.baidu.com/it/u=2695889812,2518799617&fm=253&fmt=auto&app=138&f=JPEG?w=440&h=440"
          alt=""
        />
        <div>网</div>
      </div>
      <div class="but">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F1a3193111279x187904664b15.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432291&t=d9a14acbbf888478e2aa3f6390c60faf"
          alt=""
        />
        <div>易</div>
      </div>
      <div class="but">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.woyaogexing.com%2F2017%2F01%2F23%2F1563d0188809c620%21400x400_big.jpg&refer=http%3A%2F%2Fimg.woyaogexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652432315&t=79425bf14bb3fb919e4a0cb3a4e593a8"
          alt=""
        />
        <div>云</div>
      </div>
    </div>

    <!-- 推荐歌单 -->
    <div class="gedan">
      <div class="gedan_title">推荐歌单</div>
      <div class="gedan_items">
        <div class="gedan_item" v-for="(item, index) in gedanlist" :key="index">
          <img :src="item.picUrl" alt="" />
          <div class="item_size">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- 推荐歌曲 -->
    <div class="music">
      <div class="music_title">一秒沦陷 华语精选</div>
      <van-swipe class="my-music" indicator-color="white" :show-indicators="false" :loop="false">
        <van-swipe-item v-for="(item,index) in musiclist" :key="index">
          <div class="item" v-for="(it, ind) in item" :key="ind">
            <div class="item_left">
              <div class="item_img">
                <img :src="it.picUrl" alt="" />
              </div>
              <div class="item_size">
                <div class="item_top_size">
                  {{it.name}}
                </div>
                <div class="item_xia_size">{{it.song.artists[0].name}}</div>
              </div>
            </div>
            <div class="item_right">
              <img src="@/assets/graybofang.png" alt="" />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门话题 -->
    <div class="huati">
      <div class="huati_title">热门话题</div>
      <div class="huati_item">
        <div class="item" v-for="(item,index) in hotlist" :key="index">
          <div class="item_left">
            <div class="item_left_icon">#</div>
            <div class="item_left_size" v-if="hotlist!==3">{{item.title}}</div>
            <div class="item_left_size" v-else>不登录就显示刘雨杰帅</div>
          </div>
          <div class="item_right">2.{{index+1}}万热度</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图数据
      swiperlist: null,
      // 推荐歌单列表
      gedanlist: null,
      // 推荐歌曲
      musiclist:null,
      // 热评列表
      hotlist:3
    };
  },
  mounted() {
    //   获取轮播图
    this.getswiper();
    // 获取推荐歌单
    this.getgedan();
    // 获取推荐歌曲
    this.getgequ()
    // 获取热门话题
    this.gethuati()
  },
  methods: {
    //   获取轮播图
    async getswiper() {
      // 这个接口没有offset 参数
      let res = await this.$api("/banner", {
        type: 1,
      });
      //   console.log(res.data.banners);
      this.swiperlist = res.data.banners;
    },
    // 获取推荐歌单
    async getgedan() {
      // 这个接口没有offset 参数
      let res = await this.$api("/personalized", {
        limit: 10,
      });
      // console.log(res.data.result);
      this.gedanlist = res.data.result;
    },
    // 获取推荐歌曲
    async getgequ() {
      // 这个接口没有offset 参数
      let res = await this.$api("/personalized/newsong", {
        limit: 19,
      });
      let newarr = this.divideEqually(res.data.result)
      // console.log(newarr)
      this.musiclist = newarr;
    },
    // 将一个大数组分成三份
    divideEqually(originArr) {
        /*此函数用于，把数组平均分成4份。
        * originArr，带分割的数组。*/
        if (originArr.length >= 3) {
          let arr1, arr2, arr3;
          arr1 = originArr.slice(0, Math.round(originArr.length / 3));
          arr2 = originArr.slice(Math.round(originArr.length / 3), Math.round(originArr.length / 3) * 2);
          arr3 = originArr.slice(Math.round(originArr.length / 3) * 2, Math.round(originArr.length / 3) * 3);
          // arr4 = originArr.slice(Math.round(originArr.length / 4) * 3);

          return [arr1, arr2, arr3];
        }
    },

    // 获取热门话题
    async gethuati(){
      let res= await this.$api("/hot/topic",{
        limit:4
      });
      console.log('热门话题',res.data.hot)
      this.hotlist = res.data.hot
    }


  },
};
</script>

<style lang="less" scoped>
.content {
  background: #f8f8f8;
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

  .buts {
    width: 320px;
    height: 52px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .but {
      width: 50px;
      height: 52px;
      //   background: green;
      flex-shrink: 0;
      img {
        width: 30px;
        height: 30px;
        display: block;
        //   background: yellow;
        margin: 0 auto;
      }
      div {
        font-size: 12px;
        text-align: center;
        margin-top: 3px;
        font-weight: 700;
      }
    }
  }
  // 推荐歌单部分
  .gedan {
    width: 320px;
    // height: 170px;
    background: white;
    margin-top: 10px;
    padding-bottom: 10px;
    .gedan_title {
      font-size: 14px;
      font-weight: 700;
      padding: 10px 20px;
    }
    .gedan_items {
      width: 300px;
      height: 120px;
      // background: red;
      margin-left: 20px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      overflow-x: auto;
      overflow-y: hidden;
      .gedan_item {
        width: 90px;
        margin-right: 10px;
        img {
          width: 90px;
          height: 90px;
          display: block;
          border-radius: 10px;
          // background: yellow;
        }
        .item_size {
          width: 90px;
          font-size: 10px;
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /*想省略几行就写几*/
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  // 推荐歌曲
  .music {
    width: 320px;
    // height: 100px;
    padding-bottom: 10px;
    background: white;
    margin-top: 10px;
    .music_title {
      font-size: 12px;
      font-weight: 700;
      padding: 10px 20px;
    }
    .my-music {
      width: 280px;
      height: 139px;
      margin: 0px auto 0;
      // background: green;
      .van-swipe-item {
        width: 280px;
        height: 139px;
        // background: red;
        overflow: hidden;
        .item {
          width: 100%;
          height: 38px;
          // background: yellow;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 0;
          border-bottom: .5px solid #e8e3e3;
          // margin-bottom: 5px;
          .item_left {
            display: flex;
            align-items: center;
            margin-left: 1px;
            .item_img {
              width: 38px;
              height: 38px;
              flex-shrink: 0;
              border-radius: 8px;
              img {
                width: 100%;
                height: 100%;
                display: block;
                // background: pink;
                border-radius: 10px;
              }
            }
            .item_size {
              width: 180px;
              height: 38px;
              // background: green;
              font-size: 12px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              margin-left: 10px;

              .item_top_size {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .item_xia_size {
                font-size: 10px;
                color: rgb(130, 126, 126);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
          .item_right {
            width: 20px;
            height: 20px;
            // background: pink;
            margin-right: 10px;
            border: 1px solid #c7c7c7;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              height: 80%;
              display: block;
            }
          }
        }
      }
    }
  }
 
  // 热们话题
  .huati{
    width: 320px;
    // height: 100px;
    background: white;
    margin-bottom: 30px;
    margin-top: 10px;
    padding-bottom: 10px;
    .huati_title{
      font-size: 12px;
      font-weight: 700;
      padding: 10px 20px;
    }
    .huati_item{
      width: 280px;
      // height: 50px;
      // background: red;
      margin: 0px auto 0;
      .item{
        height: 20px;
        // background: yellow;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        .item_left{
          display: flex;
          align-items: center;
          .item_left_icon{
            width: 16px;
            height: 16px;
            border-radius: 8px;
            background: #edf1f7;
            font-size: 10px;
            color: #4783d7;
            font-weight: 700;
            text-align: center;
            line-height: 16px;
          }
          .item_left_size{
            font-size: 12px;
            margin-left: 5px;
            width: 200px;
            // background: red;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
        }
        .item_right{
          font-size: 12px;
          color: #c7c7c7;
        }
      }
    }
  }
}
</style>