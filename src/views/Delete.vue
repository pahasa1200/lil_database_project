<template>
  <div v-loading="loading" class="delete">
    <h1>Удаление запчасти</h1>
    <ResetButton v-if="Object.keys(store.state.filters).length > 0" />
    <Table :state="store.state.parts">
      <el-table-column label="" >
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick(scope.row._id)">
            Удалить
          </el-button>
        </template>
      </el-table-column>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import Table from '../components/Commons/Table.vue';
import ResetButton from '../components/Commons/ResetFilterButton.vue';

const store = useStore();
const loading = ref();

const handleClick = async (id: number) => {
  loading.value = true;
  await store.dispatch('deletePart', id);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 10px;
}
.reset_filters {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
