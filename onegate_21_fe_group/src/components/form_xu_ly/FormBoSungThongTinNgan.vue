<template>
  <div style="width:100%">
    <v-expansion-panel :value="panel" expand  v-if="type !== 'dieuchinhdulieu' && formBuilder.length > 0" class="expansion-pl ext__form">
      <v-expansion-panel-content v-for="(item, index) in formBuilder" v-bind:key="index">
        <div slot="header"><div class="background-triangle-small"> <v-icon size="18" color="white">star_rate</v-icon> </div>
        {{item.fieldLabel}} <span v-if="item.required === true || item.required === 'true'" style="color:red"> *</span>
        </div>
        <v-card>
          <v-card-text class="py-2 px-2">
            <v-layout wrap>
              <v-flex xs12 class="mx-3">
                <v-text-field v-if="item.fieldType === 'textarea'"
                  box
                  :id="item.fieldName"
                  :value="item.value"
                  :placeholder="item.placeholder"
                  multi-line
                  @input="inputChangeValue(item)"
                  :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                  :required="(item.required === true || item.required === 'true') ? true : false"
                ></v-text-field>
                <v-text-field v-if="item.fieldType === 'string'"
                  box
                  :id="item.fieldName"
                  :value="item.value"
                  :placeholder="item.placeholder"
                  @input="inputChangeValue(item)"
                  :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                  :required="(item.required === true || item.required === 'true') ? true : false"
                ></v-text-field>
                <v-text-field v-if="item.fieldType === 'number'"
                  box
                  :id="item.fieldName"
                  :value="item.value"
                  :placeholder="item.placeholder"
                  @input="inputChangeValue(item)"
                  :rules="(item.required === true || item.required === 'true') ? [rules.required] : [rules.number]"
                  :required="(item.required === true || item.required === 'true') ? true : false"
                ></v-text-field>
                <v-autocomplete v-if="item.fieldType.indexOf('select') >= 0"
                  class="select-border"
                  :items="validDatasourceSelect(item.fieldType) ? JSON.parse(item.fieldType)['select'] : []"
                  :value="item.value"
                  :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                  :required="(item.required === true || item.required === 'true') ? true : false"
                  :placeholder="item.placeholder"
                  item-text="text"
                  item-value="value"
                  :hide-selected="true"
                  @change="inputChangeValue($event, index)"
                  box
                ></v-autocomplete>
                <!-- <v-text-field v-if="item.fieldType === 'date'"
                  :id="item.fieldName"
                  :value="item.value|parseDate"
                  :placeholder="item.placeholder"
                  readonly
                  append-icon="event"
                  v-on:click.native="openDialogCustom(item, item.fieldName)"
                  :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                  :required="(item.required === true || item.required === 'true') ? true : false"
                ></v-text-field> -->
                <v-layout wrap class="pl-2" v-if="item.fieldType === 'date'">
                  <v-icon color="blue" class="">event</v-icon>
                  <vue-ctk-date-time-picker 
                    ref="datepicker"
                    :label="item.value ? '' : 'Chọn ngày'"
                    style="width:auto!important"
                    class="ml-2"
                    :id="item.fieldName"
                    v-model="item.value"
                    formatted="DD/MM/YYYY HH:mm"
                    format="YYYY-MM-DDTHH:mm"
                    time-format="HH:mm"
                    :min-date="getCurentDateTime()"
                    :without-header="true"
                    locale="vi"
                  />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-dialog v-model="dialog" width="500">
            <v-date-picker
              v-model="date"
              full-width
              landscape
            ></v-date-picker>
            <v-card-actions style="background: #fff">
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="pickDateCustom">
                Xác nhận
              </v-btn>
            </v-card-actions>
          </v-dialog>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div v-if="type === 'dieuchinhdulieu'" class="ext__form px-3">
      <div v-if="formBuilder.length > 0" class="mb-2" hide-actions v-for="(item, index) in formBuilder" v-bind:key="index">
        <div class="py-1" style="border-bottom:1px solid #8a898942">
          <!-- <div class="background-triangle-small"> <v-icon size="18" color="white">star_rate</v-icon> </div> -->
          <span class="text-bold">{{index + 1}}. </span>{{item.fieldLabel}} <span v-if="item.required === true || item.required === 'true'" style="color:red"> *</span>
        </div>
        <v-form ref="form" v-model="valid2" lazy-validation>
          <v-layout wrap>
            <v-flex xs12 class="px-3 mt-2">
              <v-text-field v-if="item.fieldType === 'textarea'"
                box
                :id="item.fieldName"
                :value="item.value"
                :placeholder="item.placeholder"
                multi-line
                @input="inputChangeValue(item)"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                :required="(item.required === true || item.required === 'true') ? true : false"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-text-field v-if="item.fieldType === 'string'"
                box
                :id="item.fieldName"
                :value="item.value"
                :placeholder="item.placeholder"
                @input="inputChangeValue(item)"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                :required="(item.required === true || item.required === 'true') ? true : false"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-text-field v-if="item.fieldType === 'number'"
                box
                :id="item.fieldName"
                :value="item.value"
                :placeholder="item.placeholder"
                @input="inputChangeValue(item)"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : [rules.number]"
                :required="(item.required === true || item.required === 'true') ? true : false"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-autocomplete v-if="item.fieldType.indexOf('select') >= 0"
                class="select-border"
                :items="validDatasourceSelect(item.fieldType) ? JSON.parse(item.fieldType)['select'] : []"
                :value="item.value"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                :required="(item.required === true || item.required === 'true') ? true : false"
                :placeholder="item.placeholder"
                item-text="text"
                item-value="value"
                :hide-selected="true"
                @change="inputChangeValue($event, index)"
                box
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 class="px-3">
              <!-- <v-text-field v-if="item.fieldType === 'date'"
                box
                :id="item.fieldName"
                :value="item.value|parseDate"
                :placeholder="item.placeholder"
                readonly
                append-icon="event"
                v-on:click.native="openDialogCustom(item, item.fieldName)"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                :required="(item.required === true || item.required === 'true') ? true : false"
              ></v-text-field> -->
              <v-layout wrap class="mt-2" v-if="item.fieldType === 'date'">
                <v-icon color="blue" class="">event</v-icon>
                <vue-ctk-date-time-picker 
                  ref="datepicker"
                  :label="item.value ? '' : 'Chọn ngày'"
                  style="width:auto!important"
                  class="ml-2"
                  :id="item.fieldName"
                  v-model="item.value"
                  formatted="DD/MM/YYYY HH:mm"
                  format="YYYY-MM-DDTHH:mm"
                  time-format="HH:mm"
                  :without-header="true"
                  locale="vi"
                />
              </v-layout>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-text-field v-if="item.fieldType === 'status'"
                box
                :id="item.fieldName"
                :value="item.value"
                :placeholder="item.placeholder"
                @input="inputChangeValue(item)"
                :rules="(item.required === true || item.required === 'true') ? [rules.required] : []"
                :required="(item.required === true || item.required === 'true') ? true : false"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
        <v-dialog v-model="dialog" width="500">
          <v-date-picker
            v-model="date"
            full-width
            landscape
          ></v-date-picker>
          <!-- <vue-ctk-date-time-picker
            v-model="date"
            formatted="DD/MM/YYYY HH:mm"
            format="YYYY-MM-DDTHH:mm"
            time-format="HH:mm"
            without-input
          /> -->
          <v-card-actions style="background: #fff">
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="pickDateCustom">
              Xác nhận
            </v-btn>
          </v-card-actions>
        </v-dialog>
      </div>
      <div v-if="formBuilder.length === 0">
        <v-alert outline color="warning" icon="priority_high" :value="true">
          Không có form điều chỉnh dữ liệu
        </v-alert>
      </div>
    </div>
  </div>
