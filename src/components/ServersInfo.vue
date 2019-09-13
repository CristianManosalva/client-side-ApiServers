<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:{
      items:{
          type: Array,
          default: function(){
              return [
                  {
                      Address: "serversIp",
                      SslGrade: "A+",
                      Country: "Us",
                      Owner: "Amazon Inc"
                  }
              ]
          }
      }
  }
};
</script>

<style>
</style>