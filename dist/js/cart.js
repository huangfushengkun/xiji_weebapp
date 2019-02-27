var app = new Vue({
  el: "#app",
  data: {
    // 购物车中的数据
    wareHouseArr: [],
    //所有商品是否全选
    isSelectedAll: false,
    //是否显示弹出框
    isHideDelPane:false,
    totalPrice: 0,
    goodsNum: 0,
    currentDelShop: {},
    //组件加载完毕，请求数据
    
  },
  mounted(){
    //请求本地数据
    this.getLocalData();
  },
  filters: {
    //过滤
    moneyFormat(money){
        return '￥' + money.toFixed(2);
    }
  },
  methods:{
    //1. 请求本地数据
    getLocalData () {
        this.$http.get('data/cart.json').then(response => {
            const res = response.body
            if(res){
                this.wareHouseArr = res.allShops.shopList;
            }
        }, response => {
            alert('失败！');
        })
    },
    //2. 单个商品的加减
    singerShopPrice (shop, flag) {
      if(flag){
        shop.shopNumber++
      }else{
        if(shop.shopNumber<=1){
          shop.shopNumber = 1
          return
        }else{
          shop.shopNumber--
        }
      }
      //计算总价
      this.getAllShopPrice()
    },
    //3. 点击全选按钮
    changeIsSelectedAll(flag){
      //总控制
      this.isSelectedAll = !flag
      //便利所有的仓库数据
      this.wareHouseArr.forEach((value,index)=>{
          value.isSelectedAllGoods = !flag
          value.goodslist.forEach((goods,index)=>{
            goods.checked = !flag
          })
      })
      //计算总价
      this.getAllShopPrice()
    },

    //4. 单个仓库的选中与取消
    singerSelectCang(flag,index){

      //改变isSelectedAllGoods的值
      this.wareHouseArr[index].isSelectedAllGoods = !flag

      //判断是否所有仓库全部选中
      this.hasSelectedAll()
      this.CangSelectedAll(flag,index)
    },

    //5. 判断是否所有仓库全部选中
    hasSelectedAll(){
      let allflag = true;
      this.wareHouseArr.forEach((value,index)=>{
        if(!value.isSelectedAllGoods){
          allflag = false;
        }
      })

      // 改变isSelectedAll的值全选显示或隐藏
      this.isSelectedAll = allflag;
    },
    //6. 单个商品选中取消
    singerShopSelect(shop,num){
      if(typeof shop.checked ==='undefined'){
          this.$set(shop,'checked', true)
      }else{
          this.$set(shop,'checked', !shop.checked)
      }
      this.allGoodsSelected()
      //调用计算总价公式
      this.getAllShopPrice()
      //判断是否全选
    },
    //6. 判断单个仓库的所有商品是否全选
    hasOneCangSelectedAll(shop){
      let flag = true;
      shop.forEach((value,index)=>{
          if(!value.checked){
              flag = false;
          }
      })
      shop.isSelectedAllGoods = flag;
    },
    //7. 单个仓库全选和取消全选
    CangSelectedAll(flag,index){
      //单个仓库全选和取消全选

      //便利所有的山品数据
      this.wareHouseArr[index].goodslist.forEach((value,index)=>{
          if(typeof value.checked ==='undefined'){
              this.$set(value,'checked', !flag)
          }else{
              value.checked = !flag;
          }
      })
      //调用计算总价公式
      this.getAllShopPrice()
    },

    //8. 判断所有商品全部选中
    allGoodsSelected(){
      let allFlag = true
      this.wareHouseArr.forEach((value,index)=>{
        let flag = true;
        this.wareHouseArr[index].goodslist.forEach((goods,goodsIndex)=>{
          if(!goods.checked){
              flag = false;
          }
        })
        this.wareHouseArr[index].isSelectedAllGoods = flag
        value.goodslist.forEach((goods,goodsIndex)=>{
          if(!goods.checked){
            allFlag = false;
              return
          }
        })
      })
      this.isSelectedAll = allFlag
    },

    //9. 计算商品的总价与总数量
    getAllShopPrice(){
      let totalPrice = 0; //总价
      let goodsNum = 0; //总数量
      // 9.1 遍历所有的商品
      this.wareHouseArr.forEach((value, index) =>{
        value.goodslist.forEach((goods, goodsIndex) => {
          //判断商品是否被选中
          if(goods.checked){
            totalPrice += goods.shopPrice * goods.shopNumber
            goodsNum += goods.shopNumber
          }
        })
      })
      this.totalPrice = totalPrice
      this.goodsNum = goodsNum
    },

    // 10. 
    clickTrash(shop){
      this.isHideDelPane = true
      this.currentDelShop = shop
    },
    //11. 
    showBox(){
      this.isHideDelPane = false
    },
    //12. 
    delShop(){
      this.isHideDelPane = false; //隐藏面板
      this.wareHouseArr.forEach((value,index) => {
        console.log(value)
        console.log(value.goodslist)

        const _index = value.goodslist.indexOf(this.currentDelShop);
        console.log(_index)
        if(_index !== -1){
          value.goodslist.splice(_index, 1);
        }
        return
      })
      

    }

  }
})