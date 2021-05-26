<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按照音首字母选择: </dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-'+index">
          <dt>{{index}}</dt>
          <dd>
            <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
          </dd>
        </dl>
        <!--这里的那许多字母还没有写-->
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.slice(''),
      cityList: [],
      cityGroup: {}
    }
  },
  created () {
    api.getCityList().then((res) => {
      var obj = {}
      res.data.data.forEach(item => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityGroup = obj
    })
  },
  methods: {
    changeCity (item) {
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: 'index' })
      // 这里的setPosition是你vuex里的一个方法 通过异调用
      // dispatch方法来运行你的setPosition的函数 并且传入item说你点击的
      // 城市的值 通过传递到前面的页面 来运行跳转 跳转页面的就是this.$store.push({name：})
      // name后面写你要跳转的页面
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/categroy.scss'
</style>
