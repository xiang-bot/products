<template>
  <div class="details-wrap">
    <div class="details clear">
      <div class="d-left">
        <div class="name">
          <span
            ><b></b
            ><!-- react-text: 25 -->{{ products.title
            }}<!-- /react-text --></span
          ><!-- react-text: 26 --><!-- /react-text -->
        </div>
        <div class="score clear">
          <div class="star-cont">
            <ul class="stars-ul">
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
            </ul>
            <ul class="stars-ul stars-light" style="width: 78.96px">
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
              <li><i class="iconfont icon-star_icon"></i></li>
            </ul>
          </div>
          <p>
            <!-- react-text: 52 -->{{ products.score
            }}<!-- /react-text --><!-- react-text: 53 -->分<!-- /react-text --><span
              ><!-- react-text: 55 -->人均￥<!-- /react-text --><!-- react-text: 56 -->54<!-- /react-text --></span
            >
          </p>
        </div>
        <div class="address">
          <p>
            <!-- react-text: 59 -->地址：<!-- /react-text --><!-- react-text: 60 -->{{
              products.address
            }}<!-- /react-text --><b
            ></b>
          </p>
          <p>
            <!-- react-text: 63 -->电话：<!-- /react-text --><!-- react-text: 64 -->{{
              products.itemId
            }}<!-- /react-text -->
          </p>
          <p>
            <!-- react-text: 66 -->营业时间：<!-- /react-text --><!-- react-text: 67 -->{{
              products.businessTime
            }}
            09:30-21:30<!-- /react-text -->
          </p>
        </div>
      </div>
      <div class="d-right">
        <div class="big">
          <div class="imgbox" style="height: 100%; width: 100%">
            <img
              :src="products.imgUrl"
            />
          </div>
        </div>
        <ul>
          <li>
            <div class="imgbox" style="height: 100%; width: 100%">
              <img
                src="https://img.meituan.net/msmerchant/ff09c694ab8d21765eb1ab458011300e225911.jpg@92w_50h_1e_1c"
              />
            </div>
          </li>
          <li>
            <div class="imgbox" style="height: 100%; width: 100%">
              <img
                src="https://img.meituan.net/msmerchant/18a09c9a30d671083200513527ea1462198767.jpg@92w_50h_1e_1c"
              />
            </div>
          </li>
          <li>
            <div class="imgbox" style="height: 100%; width: 100%">
              <img
                src="https://img.meituan.net/msmerchant/46ae58f53930b3d0fe5eaa89024af253263480.jpg@92w_50h_1e_1c"
              />
            </div>
          </li>
          <li>
            <div class="imgbox" style="height: 100%; width: 100%">
              <img
                src="https://img.meituan.net/msmerchant/f3d61fcf434d23b6e3aa629c196e00bc217169.jpg@92w_50h_1e_1c"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--这里是下面的推荐菜和优惠卷-->
    <div class="btm-cont">
      <div class="btm-left clear">
        <div>
          <h3>商家团购及优惠</h3>
          <div class="group">
            <h4>
              <!-- react-text: 100 -->4<!-- /react-text --><!-- react-text: 101 -->款堂食套餐<!-- /react-text -->
            </h4>
            <div  v-for="(item , index) in products.dealItems" :key="index">
              <div class="one clear">
                <div class="pic">
                  <div class="imgbox" style="height: 100%; width: 100%">
                    <img
                      src="https://p0.meituan.net/208.126/deal/2e79db84ca16029760e48ec7aa224654142764.jpg@100w_100h_1e_1c"
                    />
                  </div>
                </div>
                <div class="info">
                  <a class="fr buy" href="/meishi/order/buy/650908861"
                    >立即抢购</a
                  >
                  <p class="name">
                    <span>{{item.title}}</span>
                    <img
                      src="https://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png"
                      class="icon"
                    />
                  </p>
                  <p class="sale">
                    <!-- react-text: 113 -->已售<!-- /react-text --><!-- react-text: 114 -->{{item.saleNum}}<!-- /react-text -->
                  </p>
                  <p class="price">
                    <b>￥</b
                    ><!-- react-text: 117 -->{{item.price}}<!-- /react-text --><span
                      ><!-- react-text: 119 -->门店价￥<!-- /react-text --><!-- react-text: 120 -->{{item.counterPrice}}<!-- /react-text --></span
                    >
                  </p>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    <div class="recommend">
      <h3>推荐菜</h3>
    </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    api.getProducts().then((res) => {
      this.products = res.data.data
    })
  }
}
</script>
<style>
ul > li {
  list-style: none;
}
.details::after {
  clear: both;
  content: "";
  height: 0;
  display: block;
  overflow: hidden;
}
.group::after{
  clear: both;
  content: "";
  height: 0;
  display: block;
  overflow: hidden;
}
.one::after{
  clear: both;
  content: "";
  height: 0;
  display: block;
  overflow: hidden;
}
.details {
  font-size: 12px;
  color: #666;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 20px 33px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 14px 0 rgb(0 0 0 / 10%);
}
.details .d-left {
  float: left;
  width: 748px;
  padding-right: 20px;
}
.details .d-right {
  float: left;
  width: 380px;
  overflow: hidden;
  cursor: pointer;
}
.details .d-left .name {
  font-size: 26px;
  line-height: 37px;
}
.details .d-left .score {
  font-size: 14px;
  height: 14px;
  margin: 6px 0 17px;
}
.details .d-left .address {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 16px 0 11px;
}
.details .d-left .address p {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
}

/* 右边的图片 */
.details .d-right ul {
  width: 385px;
  padding-top: 10px;
}
.details .d-right ul li {
  float: left;
  width: 92px;
  margin-right: 4px;
  height: 50px;
}

/*下面的推荐菜*/
.btm-left {
  width: 950px;
  float: left;
}
.btm-left .group {
  margin-bottom: 40px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 20px;
}
.btm-left .group h4 {
  font-size: 16px;
  line-height: 26px;
}
.btm-left .group .one {
  padding-bottom: 20px;
  margin-top: 17px;
}
.btm-left .group .one .pic {
  width: 100px;
  height: 100px;
  float: left;
  cursor: pointer;
}
.btm-left .group .one .info {
  float: left;
  padding: 1px 0 0 20px;
  width: 788px;
}
.btm-left .buy {
  width: 120px;
  height: 40px;
  font-size: 14px;
  background-color: #f90;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.btm-left .group .one .info .name {
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
}
.btm-left .group .one .info .sale {
  font-size: 12px;
  color: #666;
  line-height: 17px;
  margin: 1px 0 22px;
  cursor: pointer;
}
.btm-left .group .one .info .price {
  font-size: 30px;
  color: #f60;
  cursor: pointer;
}
.btm-cont {
  color: #222;
  padding-top: 40px;
}
.detail-wrap .clear:after {
  clear: both;
  content: "";
  display: block;
  width: 0;
  height: 0;
}
.btm-left .group .one .info .price span {
    color: #999;
    font-size: 12px;
    margin-left: 10px;
}
.btm-left .fr {
    float: right;
    display: inline-block;
    margin-top: 30px;
    border-radius: 100px;
}
.group .line {
    height: 1px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
}
</style>
