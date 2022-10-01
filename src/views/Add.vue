<template>
  <div v-loading="loading" class="add">
    <h1>Добавление новой запчасти</h1>
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
    <TextArea
      @update:textarea="newValue => textarea = newValue"
      :textarea-from-props="textarea"
    />
    <el-button class="button" type="primary" @click='handleSubmit'>
      Добавить
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { useStore } from 'vuex';
import AutoInput from '../components/Commons/AutoInput.vue';
import TextArea from '../components/Commons/TextArea.vue';
import ResetButton from '../components/Commons/ResetFilterButton.vue';

const store = useStore();
const textarea = ref('');
const brand = ref('');
const type = ref('');
const fuel = ref('');
const year = ref('');
const carBody = ref('');
const volume = ref('');
const loading = ref();

const handleSubmit = async () => {
  loading.value = true;
  await store.dispatch('addPart', {
    name: brand.value,
    body: carBody.value,
    fuel: fuel.value,
    type: type.value,
    volume: volume.value,
    year: year.value,
    additionalInfo: textarea.value,
  });
  loading.value = false;
  await router.push({ name: 'Home' });
};
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    margin-top: 20px;
  }
}
</style>
