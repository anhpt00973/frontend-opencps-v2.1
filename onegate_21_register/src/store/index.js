import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import axios from 'axios'
import support from './support.json'
import toastr from 'toastr'
import $ from 'jquery'
import router from '@/router'

Vue.use(toastr)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    initData: {},
    loading: false,
    index: 0,
    agencyList: [],
    domainList: [],
    levelList: []
  },
  actions: {
    loadInitResource ({commit, state}) {
      return new Promise((resolve, reject) => {
        if (window.themeDisplay !== null && window.themeDisplay !== undefined) {
          state.initData['groupId'] = window.themeDisplay.getScopeGroupId()
          state.initData['user'] = {
            'userName': window.themeDisplay.getUserName(),
            'userEmail': '',
            'userId': window.themeDisplay.getUserId()
          }
        } else {
          state.initData['groupId'] = 0
          state.initData['user'] = {
            'userName': '',
            'userEmail': '',
            'userId': 20103
          }
        }
        resolve(state.initData)
      })
    },
    postApplicant ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        store.dispatch('loadInitResource').then(function (result) {
          let configs = {
            headers: {
              'groupId': state.initData.groupId,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          var dataPostApplicant = new URLSearchParams()
          dataPostApplicant.append('applicantIdType', data.applicantType)
          dataPostApplicant.append('applicantName', data.applicantName)
          dataPostApplicant.append('applicantIdNo', data.applicantIdNo)
          dataPostApplicant.append('applicantIdDate', data.applicantIdNoDate)
          dataPostApplicant.append('contactEmail', data.contactEmail)
          dataPostApplicant.append('contactTelNo', data.contactTelNo)
          dataPostApplicant.append('password', data.password)
          console.log('dataPostApplicant', dataPostApplicant)
          // test local
          // axios.post('http://127.0.0.1:8081/api/applicants', dataPostApplicant, configs).then(function (response) {
          axios.post('/o/rest/v2/applicants', dataPostApplicant, configs).then(function (response) {
            toastr.success('Đăng ký thành công')
            resolve(response.data)
          }).catch(function (errorRes, response) {
            reject(errorRes)
            console.log('response', errorRes.response)
            let dataError
            if (errorRes.response.data) {
              dataError = errorRes.response.data
              if (dataError && dataError.description && dataError.description === 'DuplicateContactEmailException') {
                toastr.error('Đăng ký thất bại, Email bạn sử dụng đã tồn tại trong hệ thống')
              } else if (dataError && dataError.description && dataError.description === 'DuplicateApplicantIdException') {
                toastr.error('Đăng ký thất bại, Số CMDN/Mã số thuế đã tồn tại trong hệ thống')
              } else if (dataError && dataError.description && dataError.description === 'DuplicateContactTelNoException') {
                toastr.error('Đăng ký thất bại, Số điện thoại đã được sử dụng trong hệ thống')
              } else {
                toastr.error('Đăng ký thất bại. Vui lòng thử lại')
              }
            }
          })
        })
      })
    },
    getDieuKhoan ({commit, state}, data) {
      return new Promise((resolve, reject) => {
        store.dispatch('loadInitResource').then(function (result) {
          let param = {
            headers: {
              groupId: state.initData.groupId
            }
          }
          // test local
          // axios.get('http://127.0.0.1:8081/api/dictcollections/jexcel/backend.datamgt.service/org.opencps.datamgt.model.DictCollection/org.opencps.datamgt.service.DictCollectionLocalServiceUtil/collectionCode/dataForm', param).then(function (response) {
          axios.get('/o/gate/v2/jexcel/backend.datamgt.service/org.opencps.datamgt.model.DictCollection/org.opencps.datamgt.service.DictCollectionLocalServiceUtil/collectionCode/dataForm', param).then(function (response) {
            if (response.data) {
              let dataReturn = response.data
              let dataRule
              if (Array.isArray(dataReturn) && dataReturn.length > 0) {
                let privacy = dataReturn.filter(function (item) {
                  return (item.id === 'PRIVACY')
                })
                dataRule = privacy && privacy.length > 0 ? privacy[0].name : ''
              }
              resolve(dataRule)
            } else {
              resolve('')
            }
          }).catch(function (error) {
            console.log(error)
            reject(error)
          })
        })
      })
    },
    confirmPIN ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        store.dispatch('loadInitResource').then(function (result) {
          let param = {
            headers: {
              groupId: state.initData.groupId
            }
          }
          // test local
          // axios.get('http://127.0.0.1:8081/api/applicants/' + data.userId + '/activate/' + data.pinCode, param).then(function (response) {
          axios.get('/o/rest/v2/applicants/' + data.userId + '/activate/' + data.pinCode, param).then(function (response) {
            resolve(response.data)
            toastr.success('Xác thực thành công')
          }).catch(function (xhr) {
            reject(xhr)
            toastr.error('Xác thực thất bại. Vui lòng thử lại')
          })
        })
      })
    },
    confirmForgotPASS ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        store.dispatch('loadInitResource').then(function (result) {
          let param = {
            headers: {
              groupId: state.initData.groupId
            }
          }
          // test local
          // axios.get('http://127.0.0.1:8081/api/users/' + data.confirmCode + '/forgot', param).then(function (response) {
          axios.get('/o/rest/v2/users/' + data.confirmCode + '/forgot', param).then(function (response) {
            resolve(response.data)
            // toastr.success('Xác thực thành công')
          }).catch(function (xhr) {
            reject(xhr)
            toastr.error('Yêu cầu thất bại. Vui lòng thử lại')
          })
        })
      })
    },
    confirmCodeForgotPass ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        store.dispatch('loadInitResource').then(function (result) {
          let param = {
            headers: {
              groupId: state.initData.groupId
            }
          }
          // test local
          // axios.get('http://127.0.0.1:8081/api/users/' + data.userCode + '/forgot/confirm/' + data.confirmCode, param).then(function (response) {
          axios.get('/o/rest/v2/users/' + data.userCode + '/forgot/confirm/' + data.confirmCode, param).then(function (response) {
            resolve(response.data)
            toastr.success('Xác thực thành công. Bạn vui lòng kiểm tra email hoặc số điện thoại để có mật khẩu mới')
            setTimeout(function () {
              let redirectURL = window.themeDisplay.getLayoutRelativeURL().substring(0, window.themeDisplay.getLayoutRelativeURL().lastIndexOf('\/'))
              window.open(redirectURL, '_self')
            }, 500)
          }).catch(function (xhr) {
            reject(xhr)
            toastr.error('Yêu cầu thất bại. Vui lòng thử lại')
          })
        })
      })
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setInitData (state, payload) {
      state.initData = payload
    },
    setAgencyList (state, payload) {
      state.agencyList = payload
    },
    setDomainList (state, payload) {
      state.domainList = payload
    },
    setLevelList (state, payload) {
      state.levelList = payload
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    index (state) {
      return state.index
    },
    getAgencyList (state) {
      return state.agencyList
    },
    getDomainList (state) {
      return state.domainList
    },
    getLevelList (state) {
      return state.levelList
    }
  }
})
