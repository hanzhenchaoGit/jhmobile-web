<template>
  <div>
    <mu-appbar title="新增分类">
      <mu-icon-button icon='arrow_back' @click="$router.back()"  slot="left"/>
    </mu-appbar>
    <div class="p10">
      <mu-select-field v-model="category.belongId" :labelFocusClass="['label-foucs']" label="所属分类" :maxHeight="300">
        <mu-menu-item v-for="v,index in categoryList" :value="v.categoryId" :title="v.cdesc" />
      </mu-select-field>
      <p style="color: #ff6000;">注：未选择分类表示添加的是顶级分类</p>
      <mu-text-field label="分类名称" hintText="请输入分类名称" v-model="category.name" fullWidth/>
      <mu-raised-button label="提交" @click="submit" class="demo-raised-button" secondary fullWidth/>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      category: {
        type: this.$route.params.id === 'product' ? '10' : '11'
      },
      categoryList: []
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      if (this.$route.params.id === 'product') {
        this.categoryList = this.$store.state.productCategoryList
      } else {
        this.categoryList = this.$store.state.newsCategoryList
      }
    },
    submit () {
      this.$parent.$refs.loading.show()
      this.$http.post('/rest/api/category/detail?' + qs.stringify(this.category)).then((res) => {
        this.$parent.$refs.loading.hide()
        window.alert('操作成功')
        this.$router.back()
      })
    }
  }
}
</script>
