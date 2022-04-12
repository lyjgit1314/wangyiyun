<template>
  <div class="body">
    <van-tabbar
      v-model="active"
      @change="clickchange"
      class="tabbar"
      :safe-area-inset-bottom="true"
      inactive-color="#7d7e80"
      active-color="#ee0a24"
    >
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="search">标签</van-tabbar-item> -->
      <van-tabbar-item replace to="/mine" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    //   点击切换
    clickchange(e) {
      this.active = e;
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
//   .van-tabbar--fixed {
//     background: #25283a;
//     .van-tabbar-item--active {
//       background: transparent;
//     }
//   }
}
</style>