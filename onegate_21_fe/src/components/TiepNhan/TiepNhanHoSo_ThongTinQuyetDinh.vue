<template>
  <div>
    <v-form v-model="valid_thongtinquyetdinh" ref="formThongTinQuyetDinh" lazy-validation>
      <div>
        <div style="position: relative;">
          <v-expansion-panel :value="[true]" expand  class="expansion-pl">
            <v-expansion-panel-content>
              <div slot="header"> <div class="background-triangle-small"> <v-icon size="18" color="white">star_rate</v-icon></div> Thông tin quyết định</div>
              <v-card>
                <v-card-text class="pt-3">
                  <v-layout wrap v-if="!congVanDaGui">
                    <!--  -->
                    <v-flex xs12 sm2 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-subheader v-else class="pl-0">Số quyết định <span style="color:red" v-if="!congVanDaGui">&nbsp;*</span>: </v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-text-field
                      v-else-if="!loading && !congVanDaGui"
                      v-model="soQuyetDinh"
                      :rules="[rules.required, rules.varchar100]"
                      required
                      @change="soQuyetDinh=String(soQuyetDinh).trim()"
                      ></v-text-field>
                      <p class="pt-2" v-else>{{soQuyetDinh}}</p>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm2 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-subheader v-else class="pl-0">Ngày quyết định <span  style="color:red" v-if="!congVanDaGui">&nbsp;*</span>: </v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-menu
                        v-else-if="!loading && !congVanDaGui"
                        ref="menuDate"
                        :close-on-content-click="false"
                        v-model="menuDate"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                      >
                        <v-text-field
                          :rules="[rules.required]"
                          required
                          slot="activator"
                          v-model="dateFormated"
                          append-icon="event"
                          placeholder="dd/mm/yyyy"
                          @input="inputDate('dateFormated')"
                          @change="changeDocumentDate()"
                        >
                        </v-text-field>
                        <v-date-picker ref="picker" locale="vi" :max="getMindate()"
                        :first-day-of-week="1" v-model="documentDate" no-title @input="menuDate = false"></v-date-picker>
                      </v-menu>
                      <p class="pt-2" v-else>{{dateFormated}}</p>
                    </v-flex>
                    
                    <v-flex xs12 sm2 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-subheader v-else class="pl-0">Chức vụ người ký<span  style="color:red" v-if="!congVanDaGui">&nbsp;*</span>: </v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-text-field
                      v-else-if="!loading && !congVanDaGui"
                      v-model="jobposSignerQuyetDinh"
                      :rules="[rules.required, rules.varchar100]"
                      required
                      @change="jobposSignerQuyetDinh=String(jobposSignerQuyetDinh).trim()"
                      ></v-text-field>
                      <p class="pt-2" v-else>{{jobposSignerQuyetDinh}}</p>
                    </v-flex>
                    <v-flex xs12 sm2 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-subheader v-else class="pl-0">Người ký<span  style="color:red" v-if="!congVanDaGui">&nbsp;*</span>: </v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 class="mb-2">
                      <content-placeholders class="mt-1" v-if="loading">
                        <content-placeholders-text :lines="1" />
                      </content-placeholders>
                      <v-text-field
                      v-else-if="!loading && !congVanDaGui"
                      v-model="signerQuyetDinh"
                      :rules="[rules.required,rules.varchar100]"
                      required
                      @change="signerQuyetDinh=String(signerQuyetDinh).trim()"
                      ></v-text-field>
                      <p class="pt-2" v-else>{{signerQuyetDinh}}</p>
                    </v-flex>
                    <!--  -->
                    
                  </v-layout>
                  <v-layout wrap v-else>
                    <v-flex xs12 sm4 class="pr-3">
                      <div class="xs12 sm12 pb-2">
                        <span class="pr-2">Số quyết định: </span>
                        <span class="pl-0 text-bold"> {{soQuyetDinh}}</span>
                      </div>
                      <div class="xs12 sm12 pb-2">
                        <span class="pr-2">Ngày quyết định: </span>
                        <span class="pl-0 text-bold"> {{dateFormated}}</span>
                      </div>
                    </v-flex>
                    <v-flex xs12 sm4 class="pr-3">
                      <div class="xs12 sm12 pb-2">
                        <span class="pr-2">Chức vụ người ký: </span>
                        <span class="pl-0 text-bold"> {{jobposSignerQuyetDinh}}</span>
                      </div>
                      <div class="xs12 sm12 pb-2">
                        <span class="pr-2">Người ký: </span>
                        <span class="pl-0 text-bold"> {{signerQuyetDinh}}</span>
                      </div>
                    </v-flex>
                    <v-flex xs12 sm4 class="pr-3">
                      
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000'
}
export default {
  components: {
  },
  props: ['formCodeInput', 'detailDossier', 'donvinhanCollection', 'tphs', 'lengthDossier', 'createFileCongVan', 'requiredCVDenGroupId', 'requiredCVDenGovCode'],
  data: () => ({
    loading: false,
    dialogPDFLoading: false,
    dialogPDF: false,
    valid_thongtinquyetdinh: true,
    thongTinCongVan: '',
    donvi_gui_nhan: '',
    dossierFilesItems: [],
    fileAttachCounter: 0,
    menuDate: false,
    menuDueDate: false,
    documentDate: new Date().toISOString().substr(0, 10),
    dateFormated: null,
    dueDate: null,
    duedateFormated: null,
    agencySubmit: '',
    govAgencySubmitList: [],
    briefNote: '',
    sampleCount: '',
    contactTelNo: '',
    contactEmail: '',
    congVanDaGui: '',
    metaDataDossier: '',
    jobposSignerQuyetDinh: '',
    signerQuyetDinh: '',
    soQuyetDinh: '',
    rules: {
      required: (value) => !!value || 'Thông tin bắt buộc',
      email: (value) => {
        value = value.trim()
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Địa chỉ Email không hợp lệ'
      },
      passWord: (value) => {
        const pattern = /^(?![0-9]{6,})[0-9a-zA-Z]{6,}$/
        return pattern.test(value) || 'Gồm các ký tự 0-9, a-z và ít nhất 6 ký tự'
      },
      telNo: (value) => {
        const pattern = /^([0-9]{0,})$/
        if(typeof value === 'string'){
          value = value.trim()
        }
        return pattern.test(value) || 'Gồm các ký tự 0-9'
      },
      varchar100: (val) => {
        if(val){
          val = String(val).trim()
          return val.length <= 100 ? true : 'Không được nhập quá 100 ký tự'   
        } else {
          return true
        }  
      },
      varchar255: (val) => {
        if(val){
          val = String(val).trim()
          return val.length <= 255 ? true : 'Không được nhập quá 255 ký tự'   
        } else {
          return true
        }  
      },
      varchar500: (val) => {
        if(val){
          val = String(val).trim()
          return val.length <= 500 ? true : 'Không được nhập quá 500 ký tự'   
        } else {
          return true
        }  
      },
      varchar5000: (val) => {
        if(val){
          val = String(val).trim()
          return val.length <= 5000 ? true : 'Không được nhập quá 5000 ký tự'   
        } else {
          return true
        }
      },
    },
    
  }),
  computed: {
    originality () {
      var vm = this
      return vm.getOriginality()
    },
    userLoginInfomation () {
      return this.$store.getters.getUserLogin
    },
    employeeLoginInfomation () {
      return this.$store.getters.getEmployeeLogin
    },
  },
  created () {
    let vm = this
    vm.documentDate = new Date().toISOString().substr(0, 10)
    vm.dateFormated = vm.formatDate(vm.documentDate)
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      let vm = this
      let currentParams = newRoute.params
      let currentQuery = newRoute.query
    },
    documentDate (val) {
      this.dateFormated = this.formatDate(this.documentDate)
      console.log(this.dateFormated)
    }
  },
  methods: {
    initData (data) {
      let vm = this
      vm.thongTinCongVan = data
      try {
        let metadata = JSON.parse(vm.thongTinCongVan.metaData)
        vm.metaDataDossier = metadata
        vm.congVanDaGui = metadata.hasOwnProperty('congvandagui') && metadata.congvandagui ? true : false
        vm.soQuyetDinh = metadata.hasOwnProperty('soquyetdinh') ? metadata.soquyetdinh : ''
        vm.jobposSignerQuyetDinh = metadata.hasOwnProperty('jobposSignerQuyetDinh') ? metadata.jobposSignerQuyetDinh : ''
        vm.signerQuyetDinh = metadata.hasOwnProperty('signerQuyetDinh') ? metadata.signerQuyetDinh : ''
        vm.documentDate = metadata.hasOwnProperty('ngayquyetdinh') ? vm.parseDate(metadata.ngayquyetdinh) : new Date().toISOString().substr(0, 10)
        vm.dateFormated = this.formatDate(vm.documentDate)
      } catch (error) {
        vm.documentDate = new Date().toISOString().substr(0, 10)
        vm.dateFormated = vm.formatDate(this.documentDate)
      }
      vm.$refs.formThongTinQuyetDinh.resetValidation()
      console.log('thongtinquyetdinhInput', vm.thongTinCongVan)
    },
    getThongTinQuyetDinh () {
      let vm = this
      let thongTinQuyetDinh = {
        soquyetdinh: vm.soQuyetDinh,
        ngayquyetdinh: vm.dateFormated,
        jobposSignerQuyetDinh: vm.jobposSignerQuyetDinh,
        signerQuyetDinh: vm.signerQuyetDinh,
        validation: vm.$refs.formThongTinQuyetDinh.validate()
      }
      return thongTinQuyetDinh
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      let dateF = date.split(' ')[0]
      const [day, month, year] = dateF.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    getCurrentDate: function () {
      let date = new Date()
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
    },
    getMindate () {
      let date = new Date()
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    },
    parseDateToTimestamp (date) {
      if (!date) {
        return null
      }
      if (new Date(date) == 'Invalid Date') {
        return ''
      } else {
        return (new Date(date)).getTime()
      }
    },
    validateDate(str){
        return str.replace(/[^\d\/]/g, "");
    },
    inputDate (key) {
        let vm = this
        let gt = vm.validateDate(vm[key]);
        if (gt.match(/^\d{2}$/) !== null) {
            vm[key] = gt + '/'
        } else if (gt.match(/^\d{2}\/\d{2}$/) !== null) {
            vm[key] = gt + '/'
        }else
            vm[key] = gt
    },
    changeDocumentDate () {
      let vm = this
      vm.changeDate('dateFormated')
      vm.documentDate = vm.parseDate(vm.dateFormated)
    },
    changeDate(key){
        let vm = this 
        let dateString = vm[key];
        let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
        let regex2 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/
        if (!regex.test(dateString) && !regex2.test(dateString)) {
            vm[key] = ''
        }
        else{
            let date = vm[key].split("/");
            let day = date[0];
            let month = date[1];
            if (day > 31) {
                vm[key] = ''
            }
            else
                if (month > 12) {
                vm[key] = ''
                }else
                if(date[2].length == 2){
                    if(key==="birthdayFormated"){
                        if(date[2] <= 20){
                            vm[key] = day+'/'+month+'/20'+date[2]
                        } else {
                            vm[key] = day+'/'+month+'/19'+date[2]
                        }
                        
                    }else{
                        vm[key] = day+'/'+month+'/20'+date[2]
                    }
                }
        }
    },
  }
}
</script>
