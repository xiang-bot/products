<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="isStyle" />
      </el-col>
    </el-row>
    <!--主页面下面的猫眼电影和酒店的地方-->
    <el-row>
      <el-col :span="24">
        <container :nav="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
  components: {
    MMenu,
    MLife,
    Container
  },
  data () {
    return {
      isStyle: {
        class: 'isStyle',
        title: '有格调',
        list: [
          {
            test: '全部',
            tab: 'all'
          },
          {
            test: '约会',
            tab: 'food'
          },
          {
            test: '丽人spa',
            tab: 'spa'
          },
          {
            test: '美团电影',
            tab: 'movie'
          },
          {
            test: '品质出游',
            tab: 'travel'
          }
        ]
      },
      recomment: {
        class: 'youhui',
        title: '很优惠',
        list: [
          {
            test: '全部',
            tab: 'all'
          },
          {
            test: '美食',
            tab: 'food'
          },
          {
            test: '休闲',
            tab: 'xiuxian'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
