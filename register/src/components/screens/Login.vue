<template>
  <div id="login_container">
    <div class="header_login">
      <div class="logo"> 
        <a href=""> 
          <img src=""> 
          <div class="text-logo">
          </div> 
        </a> 
      </div>
    </div>
    <v-layout class="mt-4" wrap style="max-width:550px;margin: 0 auto">
      <v-flex xs12 v-if="isSigned">
        <v-card flat class="px-2 py-3" style="border: 1px solid #dddddd;">
          <v-flex xs12 class="primary--text text-bold text-xs-center">
            VUI LÒNG ĐĂNG XUẤT TRƯỚC KHI ĐĂNG NHẬP LẠI
          </v-flex>
          <v-flex xs12 class="mt-3 text-xs-center">
            <v-btn :loading="loading"
              :disabled="loading"
              @click="doLogOut"
              color="primary"
              class="mr-2"
            >
              <v-icon>input</v-icon>&nbsp;
              Đăng xuất
            </v-btn>
            <v-btn @click="goBack" color="primary">
              <v-icon>reply</v-icon>&nbsp;
              Thoát
            </v-btn>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex v-if="!isSigned" xs12>
        <nav class="toolbar theme--dark primary py-2" data-booted="true">
          <div class="toolbar__content"  style="justify-content: center">
            <h4 class="white--text">ĐĂNG NHẬP</h4>
          </div>
        </nav>
        <v-flex xs12 v-if="!isSigned" class="px-2 pb-2" style="border: 1px solid #dddddd;">
          <v-form ref="form" v-model="valid" lazy-validation class="mt-2">
            <v-flex xs12>
              <v-text-field
                box
                placeholder="Email đăng nhập"
                v-model="npmreactlogin_login"
                :rules="[v => !!v || 'Email đăng nhập là bắt buộc']"
                required
                prepend-inner-icon="person_outline"
                @keyup.enter="submitConfirmLogin"
                autofocus
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="">
              <v-text-field
                box
                placeholder="Mật khẩu"
                v-model="npmreactlogin_password"
                :type="'password'"
                :rules="[v => !!v || 'Mật khẩu là bắt buộc']"
                required
                prepend-inner-icon="vpn_key"
                @keyup.enter="submitConfirmLogin"
              ></v-text-field>
            </v-flex>
            <v-layout wrap class="ml-2">
              <v-flex style="max-width:150px">
                <v-checkbox
                  class="mt-0"
                  color="primary"
                  v-model="rememberAccount"
                  @change=""
                >
                  <div class="primary--text" slot="label">Ghi nhớ tài khoản</div>
                </v-checkbox>
              </v-flex>
              <v-flex @click="getPassword" style="font-size: 12px;cursor: pointer;max-width:120px;padding:7px">
                <div class="primary--text" >
                  Quên mật khẩu?
                </div>
              </v-flex>
            </v-layout>
            <v-flex v-if="captcha" class="py-2 text-xs-center captcha-element" xs12 style="
              align-items: center;
              background: #dedede;
              justify-content: center;
            ">
              <img :src="chapchablob" alt="capcha" style="border-radius: 5px;">
              <v-btn flat icon v-on:click.native="makeImageCap">
                <v-icon color="primary" size="32">refresh</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs12 class="mt-2 text-xs-center" v-if="captcha">
              <v-text-field
                box
                v-model="j_captcha_response"
                placeholder="Nhập captcha"
                :rules="[v => !!v || 'Mã captcha là bắt buộc']"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="text-xs-left text-xs-center">
              <v-btn class="ml-0 mr-1 my-0 white--text" color="#0b72ba"
                :loading="loadingLogin"
                :disabled="loadingLogin"
                @click="submitConfirmLogin"
                style="width: 115px"
              >
                <v-icon>how_to_reg</v-icon>&nbsp;
                Đăng nhập
              </v-btn>
              <v-btn class="ml-1 mr-0 my-0 white--text" color="#0b72ba"
                :loading="loadingLogin"
                :disabled="loadingLogin"
                @click="goBack"
                style="width: 115px"
              >
                <v-icon>reply</v-icon>&nbsp;
                Quay lại
              </v-btn><br>
              <v-btn v-if="conectDvcqg && !mapping" class="mt-2 mx-0 px-2 my-0 white--text" color="#0b72ba"
                :loading="loading"
                :disabled="loading"
                @click="loginDVCQG"
              >
                Đăng nhập qua Cổng DVC Quốc gia
              </v-btn>
            </v-flex>
            
          </v-form>
        </v-flex>
      </v-flex>
    </v-layout>
    <div class="footer_login"></div>
    <v-dialog v-model="dialogContact" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          <span >Cập nhật email sử dụng trên hệ thống</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="formContact" v-model="validContact" lazy-validation class="mt-2">
            <v-flex xs12>
              <v-text-field
                box
                placeholder="Nhập email"
                v-model="contactEmail"
                :rules="contactEmail ? [rules.required, rules.email] : [rules.required]"
                required
                prepend-inner-icon="person_outline"
              ></v-text-field>
            </v-flex>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="cancelContact">Bỏ qua</v-btn>
          <v-btn color="green darken-1" flat @click="submitContact">Đồng ý</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import Vue from 'vue'
