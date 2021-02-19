<template>
  <div class="input">
    <p> Get registration </p>
    <div>Registration id <input v-model="registrationId" placeholder="Registration Id"></div>
    <button v-on:click="getData()">Get Registration</button>
    <div>Registration Id: {{ registration.id }}</div>
    <div>Date: {{ registration.date }}</div>
    <div>Time: {{ registration.time }}</div>
    <div>First name: {{ registration.firstName }}</div>
    <div>Last name: {{ registration.lastName }}</div>
    <div>Id card nr: {{ registration.idCardNr }}</div>
    <div>Dentist Id: {{ registration.dentistId }}</div>

    <button v-on:click="confirmDelete()">Delete registration</button>

  </div>
</template>

<script>
let getData = function () {
  this.$http.get('/dentist/registration-by-id/' + this.registrationId)
      .then(response => this.registration = response.data)
      .catch(response => console.log(response))

}
let confirmDelete = function () {
  this.$confirm("Delete Registration?")
      .then(() => {
        this.$http.delete('/dentist/delete-registration/' + this.registrationId);
        this.registration = {}
      });

}


export default {
  name: 'RegistrationById',
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
}
</script>
