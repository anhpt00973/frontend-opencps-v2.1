<template>
  <div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="10" />
    </content-placeholders>
    <div v-else style="width: 80%; margin:auto">
      <h4 class="pt-2 ml-2">
        <span style="color:#065694">TRA CỨU THÔNG TIN HỒ SƠ </span>
      </h4>
      <v-layout class="wrap pt-5">
        <v-flex class="px-2 py-2">
          <span class="text-bold">{{dossierDetail.serviceName}}</span>
        </v-flex>
      </v-layout>
      <div class="mt-2">
        <v-tabs
          v-model="active"
          color="cyan"
          dark
          slider-color="yellow"
        >
          <v-tab key="1" ripple class="mx-2"> Thông tin chung </v-tab>
          <v-tab key="2" ripple class="mx-2"> Tiến trình thụ lý </v-tab>
          <v-tab key="3" ripple class="mx-2" @click="loadVoting()" v-if="dossierDetail['dossierStatus'] === 'done'"> Đánh giá </v-tab>
          <v-tab-item key="1" class="wrap-scroll wrap-scroll-dossier">
            <v-card >
              <v-card-text class="px-0 py-0">
                <v-layout wrap class="px-2 py-2">
                  <v-flex xs12 sm4 class="pr-3">
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Mã hồ sơ: </span>
                      <span class="pl-0 text-bold ">  {{dossierDetail.dossierNo}} </span>
                    </div>
                    <!--  -->
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Cơ quan: </span>
                      <span class="pl-0 text-bold ">  {{dossierDetail.govAgencyName}} </span>
                    </div>
                    <!--  -->
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Trạng thái: </span>
                      <span class="pl-0 text-bold "> {{dossierDetail.dossierStatusText}} </span>
                    </div>
                  </v-flex>
                  <!--  -->
                  <v-flex xs12 sm4>
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Ngày gửi: </span>
                      <span class="pl-0 text-bold" v-if="dossierDetail.online"> {{dossierDetail.submitDate}} </span>
                      <span class="pl-0 text-bold" v-else> Một cửa </span>
                    </div>
                    <!--  -->
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Ngày tiếp nhận: </span>
                      <span class="pl-0 text-bold "> {{dossierDetail.receiveDate}}</span>
                    </div>
                    <!--  -->
                    <div class="xs12 sm12 pb-1">
                      <span class="pr-2">Ngày hẹn trả: </span>
                      <span class="pl-0 text-bold "> {{dossierDetail.dueDate}}</span>
                    </div>
                  </v-flex>
                  <!--  -->
                  <v-flex xs12 sm4>
                    <div class="xs12 sm12 pb-1" style="color:#0b72ba">Ghi chú:</div>
                    <div class="xs12 sm12 pb-1 overHidden" v-if="dossierDetail.dossierNote&&dossierDetail.dossierNote!=='null'">
                      <v-tooltip top>
                        <span slot="activator" class="text-bold ">{{dossierDetail.dossierNote}} </span>
                        <span class="pl-0" v-html="dossierDetail.dossierNote"> </span>
                      </v-tooltip>
                    </div>
                    <div class="xs12 sm12 pb-1" v-if="dossierDetail.extendDate">
                      <span class="pl-0 text-bold">Hẹn lại: {{dossierDetail.extendDate}}</span>
                    </div>
                    <!--  -->
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key="2">
            <v-card>
              <v-card-text class="px-0 py-0">
                <div>
                  <v-data-table :headers="headers" :items="dossierActions" class="table-landing table-bordered"
                  hide-actions no-data-text="Không có dữ liệu"
                  >
                    <template slot="headerCell" slot-scope="props">
                      <v-tooltip bottom>
                        <span slot="activator" class="text-bold">
                          {{ props.header.text }}
                        </span>
                        <span>
                          {{ props.header.text }}
                        </span>
                      </v-tooltip>
                    </template>
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center px-2">{{props.index + 1}}</td>
                      <td class="text-xs-left px-2">{{props.item.sequenceRole}}</td>
                      <td class="text-xs-left px-2">{{props.item.sequenceName}}</td>
                      <td class="text-xs-left px-2">{{props.item.durationCount}} ngày</td>
                      <td class="text-xs-left px-2">{{props.item.startDate|dateTimeView}}</td>
                      <td class="text-xs-left px-2">
                        <div v-for="itemUser in props.item.assignUsers" :key="itemUser.userId">
                          {{itemUser.userName}} <br>
                        </div>
                      </td>
                      <td class="text-xs-left">
                        <div v-for="(itemAction, index) in props.item.actions" :key="index">
                          {{itemAction.createDate | dateTimeView}} : <span style="color: #0b72ba">{{itemAction.actionName}}</span>
                        </div>
                        <div v-if="props.item.statusText">
                          <span style="color: green">{{props.item.statusText}}</span>
                        </div>
                      </td>
                    </template>
                  </v-data-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key="3">
            <v-card>
              <v-card-text class="px-0 py-0">
                <div>
                  <div v-if="votingItems.length > 0" v-for="(item, index) in votingItems" :key="index" >
                    <div class="text-bold">
                      {{index + 1}}.&nbsp; {{ item.subject }}
                    </div>
                    <v-radio-group class="ml-3 pt-2" v-model="item.selected" row>
                      <v-radio v-for="(item1, index1) in item.choices" v-bind:key="index1" :label="item1" :value="index1 + 1" ></v-radio>
                    </v-radio-group>
                    <v-layout wrap class="ml-3" style="margin-top:-10px">
                      <v-flex style="margin-left:45px" v-for="(item2, index2) in item.answers" :key="index2">
                        <span class="text-bold" style="color:green">{{item2}}/{{item.answersCount}}</span>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-if="votingItems.length === 0" class="mx-3">
                    <v-alert outline color="warning" icon="priority_high" :value="true">
                      Không có đánh giá
                    </v-alert>
                  </div>
                  <div class="ml-3" v-if="votingItems.length > 0">
                    <v-btn color="primary"
                      :loading="loadingVoting"
                      :disabled="loadingVoting"
                      @click="submitVoting"
                    >Gửi đánh giá</v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
      <!-- <v-btn class="back-btn" @click="goBack" fab color="primary">
        <v-icon dark>arrow_back</v-icon>
      </v-btn> -->
    </div>
  </div>
