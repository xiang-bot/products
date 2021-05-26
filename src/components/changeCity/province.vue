<template>
    <div>
        <span class="name">按省份选择:</span>
        <m-select :list="provinceList" title="省份"
        :value="province"
        :showWrapperActive="provinceActive"
        @change_active="changeProvinceActive"
        @change="changeProvince"
        className="province"
      />
        <m-select :list="cityList" title="城市"
        :value="city"
        :showWrapperActive="cityActive"
        @change_active="changeCityActive"
        @change="changeCity"
        :disabled="cityDisabled"
        className="city"
      />
        <span>直接搜索 :</span>
        <el-select
            v-model="searchWord"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
    </div>
</template>
<script>
import MSelect from './select.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['北京', '天津', '沈阳', '大连', '哈尔滨', '济南', '青岛', '南京', '上海'],
      searchWord: '',
      loading: false,
      cityDisabled: true
    }
  },
  components: {
    MSelect
  },
  created () {
    api.getProvinceList().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name
      // 这里使用了你的vuex 目的是让你的组件直接交互
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: 'index' })
    },
    // 如何在父子组件里传值 首先 你的子组件是很服用的 就是用许多地方都可以用到它 然后你可以通过子组件props里面来收到你夫组件的值
    // 在夫组件的表签上面通过:来传值 而里面的子组件是用{{来收到你的值}}  还可以通过你的@后面自己写的方法 来自己定义 可以在夫组件里
    // 把你的数值通过形参来传递 在通过子组件来确定

    // 所以说 你先是点击一个click 来通过让它 展示出来 在通过点击其他的地方来让它的值变为false 来让它取消 而这个其他地方就是你的自定以组件
    // 来让它变成false

    // 而如果你的问题是两个组件里交互的 所以你要让两个组件联系起来 所义让这两个组件一个变为false 一个遍为true就行了
    remoteMethod (val) {
      console.log('这里是后端传的数据')
      console.log(this.searchWord)
    }
  }
}
</script>
<style lang='scss'>
@import '@/assets/css/changeCity/iselect.scss'
</style>
