<template>
  <div class="filter">
    <h1>Фильтр</h1>
    <ResetButton v-if="Object.keys(store.state.filters).length > 0" />
    <AutoInput
      name="Марка машины"
      placeholder="Audi 100"
      input-name="name"
      :state-from-props="store.state.parts"
      :input-model="brand"
      @update:inputModel=" newValue => brand = newValue"
    />
    <AutoInput
      name="Тип запчасти"
      placeholder="Колесо"
      :state-from-props="store.state.parts"
      input-name="type"
      :input-model="type"
      @update:inputModel=" newValue => type = newValue"
    />
    <AutoInput
      name="Топливо"
      placeholder="Дизель"
      :state-from-props="store.state.parts"
      input-name="fuel"
      :input-model="fuel"
      @update:inputModel=" newValue => fuel = newValue"
    />
    <AutoInput
      name="Год"
      placeholder="1993"
      :state-from-props="store.state.parts"
      input-name="year"
      :input-model="year"
      @update:inputModel=" newValue => year = newValue"
    />
    <AutoInput
      name="Кузов"
      placeholder="Универсал"
      :state-from-props="store.state.parts"
      input-name="body"
      :input-model="carBody"
      @update:inputModel=" newValue => carBody = newValue"
    />
    <AutoInput
      name="Объем"
      placeholder="1.3"
      :state-from-props="store.state.parts"
      input-name="volume"
      :input-model="volume"
      @update:inputModel=" newValue => volume = newValue"
    />
    <el-button @click="handleSubmit" type="primary">Выбрать</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import AutoInput from '../components/Commons/AutoInput.vue';
import ResetButton from '../components/Commons/ResetFilterButton.vue';

const store = useStore();
const brand = ref('');
const type = ref('');
const fuel = ref('');
const year = ref('');
const carBody = ref('');
const volume = ref('');

const handleSubmit = async () => {
  await store.dispatch('addFilters', {
    name: brand.value,
    body: carBody.value,
    fuel: fuel.value,
    type: type.value,
    volume: volume.value,
    year: year.value,
  });
  await router.push({ name: 'Home' });
};
</script>

<style lang="scss" scoped>

</style>
