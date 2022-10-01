<template>
  <el-table :data="state" style="width: 100%" stripe>
    <el-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">
            <strong>Модель:</strong>
            {{ props.row.name }}
          </p>
          <p m="t-0 b-2">
            <strong>Тип запчасти:</strong>
            {{ props.row.type }}
          </p>
          <p m="t-0 b-2">
            <strong>Топливо:</strong>
            {{ props.row.fuel }}
          </p>
          <p m="t-0 b-2">
            <strong>Год:</strong>
            {{ props.row.year }}
          </p>
          <p m="t-0 b-2">
            <strong>Кузов:</strong>
            {{ props.row.body }}
          </p>
          <p m="t-0 b-2">
            <strong>Объем:</strong>
            {{ props.row.volume }}
          </p>
          <p m="t-0 b-2">
            <strong>Дополнительная информация:</strong>
            {{ props.row.additionalInfo }}
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
  state: []
}>();
</script>

<style lang="scss" scoped>

</style>
