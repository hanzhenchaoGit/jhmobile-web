<template>
  <div class="loading-wrapper" v-if="isloading">
    <mu-circular-progress :size="50" :strokeWidth="5"/>
    <div class="loading-txt">{{text}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      isloading: false,
      timer: null
    }
  },
  methods: {
    show (text, duration) {
      this.text = text || '加载中'
      this.isloading = true
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setTimeout(() => {
        this.isloading = false
      }, 15000)
    },
    hide () {
      this.isloading = false
    }
  }
}
</script>
<style scoped>
.loading-wrapper{position:fixed;z-index:999;left:50%;margin-left:-25px;top:30%}
.loading-txt{color:#999;width:100%;text-align:center;padding-top:10px}
</style>