</template>
<script>
  let datePicker = window.VueCtkDateTimePicker ? window.VueCtkDateTimePicker.default : window['vue-ctk-date-time-picker']

  export default {
    components: {
      'vue-ctk-date-time-picker': datePicker
    },
    props: {
      dossier_id: {
        type: Number
      },
      action_id: {
        type: Number
      },
      type: {
        type: String,
        default: () => ''
      }
    },
    data: () => ({
      itemId: null,
      fieldNameID: '',
      date: null,
      dialog: false,
      formBuilder: [],
      panel: [],
      valid: false,
      valid2: false,
      rulesValid: {
        number: function (value) {
          var pattern = /^\d+$/
          return pattern.test(value) || 'Kiểu dữ liệu sai định dạng.'
        }
      },
      rules: {
        required: (value) => !!value || 'Trường dữ liệu bắt buộc',
        number: function (value) {
          const pattern = /^\d+$/
          return pattern.test(value) || 'Kiểu dữ liệu sai định dạng.'
        }
      }
    }),
    watch: {
      dossier_id () {
        let vm = this
        let filter = {
          dossierId: vm.dossier_id,
          actionId: vm.action_id
        }
        vm.$store.dispatch('getExtraForm', filter).then(function (result) {
          vm.formBuilder = result
          if (vm.formBuilder.length > 0) {
            for (let key in vm.formBuilder) {
              if (vm.formBuilder[key]['fieldType'] === 'date' && vm.formBuilder[key]['value'] && isNaN(new Date(vm.formBuilder[key]['value']).getTime())) {
                vm.formBuilder[key]['value'] = ''
              } else if (vm.formBuilder[key]['fieldType'] === 'date' && vm.formBuilder[key]['value'] && !isNaN(new Date(vm.formBuilder[key]['value']).getTime())) {
                vm.formBuilder[key]['value'] = new Date(vm.formBuilder[key]['value'])
              }
            }
          }
        }).catch(function () {
          vm.formBuilder = []
        })
      },
      formBuilder () {
        let vm = this
        vm.allExpand(vm.formBuilder)
      }
    },
    created () {
      var vm = this
      vm.$nextTick(function () {
        let filter = {
          dossierId: vm.dossier_id,
          actionId: vm.action_id
        }
        if (filter['dossierId'] && filter['actionId']) {
          vm.$store.dispatch('getExtraForm', filter).then(function (result) {
            vm.formBuilder = result
            if (vm.formBuilder.length > 0) {
              for (let key in vm.formBuilder) {
                if (vm.formBuilder[key]['fieldType'] === 'date' && vm.formBuilder[key]['value'] && isNaN(new Date(vm.formBuilder[key]['value']).getTime())) {
                  vm.formBuilder[key]['value'] = ''
                } else if (vm.formBuilder[key]['fieldType'] === 'date' && vm.formBuilder[key]['value'] && !isNaN(new Date(vm.formBuilder[key]['value']).getTime())) {
                  vm.formBuilder[key]['value'] = new Date(vm.formBuilder[key]['value'])
                }
              }
              vm.allExpand(vm.formBuilder)
            }
          })
        }
      })
    },
    methods: {
      allExpand (arr) {
        let vm = this
        vm.panel = [...Array(arr.length).keys()].map(_ => true)
      },
      openDialogCustom (item, fieldName) {
        let vm = this
        vm.dialog = true
        vm.fieldNameID = fieldName
        vm.itemId = item
      },
      pickDateCustom () {
        let vm = this
        console.log(vm.date)
        if (vm.date) {
          vm.itemId.value = new Date(vm.date)
        }
        vm.dialog = false
      },
      inputChangeValue (item, index) {
        let vm = this
        if (index !== undefined && index !== null && index !== 'undefined' && index !== 'null') {
          vm.formBuilder[index]['value'] = item
        } else {
          item.value = document.getElementById(item.fieldName).value
        }
        console.log('formBuilder', vm.formBuilder)
      },
      showDatePicker () {
        this.$refs.datepicker.showDatePicker()
      },
      dateTimeView (arg) {
        if (arg) {
          let value = new Date(arg)
          return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`
        } else {
          return ''
        }
      },
      parseCurrentDate (date) {
        if (!date) {
          return null
        }
        // let [day1, time] = date.split(' ')
        let [day2, month, year] = date.split('/')
        // let [hh, mm, ss] = `${time}`.split(':')
        return `${year}-${month.padStart(2, '0')}-${day2.padStart(2, '0')}`
      },
      validDatasourceSelect (fieldType) {
        if (fieldType) {
          try {
            let x = JSON.parse(fieldType)
            if (x) {
              return true
            }
            return false
          } catch (error) {
            return false
          }
        } else {
          return false
        }
      },
      checkValid () {
        let vm = this
        let valid = true
        if (vm.formBuilder.length > 0) {
          for (let key in vm.formBuilder) {
            if ((vm.formBuilder[key]['required'] === true || vm.formBuilder[key]['required'] === 'true') && !vm.formBuilder[key]['value']) {
              valid = false
              alert(vm.formBuilder[key]['fieldLabel'] + ' là bắt buộc!')
              return valid
            }
          }
        }
        return valid
      },
      formSubmitData () {
        let vm = this
        let objectReturn = {}
        if (vm.formBuilder.length > 0) {
          for (let key in vm.formBuilder) {
            let valueEdit = vm.formBuilder[key].value
            if (vm.formBuilder[key].fieldType === 'date') {
              valueEdit = (new Date(vm.formBuilder[key].value)).getTime() ? (new Date(vm.formBuilder[key].value)).getTime() : ''
            }
            objectReturn[vm.formBuilder[key].fieldName] = valueEdit
          }
        } else {
          objectReturn = ''
        }
        console.log('form-thong-tin', objectReturn)
        return objectReturn
      },
      getCurentDateTime () {
        let date = new Date()
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      }
    },
    filters: {
      parseDate: function (value) {
        if (!value) return ''
        let date = ''
        if (!isNaN(Number(value))) {
          date = new Date(Number(value))
        } else {
          date = new Date(value)
        }
        if (date) {
          return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
        } else {
          return ''
        }
      }
    }
  }
</script>
