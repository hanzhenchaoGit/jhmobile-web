<template>
  <div>
    <div class="fixed-bar">
      <mu-appbar title="账号资料">
        <mu-icon-button icon='arrow_back' @click='$router.back()' slot='left'/>
      </mu-appbar>
    </div>
    <div class="p10 mbfixed">
      <mu-select-field v-model="user.sex" :labelFocusClass="['label-foucs']" label="性别" hintText="请选择">
        <mu-menu-item v-for="v,index in sexSelect" :value="v.value" :title="v.text" />
      </mu-select-field>
      <mu-text-field label="姓名*" hintText="请输入姓名" v-model="user.name" fullWidth :errorText="errorTextName" @input="changeInput($event,1)"/>
      <mu-text-field label="职务*" hintText="请输入职务" v-model="user.position" fullWidth :errorText="errorTextPosition" @input="changeInput($event,2)"/>
      <mu-text-field label="手机" hintText="请输入手机" v-model="user.cellphone" fullWidth/>
      <mu-text-field label="电话*" hintText="请输入电话" v-model="user.phone" fullWidth :errorText="errorTextPhone" @input="changeInput($event,3)"/>
      <mu-text-field label="传真" hintText="请输入传真" v-model="user.fax" fullWidth/>
      <mu-text-field label="地址" hintText="请输入地址" v-model="user.address" fullWidth/>
      <mu-flat-button label="地图定位" class="demo-flat-button" to="/map"/>
      <mu-text-field label="Email" hintText="Email" v-model="user.email" fullWidth disabled/>
      <mu-text-field label="QQ" hintText="请输入QQ" v-model="user.qq" fullWidth type="number"/>
      <mu-text-field label="MSN" hintText="请输入MSN" v-model="user.msn" fullWidth/>
      <mu-text-field label="邮编" hintText="请输入邮编" v-model="user.zipcode" fullWidth type="Number" :maxLength="6"/>
      <mu-text-field label="网址" hintText="请输入网址" v-model="user.url" fullWidth type="url"/>
      <mu-raised-button label="提交" @click="submit" class="fixed" secondary fullWidth/>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      isloading: true,
      errorTextName: '',
      errorTextPosition: '',
      errorTextPhone: '',
      sexSelect: [
        {text: '男', value: '00'},
        {text: '女', value: '01'}
      ],
      user: this.$store.state.user
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      if (!this.$store.state.user.id) {
        this.$http.get('/rest/api/user/detail').then((res) => {
          this.user = res.data.attributes.data
          this.$store.commit('setUser', this.user)
        })
      }
    },
    submit () {
      if (this.errorTextName !== '' || this.errorTextName !== '' || this.errorTextName !== '') {
        window.alert('完善数据')
        return true
      }
      this.$parent.$refs.loading.show()
      this.$http.put('/rest/api/user/detail?' + qs.stringify(this.user)).then((res) => {
        this.$parent.$refs.loading.hide()
        this.$store.commit('setUser', this.user)
        window.alert('操作成功')
      })
    },
    changeInput (val, type) {
      if (val === '') {
        if (type === 1) {
          this.errorTextName = '姓名不能为空'
        } else if (type === 2) {
          this.errorTextPosition = '职务不能为空'
        } else if (type === 3) {
          this.errorTextPhone = '电话不能为空'
        }
      } else {
        if (type === 1) {
          this.errorTextName = ''
        } else if (type === 2) {
          this.errorTextPosition = ''
        } else if (type === 3) {
          this.errorTextPhone = ''
        }
      }
    }
  }
}
</script>
