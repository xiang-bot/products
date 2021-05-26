<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, 'active': showWrapperActive }">
        <p>{{ title }}</p>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(listData, index) in renderList" :key="index">
            <span :class="{'mt-item' : true, 'active' : item.name == value}" v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{
              item.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['list', 'title', 'value', 'showWrapperActive', 'disabled', 'className'],
  computed: {
    renderList: function () {
      const col = Math.ceil(this.list.length / 12)
      const resultList = []
      for (var i = 0; i < col; i++) {
        const data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods: {
    showWrapper (e) {
      e.stopPropagation()
      //   this.showWrapperActive = true
      // 这里是通过自定以指令点击外面的 从而取消你点击的值 所以你要先搞清楚自定以指令的
      // 几个方法 先是最外面的docunment.add 里的click事件 来让你的binding.value执行
      // 而这里的binding。value 是你的自定以事件要执行的事 从而改变
      this.$emit('change_active', true)
    },
    documentClick () {
    //   this.showWrapperActive = false
      this.$emit('change_active', false)
    },
    changeValue (item) {
      this.$emit('change', item)
    }
  }
}
</script>
<style lang='scss'>
@import "@/assets/css/changeCity/select.scss";
</style>