import $ from 'jquery'
import support from '../../store/support.json'
export default {
  props: [],
  components: {},
  data: () => ({
    npmreactlogin_login: '',
    npmreactlogin_password: '',
    j_captcha_response: '',
    captcha: false,
    chapchablob: '',
    loading: false,
    valid: false,
    pinCode: '',
    conectDvcqg: false,
    isSigned: window.themeDisplay ? window.themeDisplay.isSignedIn() : false,
    mapping: false,
    dataMapping: '',
    dialogContact: false,
    validContact: false,
    contactEmail: '',
    hasEmail: false,
    rules: {
      required: (value) => !!value || 'Email là bắt buộc',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Địa chỉ Email không hợp lệ'
      }
    }
  }),
  computed: {
    loadingLogin () {
      return this.$store.getters.loading
    }
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
      var vm = this
      $('body').addClass('body_login')
      let current = vm.$router.history.current
      let currentQuery = current.query
      vm.makeImageCap()
      try {
        vm.conectDvcqg = ssoConfig ? ssoConfig['active'] : false
      } catch (error) {
      }
      // 
      let searchParams = window.location.href.split("?")[1]
      if (searchParams) {
        let dataDVCQG = decodeURIComponent(String(vm.getSearchParams(searchParams, "data")))
        // console.log('dataDVCQG', dataDVCQG)
        if (dataDVCQG) {
          let dataObj = JSON.parse(atob(dataDVCQG))
          console.log('dataObj', dataObj)
          if (dataObj && dataObj.hasOwnProperty('userId') && String(dataObj.userId) === '0') {
            vm.mapping = true
            vm.dataMapping = dataObj
            console.log('mapping', vm.mapping)
          }

          if (dataObj && dataObj.hasOwnProperty('state') && dataObj.state === 'create') {
            vm.contactEmail = dataObj['ThuDienTu'] ? dataObj['ThuDienTu'] : ''
            vm.dialogContact = true
          }
        }
      }
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
    makeImageCap () {
      var vm = this
      vm.chapchablob = ''
      vm.$store.dispatch('makeImageCapLogin').then(function (result) {
        vm.chapchablob = result
      }).catch(function (reject) {
        vm.chapchablob = ''
      })
    },
    loginDVCQG () {
      let vm = this
      let filter = {
        state: '',
        redirectURL: window.location.href.split("?")[0]
      }
      vm.$store.dispatch('getVNConect', filter).then(function (result) {
        if (result) {
          window.location.href = result
        } else {
          alert('Chức năng đang cập nhật')
        }
      }).catch(function () {
        alert('Chức năng đang cập nhật')
      })
    },
    submitConfirmLogin () {
      let vm = this
      let currentQuery = vm.$router.history.current.query
      let currentParams = vm.$router.history.current.params
      let filter = {
        npmreactlogin_login: vm.npmreactlogin_login,
        npmreactlogin_password: vm.npmreactlogin_password,
        j_captcha_response: vm.j_captcha_response
      }
      if (vm.$refs.form.validate()) {
        vm.$store.dispatch('goToDangNhap', filter).then(function (result) {
          console.log('goToDangNhap', result)
          if (vm.mapping && result === 'success') {
            vm.doMappingDvcqg()
          }
          if (result === 'captcha') {
            vm.captcha = true
            vm.makeImageCap()
          }
          if (result === 'changeSecrect') {
            window.location.href = window.themeDisplay ? window.themeDisplay.getLayoutURL() + '/#/thay-doi-mat-khau' : ''
          }
          if (result === 'verify') {
            let applicantId = ''
            if ( typeof(Storage) !== 'undefined') {
              applicantId = sessionStorage.getItem('applicantId')
            }
            vm.$router.push({
              path: '/xac-thuc-tai-khoan?active_user_id=' + applicantId
            })
          }
        })
        
        // let pAuth = Liferay.authToken
        // $.post("?p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&_com_liferay_login_web_portlet_LoginPortlet_javax.portlet.action=%2Flogin%2Flogin&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&p_auth=" + pAuth,
        // {
        //   "_com_liferay_login_web_portlet_LoginPortlet_login": vm.npmreactlogin_login,
        //   "_com_liferay_login_web_portlet_LoginPortlet_password": vm.npmreactlogin_password
        // },
        // function(data, status){
        //   window.location.href = window.location.origin
        // })
      }
    },
    doLogOut () {
      window.location.href = "/c/portal/logout";
    },
    getPassword () {
      let vm = this
      window.location.href = window.themeDisplay ? window.themeDisplay.getLayoutURL() + '/#/cap-lai-mat-khau' : ''
    },
    goBack () {
      window.history.back()
    },
    doMappingDvcqg () {
      let vm = this
      let filter = {
        dataMapping: vm.dataMapping
      }
      vm.$store.dispatch('mappingDvcqg', filter).then(function (result) {
      }).catch(function () {
      })
    },
    submitContact () {
      let vm = this
      if (vm.$refs.formContact.validate()) {
        // call cập nhật email user
        let oldEmail = vm.dataMapping['ThuDienTu'] ? vm.dataMapping['ThuDienTu'] : vm.dataMapping['TechID'] + '@dvcqg.gov.vn'
        $.ajax({
          url: '/o/rest/v2/dvcqgsso/changeemail?oldEmail=' + oldEmail + '&newEmail=' + vm.contactEmail + '&techId=' + vm.dataMapping['TechID'],
          data: {},
          type: 'POST',
          async: false,
          headers: {
            'groupId': window.themeDisplay.getScopeGroupId(),
            'Token': window.Liferay.authToken
          },
          success: function (result, status, xhr) {
            vm.dataMapping.state = 'auth'
            vm.doAuth(vm.dataMapping)
            setTimeout(function () {
              let urlDvc = window.themeDisplay.getSiteAdminURL().split('/~/')[0].replace('group','web')
              window.location.href = urlDvc
            }, 100)
          },
          error: function (xhr) {
          }
        })
      }
      
    },
    doAuth (dataIn) {
      $.ajaxSetup({
        headers: {
          'groupId': window.themeDisplay.getScopeGroupId(),
          'Token': window.Liferay.authToken,
          'Content-Type': 'application/json'
        }
      });
      $.post('/o/rest/v2/dvcqgsso/auth', JSON.stringify(dataIn))
      .done(function() {				
      })
    },
    cancelContact () {
      let vm = this
      vm.dialogContact = false
      let urlDvc = window.themeDisplay.getSiteAdminURL().split('/~/')[0].replace('group','web')
      window.location.href = urlDvc
    },
    getSearchParams (prams, key) {
      let value = ""
      let headers = prams.split("&")
      headers.forEach(function (header) {
        header = header.split("=");
        let keyHeader = header[0];
        if (keyHeader === key) {
          value = header[1]
        }
      });
      return value
    }
  }
}
</script>
