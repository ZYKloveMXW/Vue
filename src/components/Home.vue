<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 220px">
      <mt-swipe-item v-for="(item,id) in imgSrc" :key="id">
        <img :src="item" alt="??" id="img" />
      </mt-swipe-item>
    </mt-swipe>
    <nav>
      <div id="first_nav">
        <div>
          <router-link :to="gridSrc[0]" class="textStyle glyphicon glyphicon-new-window">新闻</router-link>
        </div>
        <div>
          <router-link :to="gridSrc[1]" class="textStyle glyphicon glyphicon-new-window">商城</router-link>
        </div>
        <div>
          <router-link to="#" class="textStyle glyphicon glyphicon-new-window">测试</router-link>
        </div>
      </div>
      <div id="second_nav">
        <div>
          <router-link to="#" class="textStyle glyphicon glyphicon-new-window">测试</router-link>
        </div>
        <div>
          <router-link to="#" class="textStyle glyphicon glyphicon-new-window">测试</router-link>
        </div>
        <div>
          <router-link to="#" class="textStyle glyphicon glyphicon-new-window">测试</router-link>
        </div>
      </div>
    </nav>我是首页
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgSrc: [],
      gridSrc:[
        {name: 'news'},
        {name: 'store'}
      ]
    };
  },

  created() {
    this.$axios
      .get("http://localhost:3000/picture")
      .then(res => {
        console.log(res);
        res.data.forEach(element => {
          this.imgSrc.push(element.url);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.textStyle {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: rgb(60, 178, 228);
  font-weight: bold;
  border: 1px rgb(14, 162, 202) solid;
  border-radius: 12px;
}

.textStyle:hover {
  color: aliceblue;
  background-color: rgb(61, 179, 238);
}

#img {
  width: 100%;
  height: 220px;
}

nav {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
}

#first_nav {
  background-color: rgb(255, 255, 255);
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0%;
  display: flex;
}

#first_nav > div,
#second_nav > div {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0%;
  /* border: 2px red solid; */
}

#second_nav {
  background-color: rgb(255, 255, 255);
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0%;
  display: flex;
}
</style>