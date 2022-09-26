<template>
  <div class="container">
    <div class="sub-title my-2 text-sm text-gray-600">
      {{ name }}
    </div>
    <el-autocomplete
      v-model="model"
      :fetch-suggestions="querySearch"
      clearable
      class="inline-input w-50"
      :placeholder="placeholder"
      @select="handleSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeMount,
  ref,
  watch,
} from 'vue';

interface RestaurantItem {
  value: string
  link: string
}

// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<{
  placeholder: string
  stateFromProps: Record<string, any>[]
  name: string
  inputName: string
  inputModel: string
}>(), {
  stateFromProps: () => [{ value: 'default', link: '' }],
  placeholder: 'default',
  name: 'default',
  inputModel: '',
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:inputModel']);

const restaurants = ref<RestaurantItem[]>([]);

const model = computed({
  get() {
    return props.inputModel;
  },
  set(value) {
    emit('update:inputModel', value);
  },
});

const createFilter = (queryString: string) => (restaurant: RestaurantItem) => (
  restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
);

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};

const handleSelect = (item: RestaurantItem) => {
  // to do something
  // console.log(item);
};

watch(
  () => props.stateFromProps,
  () => {
    restaurants.value = [];
    const check: string[] = [];
    for (let i = 0; i < props.stateFromProps.length; i += 1) {
      const val = props.stateFromProps[i][props.inputName];
      if (!check.includes(val)) {
        check.push(val);
        restaurants.value.push({ value: val, link: '' });
      }
    }
  },
);

onBeforeMount(() => {
  restaurants.value = [];
  const check: string[] = [];
  for (let i = 0; i < props.stateFromProps.length; i += 1) {
    const val = props.stateFromProps[i][props.inputName];
    if (!check.includes(val)) {
      check.push(val);
      restaurants.value.push({ value: val, link: '' });
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  margin: 15px 0;
}
</style>
