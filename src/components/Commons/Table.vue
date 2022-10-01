<template>
  <el-table :data="state" style="width: 100%" stripe>
    <el-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p v-for="(value,  key, i) in props.row" :key="value._id" m="t-0 b-2">
            <strong>{{ columns[i] }}:</strong>
            {{ value }}
          </p>
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
defineProps<{
  state: [],
  columns: []
}>();
</script>

<style lang="scss" scoped>

</style>
