<template>
  <div class='wu-infinite-container'>
    <div class="fixed-bar">
      <mu-appbar>
        <mu-icon-button icon='arrow_back' @click='$router.back()' slot='left'/>
        <mu-icon-button icon='search' slot='right' @click='search = !search'/>
        <mu-icon-menu icon='more_vert' slot='right'>
          <mu-menu-item title='产品添加' href='#/productAdd'/>
          <mu-menu-item title='产品分类' href='#/category/product'/>
        </mu-icon-menu>
        <div class='play-title'>
          产品管理<span class="appbar-count" v-if='count != 0'>({{count}})</span>
        </div>
      </mu-appbar>
    </div>
    <transition name='fade'>
      <div class='header-search' v-show='search'>
        <mu-select-field v-model='searchData.category' :labelFocusClass="['label-foucs']" label="请选择分类" :maxHeight="300" fullWidth>
          <mu-menu-item value='' title='全部分类' />
          <mu-menu-item v-for='v,index in categoryList' :value='v.categoryId' :title='v.cdesc' />
        </mu-select-field>
        <mu-text-field v-model='searchData.name' type='search' hintText='请输入产品标题' fullWidth/>
        <mu-raised-button label='搜索' @click='searchKey' secondary fullWidth/>
      </div>
    </transition>
    <mu-list class="wu-list">
      <template v-for='item in list'>
        <mu-list-item>
          <img :src="$store.state.imgUrl + item.picPath | picUrl(8)" @error="setErrorImg" slot="left" @click='detail(item.id)'>
          <div slot="title" @click='detail(item.id)'>
            {{item.name}}
          </div>
          <div class='subContent' @click='detail(item.id)'>
            人气：{{item.viewsum}}
          </div>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item :title="item.isdisplay === '1' ? '已显示' : '已隐藏'" :class="item.isdisplay === '1' ? 'itemActive' : ''" @click='display(item)'/>
            <mu-menu-item title="Seo修改" @click='seo(item)'/>
            <mu-menu-item title="删除" @click='del(item.id)'/>
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller='scroller' :loading='loading' @load='loadMore'/>
    <div v-if="busy" style="text-align: center;padding: .5rem 0;">暂无数据</div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      count: 0,
      search: false,
      list: [],
      categoryList: this.$store.state.productCategoryList,
      searchData: {
        page: 1,
        name: '',
        category: ''
      },
      loading: false,
      scroller: null,
      refresh: true,
      busy: false
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.list = []
      vm.searchData.page = 1
      vm.get()
      vm.getCate()
    })
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    get () {
      this.refresh = false
      this.loading = true
      this.$http.get('/rest/api/product/list?' + qs.stringify(this.searchData)).then((res) => {
        this.scrollList(this, res.data)
      })
    },
    getCate () {
      if (this.categoryList.length === 0)
      this.$http.get('/rest/api/product/categoryManage').then((res) => {
        this.categoryList = res.data.attributes.data
        this.$store.commit('setProductCategoryList', this.categoryList)
      })
    },
    loadMore () {
      this.refresh && this.get()
    },
    searchKey () {
      this.list = []
      this.searchData.page = 1
      this.search = false
      this.get()
    },
    setErrorImg (e) {
      e.target.src = this.$store.state.errImgUrl
    },
    detail (id) {
      this.$router.push({path: '/product/' + id})
    },
    seo (item) {
      this.$router.push({ name: 'seoDetail', params: item})
    },
    // 显示隐藏
    display (item) {
      item.isdisplay = item.isdisplay === '1' ? '0' : '1'
      this.$http.put('/rest/api/product/detail/' + item.productId + '?' + qs.stringify(item)).then((res) => {})
    },
    del (id) {
      if (window.confirm('确认删除吗？')) {
        this.$http.delete('/rest/api/product/detail/' + id).then((res) => {})
        this.list.forEach((item, index, arr) => {
          if (item.id === id) {
            arr.splice(index, 1)
          }
        })
        this.$parent.$refs.toast.show('删除成功')
        this.count = this.count - 1
      }
    }
  }
}
</script>
<style>
.mu-item-right i{
  font-size: 16px;
}
</style>
