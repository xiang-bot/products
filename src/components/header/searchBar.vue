<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="item+'_'+index">
              <ruoter-link :to="{name: 'goods', params: {name: item}}">{{item}}</ruoter-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <ruoter-link :to="{name: 'goods', params: {name: item}}">{{item}}</ruoter-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link href="#" v-for=" (item,index) in suggestList " :key="item+'~'+index" :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
    <!--这里的params是对应后面的动态路由而传值的-->
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created () {
    api.searchHotWords().then(res => {
      this.hotPlaceList = res.data.data
      this.suggestList = res.data.data
    })
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      const val = this.searchWord
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1
        })
      })
      // 因为这里是你想后端请求的数据 又因为你的数据是在通过点击你的文本框来渲染数据
      // 所以说 你可以先拿到你的this.searchWord的值 然后在通过你提前渲染好的 下拉框的
      // 的值 所以说 你要通过你的下拉框的值(这个值就包括你的indexof》-1)的值来判断是不是在里面
      // 因为你的下拉框的值是隐藏的 所以说 你必须要输入你的关键字才行
    }
  },

  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    // 上面这个 如果她触发了点击 则他不会用数据展示  而下面的就
    // 就是他的focus写了东西 就会展示 主要是判断是不是ture
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
