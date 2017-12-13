<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <div>this is local data:{{local}}</div>
    <div>this is remote data:{{remote}}</div>
    <nuxt-link class="button" to="/todo">
      About page
    </nuxt-link>
  </section>
</template>

<script>
export default {
   async asyncData({ app }) {
    const remote = await app.$axios.$get('https://mykrystal.com/cms/fetchSubjectList')
    return {
       remote 
    }
  },
  data(){
    return{
      local:'local'
    }
  }  
}
</script>


<style scoped>
.title
{
  margin: 50px 0;
}
</style>
