<template>
  <div>
    <v-layout wrap class="confirm-pass  mt-4" style="max-width:550px;margin: 0 auto">
      <nav class="v-toolbar elevation-0 theme--dark primary" data-booted="true" style="justify-content: center">
        <div class="v-toolbar__content" style="height: 40px;justify-content: center;">
          <span class="text-bold">NHẬP MÃ BẢO MẬT</span>
        </div>
      </nav>
      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation class="px-3 pt-3" style="border: 1px solid #ddd;border-top:0px;background-color: white;border-radius:2px">
          <v-flex xs12>
            <p>Bạn vui lòng kiểm tra email để lấy mã bảo mật</p>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              box
              placeholder="Mã bảo mật"
              v-model="confirmCode"
              :rules="[v => !!v || 'Trường dữ liệu bắt buộc']"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <captcha ref="captcha"></captcha>
          </v-flex>
          <div class="text-xs-center my-2">
            <v-btn color="primary"
              :loading="loading"
              :disabled="loading"
              @click="submitConfirmPASS"
            >
              <v-icon>how_to_reg</v-icon>&nbsp;
              Đồng ý
            </v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Vue from 'vue'
import $ from 'jquery'
import support from '../../store/support.json'
import Captcha from './Captcha.vue'
export default {
  props: [],
  components: {
    'captcha': Captcha
  },
  data: () => ({
    loading: false,
    valid: false,
    confirmCode: ''
  }),
  computed: {
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
      var vm = this
      $('body').addClass('body_login')
      let current = vm.$router.history.current
      let currentQuery = current.query
    })
  },
  updated () {
    var vm = this
    vm.$nextTick(function () {
    })
  },
  watch: {
  },
  methods: {
    submitConfirmPASS () {
      let vm = this
      let currentQuery = vm.$router.history.current.query
      let currentParams = vm.$router.history.current.params
      let dataForm = {
        userCode: currentQuery.hasOwnProperty('active_user_id') ? currentQuery.active_user_id : '',
        confirmCode: vm.confirmCode,
        j_captcha_response: vm.$refs.captcha.j_captcha_response
      }
      console.log('dataForm', dataForm)
      if (vm.$refs.form.validate()) {
        vm.loading = true
        let filter = dataForm
        vm.$store.dispatch('confirmCodeForgotPass', filter).then(function (result) {
          vm.loading = false
        }).catch(function (reject) {
          vm.loading = false
          vm.$refs.captcha.makeImageCap()
        })
      }
    }
  }
}
</script>
