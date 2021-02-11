<template>
  <div class="input">
    <p> Add Registration </p>
    <div>Date <input v-model="dentist.date" placeholder="Date"></div>
    <div>Time <input v-model="dentist.time" placeholder="Time"></div>
    <div>First Name <input v-model="dentist.firstName" placeholder="First Name"></div>
    <div>Last Name <input v-model="dentist.lastName" placeholder="Last Name"></div>
    <div>ID Card Nr <input v-model="dentist.idCardNr" placeholder="Id Card Nr"></div>

    <div>Select dentist
    <select v-model="dentist.dentistId">
      <option value="1">Kask</option>
      <option value="2">Kuusk</option>
      <option value="3">Palm</option>
    </select>
    </div>
<!--    <div>Dentist selected: {{dentist.dentistName}}</div>-->

    <button v-on:click="saveInHtml()">Add Registration</button>

  </div>
</template>

<script>

let getData = function() {
}

let saveInJs = function () {
  this.$http.post('/dentist/add-registration', this.dentist)
      .then(() => this.getData)

}
export default {
  name: "AddRegistration",
  data: function () {
    return {
      dentist: {},

    }
  },
  methods: {
    saveInHtml: saveInJs,
    getData: getData
  },

  mounted() {
    this.getData()
  }
}

</script>


