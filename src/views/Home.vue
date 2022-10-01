<template>
<div class="home">
  <h1>Все запчасти</h1>
  <h3>Всего: {{ store.state.parts.length }}</h3>
  <ResetButton v-if="Object.keys(store.state.filters).length > 0" />
  <Table :state=store.state.parts :columns="columns" />
</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import Table from '../components/Commons/Table.vue';
import ResetButton from '../components/Commons/ResetFilterButton.vue';

const columns = ref([
  'ID',
  'Модель',
  'Тип запчасти',
  'Топливо',
  'Год',
  'Кузов',
  'Объем',
  'Дополнительная информация',
]);
const store = useStore();
</script>

<style lang="scss" scoped>
</style>
