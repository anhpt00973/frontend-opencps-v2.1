<template>
  <div class="form-chitiet">
  </div>
</template>

<script>

import ThanhPhanHoSo from './TiepNhanHoSo_ThanhPhanHoSo.vue'

export default {
  props: ['index', 'id'],
  components: {
    'thanh-phan-ho-so': ThanhPhanHoSo
  },
  data: () => ({})
}
</script>