<template>
  <div>
    <div class="row-header">
      <div class="background-triangle-big"> HOÀN THIỆN BỔ SUNG HỒ SƠ </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex xs8 sm10 pl-3 text-ellipsis text-bold" >
          {{thongTinChiTietHoSo.serviceName}}
        </div>
        <div class="flex xs4 sm2 text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="goBack" active-class="temp_active">
          Quay lại &nbsp;
            <v-icon size="16">undo</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <!--  -->
    <v-expansion-panel :value="[true]" expand  class="expansion-p0">
      <v-expansion-panel-content :value="true">
        <div slot="header">
          <div class="background-triangle-small">I. </div>THÔNG TIN HỒ SƠ
        </div>
        <v-card class="mb-2">
          <!-- <v-toolbar dark color="primary" height="40">
            <v-toolbar-title class="white--text" style="font-size: 15px;">Thông tin chung</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar> -->
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Loại hồ sơ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header header-text-field">
                  <v-chip small class="pl-0 mx-0 my-0"> Hồ sơ trực tuyến </v-chip>
                </v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Mã hồ sơ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.dossierIdCTN}}</v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Ngày tiếp nhận: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.receiveDate}}</v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Chủ hồ sơ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.applicantName}}</v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Địa chỉ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.address}}</v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Người nộp: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.delegateName}}</v-subheader>
              </v-flex>
              <!--  -->
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-header">Số CMND: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader class="pl-0 text-header header-text-field">{{thongTinChiTietHoSo.applicantIdNo}}</v-subheader>
              </v-flex>
              <!--  -->
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!--  -->
    <v-expansion-panel :value="[true]" expand  class="expansion-p0" style="position: relative">
      <v-expansion-panel-content :value="true">
        <div slot="header">
          <div class="background-triangle-small">II. </div>THÀNH PHẦN HỒ SƠ
        </div>
        <thanh-phan-ho-so ref="thanhphanhoso"></thanh-phan-ho-so>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!--  -->
    <div class="text-center mt-2">
      <v-btn color="primary" v-for="(item, index) in btnDossierDynamics" v-bind:key="index" @click="nextAction(item, index)" v-if="visibleBtnNextAction">
        {{item.actionName}}
        <span slot="loader">Loading...</span>
      </v-btn>
      <!-- <v-btn color="primary" @click="goBack">
        Lưu &nbsp;
      </v-btn> -->
      <v-btn color="primary" @click.native="goBack"
        :loading="loadingAction"
        :disabled="loadingAction"
      >
        <v-icon>undo</v-icon> &nbsp;
        Quay lại
        <span slot="loader">Loading...</span>
      </v-btn>
    </div>
    <!-- dialog bổ sung hồ sơ -->
    <!-- <v-dialog v-model="dialog_addTHPHS" scrollable persistent max-width="700px">
      <v-card>
        <v-card-title class="headline">
          Bổ sung hồ sơ
        </v-card-title>
        <v-card-text style="max-height: 350px" class="thanhphanhoso_bs">
          <thanh-phan-ho-so ref="thanhphanhoso_bs"></thanh-phan-ho-so>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat="flat"
            :loading="loadingAction"
            :disabled="loadingAction"
          >
            Hoàn thành bổ sung &nbsp;
            <span slot="loader">Loading...</span>
          </v-btn>
          <v-btn color="primary" flat="flat"
            :loading="loadingAction"
            :disabled="loadingAction"
          >
            Lưu &nbsp;
            <span slot="loader">Loading...</span>
          </v-btn>
          <v-btn color="red darken-3" flat="flat" @click.native="dialog_addTHPHS = false"
            :loading="loadingAction"
            :disabled="loadingAction"
          >
            Quay lại &nbsp;
            <span slot="loader">Loading...</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    <!--  -->
    <!-- <v-btn color="primary" @click.native="dialog_addTHPHS = true">
      TEST BSHS &nbsp;
      <v-icon>save</v-icon>
    </v-btn> -->
    <!-- End -->
  </div>
</template>
<script>
  
  import ThanhPhanHoSo from './TiepNhan/TiepNhanHoSo_ThanhPhanHoSoNew.vue'
  export default {
    props: ['index', 'id'],
    data: () => ({
      dialog_addTHPHS: false,
      loadingAction: false,
      thongTinChiTietHoSo: {},
      btnDossierDynamics: [],
      visibleBtnNextAction: true
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    components: {
      'thanh-phan-ho-so': ThanhPhanHoSo
    },
    created () {
      var vm = this
      vm.initData(vm.id)
      vm.getNextActions(vm.id)
    },
    watch: {
    },
    methods: {
      initData (data) {
        var vm = this
        vm.$store.dispatch('getDetailDossier', data).then(resultDossier => {
          vm.thongTinChiTietHoSo = resultDossier
          vm.$refs.thanhphanhoso.initData(resultDossier)
        })
      },
      goBack () {
        window.history.back()
      },
      getNextActions (dossierId) {
        let vm = this
        let filter = {
          dossierId: dossierId
        }
        vm.$store.dispatch('pullNextactions', filter).then(function (result) {
          vm.btnDossierDynamics = result
        })
      },
      nextAction (item, index) {
        console.log('Đã bổ sung')
        var vm = this
        console.log('luu Ho So--------------------')
        vm.$store.commit('setPrintPH', false)
        let thanhphanhoso = this.$refs.thanhphanhoso.dossierTemplateItems
        let dossierFiles = vm.$refs.thanhphanhoso.dossierFilesItems
        let dossierTemplates = thanhphanhoso
        let listAction = []
        let listDossierMark = []
        if (dossierTemplates) {
          dossierTemplates.forEach(function (val, index) {
            if (val.partType === 1) {
              val['dossierId'] = vm.thongTinChiTietHoSo.dossierId
              listDossierMark.push(vm.$store.dispatch('postDossierMark', val))
            }
          })
          if (dossierFiles.length !== 0) {
            dossierFiles.forEach(function (value, index) {
              if (value.eForm) {
                value['dossierId'] = vm.thongTinChiTietHoSo.dossierId
                listAction.push(vm.$store.dispatch('putAlpacaForm', value))
              }
            })
          } else {
            dossierTemplates.forEach(function (val, index) {
              if (val.partType === 1 && val.hasForm) {
                val['dossierId'] = vm.thongTinChiTietHoSo.dossierId
                listAction.push(vm.$store.dispatch('postEform', val))
              }
            })
          }
        }
        Promise.all(listDossierMark).then(values => {
        }).catch(function (xhr) {
        })
        Promise.all(listAction).then(values => {
          console.log(values)
          let filter = {
            dossierId: vm.thongTinChiTietHoSo.dossierId,
            actionCode: item.actionCode
          }
          let currentQuery = vm.$router.history.current.query
          vm.loadingActionProcess = true
          vm.$store.dispatch('processDossierRouter', filter).then(function (result) {
            vm.visibleBtnNextAction = false
            vm.$router.push({
              path: vm.$router.history.current.path,
              query: {
                recount: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                renew: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                q: currentQuery['q']
              }
            })
          })
        }).catch(reject => {
          console.log('reject=============', reject)
        })
      }
    }
  }
</script>
