<template>
<v-app id="app_thutuchuyenxa">
  <!-- <v-navigation-drawer>
  </v-navigation-drawer> -->
  <v-content>
    <main class="v-content" style="padding: 0px;" data-booted="true">
      <div class="v-content__wrap">
        <div class="pt-3" style="max-width: 1300px;height:100%;background-color: rgb(255,255,255);margin:0px auto;">
          <div class="pa-2 v-sheet theme--light" style="border: 1px solid rgb(222,222,222);">
            
            <!-- header danh sách thủ tục hành chính -->
            <div class="row-header" style="height: 38px; overflow: hidden; background: rgb(255, 255, 255);margin-bottom: 25px;">
              <div class="background-triangle-big"><span>DANH SÁCH THỦ TỤC HÀNH CHÍNH</span></div>
              <div class="layout wrap">
                <div class="flex filter-agency md7">
                  <div style="display: flex; align-items: center; height: 40px;">
                    <span id="ubndCapHuyenBtn" class="mx-2 groupcode-active" style="cursor: pointer;" @click="getBangNiemYet()">
                      UBDN cấp huyện
                    </span>
                    <span id="ubndCapXaBtn" class="mx-2" style="cursor: pointer;"" @click="getBangNiemYetXa()">
                      UBND cấp xã
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- autocomplete header -->
            <v-container fluid grid-list-xl>
              <v-layout wrap align-center>
                <v-flex xs12 sm9 d-flex>
                </v-flex>
                <v-flex xs12 sm3 d-flex>
                  <v-autocomplete
                    v-model="choncoquanquanlyModel"
                    :items="choncoquanquanlyItems"
                    item-text="name"
                    item-value="value"
                    label="Chọn cơ quan quản lý"
                  ></v-autocomptete>
                </v-flex>
              </v-layout>
            </v-container>
  
            <div class="layout row wrap"">
              <div class="flex xs12" style="margin-left: 23px;">
  
              <!-- bảng show danh sách cấp Huyện -->
              <div v-if="showDanhSachCapHuyen">
                <h1 style="text-align:center;color:red;font-weight:700;margin-left:20px;
                  text-transform: uppercase;">
                  Bảng niêm yết các thủ tục hành chính thuộc phạm vi giải quyết của UBND Huyện
                </h1> <br>                  
                <label>{{choncoquanquanlyModel}}</label>
                <v-container fluid grid-list-xl>
                  <v-layout wrap align-center>
                    <v-flex xs12 sm3 d-flex v-bind:key="item.domainCode" v-for="item in danhSachUbndCapHuyen">
                      <v-btn
                          style="
                            background: linear-gradient(0deg, rgba(98, 192, 85, 0.644) 0%, #658a04);
                            cursor:pointer;
                            border: 1px; 
                            height: 75px; width: 100%;
                          "
                          @click='getThuTucHanhChinh(item)'
                      >
                        <label style="color:yellow; font-weight: 600; margin-top: 20px;
                          font-size:15px; height: 75px; width: 100%; position: absolute; 
                          white-space: nowrap; overflow: hidden; text-overflow: ellipses;
                          "
                        >
                          Lĩnh vực {{item.domainName}}
                        </label>
                        <label style="color:white;font-size:12px;
                          height: 75px; width: 100%; display: flex;
                          justify-content: center; align-items: flex-end;
                        ">
                          Có {{item.count}} thủ tục
                          <span class="material-icons" style="font-size: 18px;">forward</span>
                        </label>
                      </v-btn>
                    </v-flex> 
                  </v-layout>
                </v-container>
              </div>
              <!-- bảng show danh sách thủ tục của cấp Huyện -->
              <div v-if="showDanhSachThuTuc">
                <h1 style="text-align:center;color:red;font-weight: 700;
                  text-transform: uppercase;">
                  Thủ tục hành chính cấp huyện thuộc lĩnh vực thanh tra
                </h1><br>
                <v-container fluid grid-list-xl>
                  <v-layout wrap align-center>
                    <v-flex xs12 sm6 d-flex v-bind:key="item.serviceInfoId" v-for="item in danhSachThuTucHanhChinh"> 
                      <v-btn 
                            style="
                              background-color:#658a04 !important; 
                              cursor: pointer; 
                              border:1px;
                              height: 90px; width: 100%;
                            "
                      >
                        <img style="width: 71px;height:71px;object-fit:cover;object-position:left;"
                              src="/o/tinhdongthap-theme/images/logo-header.png">
                        <label style="color:yellow;font-size:15px; 
                              height: 90px; width: 100%;
                              justify-content: left; display: flex;
                              margin: 20px 0 0 10px; text-align: left;
                              white-space: normal; overflow: hidden; text-overflow: ellipses;
                        ">{{item.serviceName}}</label>
                      </v-btn>
                    </v-flex> 
                  </v-layout>
                </v-container>
                <div>
                  <v-btn style="float:right;border: 1px;" @click="getBangNiemYet()">Quay Lại</v-btn>
                </div>
              </div>
  
              <!-- bảng show danh sách cấp Xã -->
              <div v-if="showDanhSachCapXa">
                <h1 style="text-align:center;color:red;font-weight:700;margin-left:20px;
                  text-transform: uppercase;">
                  Bảng niêm yết các thủ tục hành chính thuộc phạm vi giải quyết của UBND Xã
                </h1> <br>
                <v-container fluid grid-list-xl>
                  <v-layout wrap align-center>
                    <v-flex xs12 sm3 d-flex v-bind:key="item.domainCode" v-for="item in danhSachUbndCapXa">
                    <v-btn
                        style="
                          background: linear-gradient(0deg, rgba(98, 192, 85, 0.644) 0%, #658a04);
                          cursor:pointer;
                          border: 1px; 
                          height: 75px; width: 100%;
                        "
                        @click='getThuTucHanhChinhXa(item)'
                    >
                      <label style="color:yellow; font-weight: 600; margin-top: 20px;
                        font-size:15px; height: 75px; width: 100%; position: absolute; 
                        white-space: nowrap; overflow: hidden; text-overflow: ellipses;
                        "
                      >
                        Lĩnh vực {{item.domainName}}
                      </label>
                      <label style="color:white;font-size:12px;
                        height: 75px; width: 100%; display: flex;
                        justify-content: center; align-items: flex-end;
                      ">
                        Có {{item.count}} thủ tục
                        <span class="material-icons" style="font-size: 18px;">forward</span>
                      </label>
                    </v-btn>
                  </v-flex> 
                </v-layout>
              </v-container>
              </div>
              <!-- bảng show danh sách thủ tục của cấp Xã -->
              <div v-if="showDanhSachThuTucXa">
                <h1 style="text-align:center;color:red;font-weight: 700;
                  text-transform: uppercase;">
                  Thủ tục hành chính cấp xã thuộc lĩnh vực thanh tra
                </h1><br>
                <v-container fluid grid-list-xl>
                  <v-layout wrap align-center>
                    <v-flex xs12 sm6 d-flex v-bind:key="item.serviceInfoId" v-for="item in danhSachThuTucHanhChinhXa">
                      <v-btn 
                            style="
                              background-color:#658a04 !important; 
                              cursor: pointer; 
                              border:1px;
                              height: 90px; width: 100%;
                            "
                      >
                        <img style="width: 71px;height:71px;object-fit:cover;object-position:left;"
                              src="/o/tinhdongthap-theme/images/logo-header.png">
                        <label style="color:yellow;font-size:15px; 
                              height: 90px; width: 100%;
                              justify-content: left; display: flex;
                              margin: 20px 0 0 10px; text-align: left;
                              white-space: normal; overflow: hidden; text-overflow: ellipses;
                        ">{{item.serviceName}}</label>
                      </v-btn>
                    </v-flex> 
                  </v-layout>
                </v-container>
                <div>
                  <v-btn style="float:right;border: 1px;" @click="getBangNiemYetXa()">Quay Lại</v-btn>
                </div>
              </div>
  
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </main>
  </v-content>
</v-app>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    danhSachUbndCapHuyen: [],
    danhSachThuTucHanhChinh: [],
    danhSachUbndCapXa: [],
    danhSachThuTucHanhChinhXa: [],
    showDanhSachCapHuyen: false,
    showDanhSachThuTuc: false,
    showDanhSachCapXa: false,
    showDanhSachThuTucXa: false,
    choncoquanquanlyItems: [{name: "UBND Cấp Huyện", value: '1'}, {name: "UBND Cấp Xã", value: '2'}],
    choncoquanquanlyModel: '',
    
  }),
  created () {
    let vm = this
    if (vm.choncoquanquanlyModel == '1') {
      return (
          vm.getBangNiemYet()
        )
    }
    if (vm.choncoquanquanlyModel == '2') {
      vm.getBangNiemYetXa()
    } 
  },
  watch () {
    let vm = this
    vm.ubndCapHuyenBtn = document.getElementById("ubndCapHuyenBtn")
    vm.ubndCapXaBtn = document.getElementById("ubndCapXaBtn")
    
    setTimeout(function () {
      if (vm.choncoquanquanlyModel == '1' || vm.choncoquanquanlyModel.text == '1' || vm.choncoquanquanlyModel.value == '1') {
        return (
          vm.getBangNiemYet()
        )
      }
      if (vm.choncoquanquanlyModel == '2' || choncoquanquanlyModel == '2') {
        return (
          vm.getBangNiemYetXa()
        )
      } 
    }, 200)

  },
  methods: {
    getBangNiemYet() {
      let vm = this
      vm.showDanhSachCapHuyen = true
      vm.showDanhSachThuTuc = false
      vm.showDanhSachCapXa = false
      vm.showDanhSachThuTucXa = false
      ubndCapHuyenBtn.style.fontWeight = '700'
      ubndCapXaBtn.style.fontWeight = ''

      let config = {
        method: 'get',
        url: '/o/rest/v2/serviceinfos/statistics/domains?agency=CAP_HUYEN&sort=siblingSearch',
        headers: { 
          'Accept': 'application/json',
          'groupId': window.themeDisplay.getScopeGroupId()
        }
      };
      axios(config).then(function (response) {
        vm.danhSachUbndCapHuyen = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
      
    },
    getThuTucHanhChinh(item) {
      let vm = this
      vm.showDanhSachCapHuyen = false
      vm.showDanhSachThuTuc = true
      vm.showDanhSachCapXa = false
      vm.showDanhSachThuTucXa = false
      ubndCapHuyenBtn.style.fontWeight = '700'
      ubndCapXaBtn.style.fontWeight = ''
      
      vm.domainCode = item.domainCode
      let config = {
        method: 'get',
        url: '/o/rest/v2/serviceinfos?start=0&end=15&administration=CAP_HUYEN&agency=&keyword=&level=0&domain=' + vm.domainCode + '&sort=siblingSearch',
        headers: { 
          'Accept': 'application/json, text/plain, */*', 
          'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8', 
          'Token': 'xRiXls97', 
          'groupId': '35417'
        }
      };
      axios(config).then(function (response) {
        vm.danhSachThuTucHanhChinh = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    
    getBangNiemYetXa() {
      let vm = this
      vm.showDanhSachCapHuyen = false
      vm.showDanhSachThuTuc = false
      vm.showDanhSachCapXa = true
      vm.showDanhSachThuTucXa = false
      ubndCapHuyenBtn.style.fontWeight = ''
      ubndCapXaBtn.style.fontWeight = '700'
      let config = {
        method: 'get',
        url: '/o/rest/v2/serviceinfos/statistics/domains?agency=CAP_XA&sort=siblingSearch',
        headers: { 
          'Accept': 'application/json, text/plain, */*', 
          'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8', 
          'Token': 's1upO2w1', 
          'groupId': '35417'
        }
      };
      axios(config).then(function (response) {
        vm.danhSachUbndCapXa = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
      
    },
    getThuTucHanhChinhXa(item) {
      let vm = this
      vm.showDanhSachCapHuyen = false
      vm.showDanhSachThuTuc = false
      vm.showDanhSachCapXa = false
      vm.showDanhSachThuTucXa = true
      ubndCapHuyenBtn.style.fontWeight = ''
      ubndCapXaBtn.style.fontWeight = '700'
      
      vm.domainCode = item.domainCode
      let config = {
        method: 'get',
        url: '/o/rest/v2/serviceinfos?start=0&end=15&administration=CAP_XA&agency=&keyword=&level=0&domain=' + vm.domainCode + '&sort=siblingSearch',
        headers: { 
          'Accept': 'application/json, text/plain, */*', 
          'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8', 
          'Token': 's1upO2w1', 
          'groupId': '35417'
        }
      };
      axios(config).then(function (response) {
        vm.danhSachThuTucHanhChinhXa = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
 
  }
}

</script>

<style>
</style>
