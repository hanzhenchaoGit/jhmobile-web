<template>
  <div class='wu-infinite-container'>
    <div class="fixed-bar">
      <mu-appbar title="网站询盘">
        <mu-icon-button icon='arrow_back' @click='$router.back()' slot='left'/>
        <mu-flat-button href="#/messageBind" label="邮箱绑定" slot="right"/>
        <div class='play-title'>
          网站询盘<span class="appbar-count" v-if='count != 0'>({{count}})</span>
        </div>
      </mu-appbar>
    </div>
    <mu-list>
      <div v-for='item,index in list' class="wrap" :class="{swipeleft: isSwipe === index}"
      @touchstart="touchstart($event, item)" @touchmove="touchmove($event, item, index)">
        <mu-list-item :title='item.title' :to="{name: 'messageDetail',params: { id: item.id}}" class="list-item">
          <div class="subContent">
            {{item.addTime}}
            <span class="recvState">{{item.recvState === '00' ? '未读' : ''}}</span>
          </div>
          <mu-icon value="navigate_next" :size="20" slot="right" color="#aaa"/>
        </mu-list-item>
        <!--阻止时间冒泡-->
        <div class="delete" @click.stop="del(item.id)">删除</div>
        <mu-divider/>
      </div>
    </mu-list>
    <div v-if="busy" style="text-align: center;padding: .5rem 0;">暂无数据</div>
    <mu-infinite-scroll :scroller='scroller' :loading='loading' @load='loadMore'/>
    <div style="padding-bottom: 56px;"></div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      list: [],
      count: 0,
      busy: false,
      loading: false,
      scroller: null,
      refresh: true,
      searchData: {
        page: 1,
        pageSize: 10,
        recvState: ''
      },
      isSwipe: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.list = []
      vm.searchData = {
        page: 1,
        pageSize: 10,
        recvState: vm.$route.params.recvState || ''
      }
      vm.get()
    })
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    get () {
      this.refresh = false
      this.loading = true
      this.$http.get('/rest/api/message/list?' + qs.stringify(this.searchData)).then((res) => {
        this.scrollList(this, res.data)
      })
    },
    loadMore () {
      this.refresh && this.get()
    },
    // 左侧删除
    touchstart (e, item) {
      item.x = e.changedTouches[0].pageX
      item.y = e.changedTouches[0].pageY
    },
    touchmove (e, item, index) {
      item.X = e.changedTouches[0].pageX
      item.Y = e.changedTouches[0].pageY
      if (item.X - item.x > 10) {
        this.isSwipe = ''
      }
      if (item.x - item.X > 10) {
        this.isSwipe = index
      }
    },
    // 删除信息
    del (id) {
      this.$http.delete('/rest/api/message/detail/' + id).then((res) => {})
      // 判断信息列表中id与正在删除的信息id是否相同，如果相同，就删除信息
      this.$parent.$parent.$refs.toast.show('删除成功')
      this.isSwipe = ''
      this.list.forEach((item, index, arr) => {
        if (item.id === id) {
          arr.splice(index, 1)
        }
      })
    }
  }
}
</script>
<style scoped>
.recvState{color:#ff7300;padding-left:10px}
</style>
