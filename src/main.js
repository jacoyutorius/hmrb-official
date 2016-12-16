require("bulma")
import Vue from 'vue'

new Vue({
  el: '#app',
  template: "<div id='app'>" +
      "<contents/>" +
      "<events/>" +
    "</div>",
  components: {
  	"contents" : Vue.extend(require("./Contents.vue")),
    "events" : Vue.extend(require("./Events.vue"))
  }
})