</template>
<script>
  
  import Vue from 'vue'
  export default {
    props: ['index'],
    components: {
      fullScreen () {
        return this.$store.getters.getFullScreen
      }
    },
    data: () => ({
      loading: false,
      loadingAction: false,
      dossierDetail: {},
      listHistoryProcessing: [],
      dossierActions: [],
      tailieuNop: [],
      tailieuKeyQua: [],
      votingItems: [],
      headers: [{
        text: '#',
        align: 'center',
        sortable: false
      },
      {
        text: 'Vai trò',
        align: 'center',
        sortable: false,
        class: 'vaitro_column'
      }, {
        text: 'Công việc',
        align: 'center',
        sortable: false,
        class: 'congviec_column'
      }, {
        text: 'Thời hạn quy định',
        align: 'center',
        sortable: false,
        class: 'thoihanquydinh_column'
      }, {
        text: 'Ngày bắt đầu',
        align: 'center',
        sortable: false,
        class: 'ngaybatdau_column'
      }, {
        text: 'Người thực hiện',
        align: 'center',
        sortable: false,
        class: 'nguoithuchien_column'
      }, {
        text: 'Kết quả',
        align: 'center',
        sortable: false,
        class: 'ketqua_column'
      }]
    }),
    computed: {},
    created () {
      let vm = this
      vm.$nextTick(function () {
        var vm = this
        vm.$store.commit('setFullScreen', true)
        vm.dossierDetail = this.$store.getters.getDetailDossier
        console.log('dossierDetail', vm.dossierDetail)
        if (vm.dossierDetail.submissionNote) {
          let submissionNote = vm.dossierDetail.submissionNote ? JSON.parse(vm.dossierDetail.submissionNote) : ''
          let resultTemp = submissionNote ? submissionNote.data : ''
          if (resultTemp) {
            for (var i = 0; i < resultTemp.length; i++) {
              if (resultTemp[i].hasOwnProperty('actions') && resultTemp[i]['actions'] !== null && resultTemp[i]['actions'] !== undefined) {
                if (!Array.isArray(resultTemp[i]['actions'])) {
                  let arrActionsTemp = []
                  arrActionsTemp.push(resultTemp[i]['actions'])
                  resultTemp[i]['actions'] = arrActionsTemp
                }
              }
            }
            vm.dossierActions = resultTemp
          }
        }
      })
    },
    watch: {},
    methods: {
      loadDossierActions () {
        var vm = this
        let dataParams = {
          dossierId: vm.dossierDetail.dossierId
        }
        if (vm.dossierDetail.originality === 0 || vm.dossierDetail.originality === '0') {
        } else {
          vm.$store.dispatch('loadDossierActions', dataParams).then(resultActions => {
            if (resultActions.data) {
              let resultTemp = resultActions.data
              for (var i = 0; i < resultTemp.length; i++) {
                if (resultTemp[i].hasOwnProperty('actions') && resultTemp[i]['actions'] !== null && resultTemp[i]['actions'] !== undefined) {
                  if (!Array.isArray(resultTemp[i]['actions'])) {
                    let arrActionsTemp = []
                    arrActionsTemp.push(resultTemp[i]['actions'])
                    resultTemp[i]['actions'] = arrActionsTemp
                  }
                }
              }
              vm.dossierActions = resultTemp
            }
          })
        }
      },
      loadLogs () {
        var vm = this
        let filter = {
          dossierId: vm.dossierDetail.dossierId
        }
        vm.$store.dispatch('getListHistoryProcessingItems', filter).then(function (result) {
          vm.listHistoryProcessing = []
          vm.listHistoryProcessing = result
        })
      },
      loadDossiertemplate () {
        var vm = this
        let filter = {
          dossierTemplateNo: vm.dossierDetail.dossierTemplateNo
        }
        if (vm.dossierDetail.dossierTemplateNo) {
          vm.$store.dispatch('loadDossierTemplates', filter).then(function (result) {
            console.log(result)
            vm.tailieuNop = result.filter(function (item) {
              return item.partType === 1
            })
            vm.tailieuKeyQua = result.filter(function (item) {
              return item.partType === 2
            })
          })
        }
      },
      loadVoting () {
        let vm = this
        let filter = {
          className: 'dossier',
          classPK: vm.dossierDetail.dossierId
        }
        vm.$store.dispatch('loadVoting', filter).then(function (result) {
          vm.votingItems = result
          console.log('votingItems', vm.votingItems)
        }).catch(function (reject) {
        })
      },
      submitVoting () {
        let vm = this
        let arrAction = []
        if (vm.votingItems.length > 0) {
          vm.loadingVoting = true
          for (var index in vm.votingItems) {
            vm.votingItems[index]['className'] = 'dossier'
            vm.votingItems[index]['classPk'] = vm.dossierDetail.dossierId
            arrAction.push(vm.$store.dispatch('submitVoting', vm.votingItems[index]))
          }
          Promise.all(arrAction).then(results => {
            vm.loadingVoting = false
            vm.loadVoting()
          }).catch(xhr => {
            vm.loadingVoting = false
          })
        }
      },
      goBack () {
        let vm = this
        let current = vm.$router.history.current
        let newQuery = current.query
        let queryString = '?'
        newQuery['detail'] = ''
        for (let key in newQuery) {
          if (newQuery[key] !== '' && newQuery[key] !== 'undefined' && newQuery[key] !== undefined && newQuery[key] !== null && newQuery[key] !== 'null') {
            queryString += key + '=' + newQuery[key] + '&'
          }
        }
        vm.$router.push({
          path: current.path + queryString
        })
      },
      getColor (level) {
        if (level === 2) {
          return 'green'
        } else if (level === 3) {
          return 'orange'
        } else if (level === 4) {
          return 'red'
        }
      }
    },
    filters: {
      dateTimeView (arg) {
        if (arg) {
          let value = new Date(Number(arg))
          return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()} ${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}`
        } else {
          return ''
        }
      }
    }
  }
</script>
