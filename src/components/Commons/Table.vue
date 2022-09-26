<template>
  <el-table :data="state" style="width: 100%" stripe>
    <el-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">Модель: {{ props.row.name }}</p>
          <p m="t-0 b-2">Тип запчасти: {{ props.row.type }}</p>
          <p m="t-0 b-2">Топливо: {{ props.row.fuel }}</p>
          <p m="t-0 b-2">Год: {{ props.row.year }}</p>
          <p m="t-0 b-2">Кузов: {{ props.row.body }}</p>
          <p m="t-0 b-2">Объем: {{ props.row.volume }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Модель" prop="name"/>
    <el-table-column label="Тип" prop="type"/>
    <el-table-column label="Год" prop="year"/>
    <slot/>
  </el-table>
</template>

<script lang="ts" setup>

// eslint-disable-next-line no-undef
const props = defineProps<{
  state: []
}>();
</script>

<style lang="scss" scoped>

</style>
