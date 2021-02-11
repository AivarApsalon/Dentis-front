<template>
  <div class="input">
    <p> Delete Registration </p>
    <div> Registration Id <input v-model="registrationId" placeholder="Registration Id"></div>

    <button v-on:click="saveInHtml()">Delete Registration</button>

  </div>
</template>

<script>

let getData = function() {
}

let saveInJs = function () {
  this.$http.delete('/dentist/delete-registration/' + this.registrationId)
      .then(() => this.getData)

}
export default {
  name: "DeleteRegistration",
  data: function () {
    return {
      registrationId :''
    }
  },
  methods: {
    saveInHtml: saveInJs,
    getData: getData,

  },
  //
  // mounted() {
  //   this.getData()
  // }
}

</script>



