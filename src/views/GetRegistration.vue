<template>
  <div class="input">
    <p> Get Registration </p>
    <div>Registration Id <input v-model="registrationId" placeholder="Registration Id"></div>
    <button v-on:click="getData()">Get Registration</button>
    <div>Registration Id: {{registration.id}} </div>
    <div>Date: {{registration.date}} </div>
    <div>Time: {{registration.time}} </div>
    <div>First Name: {{registration.firstName}} </div>
    <div>Last Name: {{registration.lastName}} </div>
    <div>Id Card Nr: {{registration.idCardNr}} </div>
    <div>Dentist Id: {{registration.dentistId}} </div>

<button v-on:click="confirmDelete()">Delete Registration</button>

  </div>
</template>

<script>
let getData = function () {
  this.$http.get('/dentist/registration-by-id/' + this.registrationId)
      .then(response => this.registration = response.data)
      .catch(response => console.log(response))

}
let confirmDelete =function (){
  // this.$alert("Hello Vue Simple Alert.");
  this.$confirm("Are you sure?")
      .then(() => {
        this.$http.delete('/dentist/delete-registration/' + this.registrationId);
        this.registration = {}
  });

}


export default {
  name: 'RegistrationById',
  // components: {},
  data: function () {
    return {
      registration: {},
      registrationId: ''
    }
  },
  methods: {
    getData: getData,
    confirmDelete: confirmDelete
  },
  // mounted() {
  //   this.getData();
  // }
}
</script>
