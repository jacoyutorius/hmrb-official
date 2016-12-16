<template>
  <section id="events" class="hero">
	  <div class="hero-body">
	    <div class="container">
				<h1 class="title">
					Schedule
				</h1>
        <div class="columns">
						<div class="column">
							<div class="tile is-parent is-vertical">
								<article class="media" v-for="event in events">
									<figure class="media-left">
										<p class="image is-64x64">
											<img :src="event.banner"> 
										</p>
									</figure>
									<div class="media-content">
										<div class="content">
											<p>
												<a :href="event.public_url"><strong>{{event.title}}</strong></a> <small> {{event["starts_at"]}} </small>
												<br>
												{{event['description'].slice(0, 180) + "..."}}
											</p>
										</div>
										<nav class="level">
											<div class="level-left">
												<a class="level-item">
													<span class="icon is-small"><i class="fa fa-reply"></i></span>
												</a>
												<a class="level-item">
													<span class="icon is-small"><i class="fa fa-retweet"></i></span>
												</a>
												<a class="level-item">
													<span class="icon is-small"><i class="fa fa-heart"></i></span>
												</a>
											</div>
										</nav>
									</div>
								</article>
							</div>
						</div>
					</div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'events',
  data () {
    return {
      events: []
    }
  },
  created: function(){
    var Hmrb = require("./doorkeeper");
		var currentMonth = (new Date().getFullYear()).toString() + (new Date().getMonth() + 1).toString() + "01";
    Hmrb.getEvents("<ACCESS_TOKEN>", currentMonth, function(err,res){
      if(err){
        console.log(err);
      }
      else{
        this.events = res.body.map(function(row){
					return row.event;
				});
      }
    }.bind(this));
  }
}
</script>
<style scoped>

#events {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;
  background-color: rgb(245, 245, 245);*/
}
.hero-body{
	padding-top: 20px !important;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
	color: rgb(11,11,1);
}
</style>