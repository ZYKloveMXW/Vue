<template>
  <div id="shoppingCar">
    <van-divider>购物车</van-divider>

    <van-row v-for="(item,id) in selfPrice" :key="id">
      <van-col span="3" type="flex" id="col-2">
        <van-checkbox v-model="checked"></van-checkbox>
      </van-col>
      <van-col span="21">
        <!-- 到时候这里写一个v-for -->
        <van-card
          :num="num[id]"
          :price="num[id]*selfPrice[id]"
          :desc="desc[id]"
          :title="title[id]"
          :thumb="thumb[id]"
        >
          <div slot="footer">
            <van-button size="mini" id="button" @click="sub(id)">-</van-button>
            <van-button size="mini" id="button" @click="add(id)">+</van-button>
          </div>
        </van-card>
      </van-col>
      <van-divider :style="{ padding: '0 16px' }"></van-divider>
    </van-row>

    <van-popup v-model="show" id="popup">不能再减了哦~</van-popup>

    <van-submit-bar :price="Sum" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false, //遮罩层
      checked: true,
      num: [1, 1, 1, 1],
      selfPrice: [],
      desc: [],
      title: [],
      thumb: []
    };
  },
  computed: {
    Sum: function() {
      let sum = 0;
      for (let i = 0; i < this.selfPrice.length; i++) {
        sum += this.num[i] * this.selfPrice[i];
      }

      return sum * 100;
    }
  },
  methods: {
    onSubmit() {},
    sub(id) {
      let temp = (this.num[id] -= 1);
      this.num.splice(id, 1, temp);
      // console.log(this.num[id]);

      if (this.num[id] <= 0) {
        this.show = true;
        this.num.splice(0, 1, 0);
      }
    },
    add(id) {
      let temp = (this.num[id] += 1);
      this.num.splice(id, 1, temp);
    }
  },
  // 要记录前一次操作留下的数据！！！,明天改bug
  activated() {
    console.log(this.selfPrice);
    let tempPrice = localStorage.getItem("price").split(",");
    let tempDesc = localStorage.getItem("desc").split(",");
    let tempTitle = localStorage.getItem("title").split(",");
    let tempThumb = localStorage.getItem("thumb").split(",");
    let tempArray = [tempPrice, tempDesc, tempTitle, tempThumb];
    let vueArray = [this.selfPrice, this.desc, this.title, this.thumb];
    /**
     *  只有在商城里面点击了加入购物车
     * 才能触发在购物车里更新数据
     */

    if (localStorage.getItem("flag") == 1) {
      for (let i = 0; i < vueArray.length; i++) {
        tempArray[i].forEach(element => {
          
          // 如果已经有了这个值，跳过,使商品数量+1即可
          if (vueArray[i].indexOf(element) <= -1) {
            vueArray[i].push(element);
          } else if (i == 0) {
            let index = vueArray[i].indexOf(element);
            let temp = (this.num[index] += 1);
            this.num.splice(index, 1, temp);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
#button {
  font-size: 15px;
}
#popup {
  background-color: rgba(0, 0, 0, 0);
  color: aliceblue;
  font-size: 20px;
}
#col-2 {
  /* background-color: aqua; */
  display: flex;
  height: 100px;
  padding-left: 6px;
  justify-content: center;
  align-items: center;
}

#shoppingCar {
  height: 700px;
  overflow: scroll;
}
</style>