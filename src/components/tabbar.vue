<template>
  <div class="body">
    <van-tabbar
      v-model="active"
      @change="clickchange"
      class="tabbar"
      :safe-area-inset-bottom="true"
      inactive-color="#7d7e80"
    >
      <template v-for="(item, idx) of tabBarData">
        <van-tabbar-item
          :key="idx"
          :class="item.path === $route.path ? 'active' : ''"
          :icon="item.icon"
          @click="clicktabbar(item)"
          >{{ item.title }}</van-tabbar-item
        >
      </template>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabBarData: [
        { title: '首页', path: '/', icon: 'home-o' },
        { title: '我的音乐', path: '/mymusic', icon: 'music-o' },
        { title: '我的', path: '/mine', icon: 'manager-o' },
      ],
    }
  },
  mounted(){
    
  },
  methods: {
    clicktabbar(item){
      if(item.path == this.$route.path){
        return
      }
      this.$router.replace(item.path)
    },
    //   点击切换
    clickchange(e) {
      this.active = e
    },
  },
}
</script>

<style lang="less" scoped>
.van-tabbar{
  height: 35px !important;
  // background: red;
}
.body {
  width: 100%;
  height: 100%;
  .van-tabbar-item {
    color: rgb(125, 126, 128);
    font-size: 8px !important;
    transform:scale(.8, .8);
    &.active {
      color: #ee0a24 !important;
    }
  }
  //   .van-tabbar--fixed {
  //     background: #25283a;
  //     .van-tabbar-item--active {
  //       background: transparent;
  //     }
  //   }
}
</style>
