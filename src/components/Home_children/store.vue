<template>
  <div style="height: 700px">
    <van-popup v-model="show" position="bottom" :style="{ height: '25%' }">
      <van-card :price="price[id]" :desc="desc[id]" :title="title[id]" :thumb="thumb[id]" />
      <van-goods-action>
        <van-goods-action-button type="warning" text="加入购物车" @click="addToCar(id)" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </van-popup>
    <!-- 上面是商品卡片，下面是购买/加入购物车成功 -->
    <van-popup id="success" v-model="showSuccess" position="bottom" :style="{ height: '15%' }">
      <span :style="{fontSize:'15px'}">添加成功</span>
      <van-icon name="passed" size="40" color="red" />
    </van-popup>

    <van-loading color="#1989fa" id="loading" />;
    <van-nav-bar :fixed="fixed" title="商城" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card
      v-for="(item,id) in price"
      :key="id"
      :price="price[id]"
      :desc="desc[id]"
      :title="title[id]"
      :thumb="thumb[id]"
    >
      <div slot="footer">
        <van-button size="mini" @click="add(id)">添加</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "store",
  data() {
    return {
      show: false,
      showSuccess: false,
      fixed: true,
      price: [],
      desc: [],
      title: [],
      thumb: [],
      chekedPrice: [],
      chekedDesc: [],
      chekedTitle: [],
      chekedThumb: [],
      id: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    add(id) {
      this.show = !this.show;
      this.id = id;
    },
    addToCar(id) {
      let allMsg = new Map();
      console.log(this.chekedPrice);
      console.log("-------------------");

      this.chekedPrice.push(this.price[id]);
      this.chekedDesc.push(this.desc[id]);
      this.chekedTitle.push(this.title[id]);
      this.chekedThumb.push(this.thumb[id]);
      console.log(this.chekedPrice);

      localStorage.setItem("flag", 1);
      allMsg.set("price", this.chekedPrice);
      allMsg.set("desc", this.chekedDesc);
      allMsg.set("title", this.chekedTitle);
      allMsg.set("thumb", this.chekedThumb);

      allMsg.forEach((value, key) => {
        localStorage.setItem(key, value);
      });
      this.showSuccess = !this.showSuccess;
      setTimeout(() => {
        this.showSuccess = !this.showSuccess;
        this.show = !this.show;
      }, 800);
    }
  },
  created() {
    this.$axios
      .get("http://localhost:3000/store")
      .then(res => {
        res.data.forEach(element => {
          this.price.push(element.price);
          this.desc.push(element.desc);
          this.title.push(element.title);
          this.thumb.push(element.thumb);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  deactivated() {
    this.chekedPrice.splice(0);
    this.chekedDesc.splice(0);
    this.chekedTitle.splice(0);
    this.chekedThumb.splice(0);
  }
};
</script>

<style scoped>
#loading {
  height: 650px;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
}
#success {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>>
