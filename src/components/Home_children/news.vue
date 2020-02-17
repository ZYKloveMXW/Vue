<template>
  <div id="new">
    <h1 class="textStyle">新闻</h1>
    <van-image width="100%" height="220px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <aside v-for="(item,id) in title" :key="id">
      <h2 style="color: black" class="textStyle">{{title[id]}}</h2>
      {{content_brief[id]}}
      <van-button @click="TurnToNew(id)" class="textStyle" plain type="info">显示更多
      </van-button>
      <van-divider :style="{ color: '	#708090', borderColor: '#1989fa', padding: '0 16px' }">分割线</van-divider>
    </aside>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      title: [],
      content_brief: [],
      grid: []
    };
  },
  methods: {
    TurnToNew(id) {
      this.$router.push({
        name: this.grid[id]
      })
    }
  },
  created() {
    this.$axios
      .get("http://localhost:3000/new")
      .then(res => {
        res.data.forEach(element => {
          let i = 1;
          console.log(element);
          this.grid.push("new" + i);
          console.log(this.grid);

          this.title.push(element.title);
          this.content_brief.push(element.content_brief);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
aside {
  margin: 5%;
  font-size: 18px;
}

#new {
  height: 680px;
  overflow: scroll;
}
</style>>
