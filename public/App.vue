<template>
  <div class="wrapper">
    <div
      v-for="item in siteList"
      :key="item.name"
      class="display"
      :data-href="item.url"
      :data-content="item.name"
      @click="defaultSite"
    ></div>
    <div class="display" data-content="others"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteInfo: {
        iocview: "https://iocview.ypcloud.com",
        smartscreen: "https://smartscreen.tv",
        jujue: "https://jujue.app"
      }
    };
  },
  computed: {
    siteList: function() {
      return Object.keys(this.siteInfo).map(key => ({
        name: key,
        url: this.siteInfo[key]
      }));
    }
  },
  methods: {
    defaultSite: function(event) {
      if (process) return;

      const { dataset } = event.target;
      const { href } = dataset;
    },

    customSite: function(event) {
      if (process) return;
      // TODO
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 15px;
  grid-auto-rows: 150px;
  top: 33%;
  place-items: center;
  margin: 0 auto;
  width: 50%;
  padding: 150px;
}

.display {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  background-color: white;
  font: 900 1em SourceSansPro, sans-serif;
  color: rgba(0, 0, 0, 0.95);
  text-align: center;
  line-height: 150px;
  text-overflow: ellipsis;
}
.display::after {
  content: attr(data-content);
}
</style>