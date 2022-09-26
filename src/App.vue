<template>
  <div id="nav">
    <router-link to="/" >База</router-link> |
    <router-link to="/filter">Фильтр</router-link> |
    <router-link to="/add">Добавить</router-link> |
    <router-link to="/delete">Удалить</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onBeforeMount(async () => {
  await store.dispatch('updateParts');
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
