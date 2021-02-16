<template>
  <div class="input">

    <p class="addRegistration"> Add Registration </p>

    <div>Date <input v-model="date" placeholder="Date"></div>
    <div>Time <input v-model="time" placeholder="Time"></div>
    <div>First Name <input v-model="firstName" placeholder="First Name"></div>
    <div>Last Name <input v-model="lastName" placeholder="Last Name"></div>
    <div>ID Card Nr <input v-model="idCardNr" placeholder="Id Card Nr"></div>

    <timeselector :value="time2"></timeselector>

    <div>Select dentist
      <select v-model="selectedDentist">
        <option value="1">Kask</option>
        <option value="2">Kuusk</option>
        <option value="3">Palm</option>
        <option value="4">Pihl</option>
      </select>
    </div>

    <button v-on:click="saveRegistration()">Add Registration</button>

  </div>
</template>

<script>

let getData = function () {
}
import Timeselector from 'vue-timeselector';

export default {
  components: {
    Timeselector
  },

  name: "AddRegistration",
  data: function () {
    return {
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      idCardNr: '',
      selectedDentist: null,
      registrationBody: {},
      time2: new Date()
    }

  },
  methods: {
    saveRegistration() {
      this.registrationBody = {
        date: this.date,
        time: this.time,
        firstName: this.firstName,
        lastName: this.lastName,
        idCardNr: this.idCardNr,
        dentistId: this.selectedDentist
      }
      this.$http.post('/dentist/add-registration', this.registrationBody)
          .then((response) => {
            this.date = '';
            this.time = '';
            this.firstName = '';
            this.lastName = '';
            this.idCardNr = '';
            this.selectedDentist = '';
            this.registrationBody = null;
          })
          .then((response) => {
            (this.$alert("Registration added!"))
          })
    },
  },
}

</script>


