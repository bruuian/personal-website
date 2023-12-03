<template>
  <div id="app">
    <Header v-if="$route.meta.navbar"></Header>
    <main>
      <router-view />
    </main>
    <Footer v-if="$route.meta.footer"></Footer>
  </div>
</template>
<script>
import Header from "./components/HeaderComp.vue";
import Footer from "./components/FooterComp.vue";
export default {
  components: {
    Header,
    Footer
    }
};
</script>
