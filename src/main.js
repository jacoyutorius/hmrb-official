require("bulma")
require("./sass/common.sass")
import Vue from 'vue'

new Vue({
  el: '#app',
  template: "<div id='app'>" +
      "<contents/>" +
      "<events/>" +
      "<footer/>" +
    "</div>",
  components: {
  	"contents" : Vue.extend(require("./Contents.vue")),
    "events" : Vue.extend(require("./Events.vue")),
    "footer": Vue.extend(require("./Footer.vue"))
  }
})