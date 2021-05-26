<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市" :list="hotCity"/>
        </el-row>
        <el-row>
            <hot title="最近访问" :list="rencentList"/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
export default {
  data () {
    return {
      hotCity: ['北京', '天津', '沈阳', '大连', '哈尔滨', '济南', '青岛', '南京', '上海'],
      rencentList: ['北京', '天津', '沈阳', '大连']
    }
  },
  components: {
    Province,
    Hot,
    Category
  }
}
</script>
