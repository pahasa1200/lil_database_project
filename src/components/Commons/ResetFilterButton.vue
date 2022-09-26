<template>
  <div class="reset_filters">
    <el-button @click="resetFilters" type="danger">Обнулить фильтр</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
const resetFilters = () => {
  store.dispatch('resetFilters');
};
</script>

<style lang="scss" scoped>
.reset_filters {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
