<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <section class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="card" aria-id="contentIdForA11y3">
            <div
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
            >
              <p class="card-header-title">
                <template v-if="!loading">404 NOT FOUND</template>
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
              </p>
            </div>
            <div class="card-content">
              <div class="content">
                <template v-if="!loading">
                  lol no
                </template>
                <b-skeleton
                  size="is-large"
                  :active="loading"
                  :count="2"
                ></b-skeleton>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item">
                <router-link :to="{ path: '/' }" v-if="!loading"
                  >Home</router-link
                >
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
              </a>
              <a class="card-footer-item">
                <router-link :to="{ path: '/creations' }" v-if="!loading"
                  >Creations</router-link
                >
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
              </a>
              <a class="card-footer-item">
                <router-link :to="{ path: '/about' }" v-if="!loading"
                  >About</router-link
                >
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setInterval(() => {
      this.loading = !this.loading;
    }, 3 * 1000);
  }
};
</script>
