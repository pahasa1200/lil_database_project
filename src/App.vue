<template>
  <div id="nav">
    <router-link to="/" >База</router-link> |
    <router-link to="/filter">Фильтр</router-link> |
    <router-link to="/add">Добавить</router-link> |
    <router-link to="/delete">Удалить</router-link>
  </div>
  <router-view v-loading="loading" />
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const loading = ref();

onBeforeMount(async () => {
  loading.value = true;
  await store.dispatch('updateParts');
  loading.value = false;
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 3px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
