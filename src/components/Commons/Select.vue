<template>
<div class="container">
  <div class="sub-title my-2 text-sm text-gray-600">
    {{ name }}
  </div>
  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// eslint-disable-next-line no-undef
defineProps<{
  name: string
}>();

const value = ref('');

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<style lang="scss" scoped>
.container {
  margin: 15px 0;
}
</style>
