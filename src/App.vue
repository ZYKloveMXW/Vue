<template>
  <div id="app">
    <mt-header title="vueSpa" id="Header">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 路由组件 -->

    <!-- 购物车需要状态缓存 -->
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- 底部栏 -->
    <mt-tabbar v-model="selected" id="bottom">
      <mt-tab-item id="home">
        <img slot="icon" src="/static/picture/timg.jpg" />
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="/static/picture/timg2.jpg" />
        会员
      </mt-tab-item>
      <mt-tab-item id="shoppingCar">
        <img slot="icon" src="/static/picture/timg3.jpg" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected: function(newV, oldV) {
      // selected就是对应的id
      this.$router.push({ name: this.selected });
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
      this.selected = "home";
    }
  }
};
</script>

<style scoped>
#Header {
  margin-bottom: 10px;
}

#bottom {
  position: fixed;
  bottom: 0%
}
</style>

