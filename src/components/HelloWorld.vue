<template>
  <div class="hello">
<h1>home</h1>
    <!--<h3>v-bind</h3>-->
    <!--<input-->
            <!--v-bind:value="something"-->
            <!--v-on:input="something = $event.target.value"-->
    <!--&gt;-->

    <!--{{something}}-->
    <!--<hr>-->
    <!--<h3>v-Model</h3>-->
    <!--<input v-model="something">-->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

    data(){
      return{
          something:''
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
