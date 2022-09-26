<template>
  <div class="container">
    <div class="sub-title my-2 text-sm text-gray-600">
      Дополнительная информация
    </div>
    <el-input
      v-model="textarea"
      :rows="6"
      type="textarea"
      placeholder="Дополнительная информация"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps<{
  textareaFromProps: string
}>();

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:textarea']);

const textarea = computed({
  get: () => props.textareaFromProps,
  set: (val) => {
    emit('update:textarea', val);
  },
});
</script>

<style lang="scss" scoped>

</style>
