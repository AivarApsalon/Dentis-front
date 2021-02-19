<template>
  <div id="addRegistration">

    <h2>Add registration</h2>

    <div class="error-message" v-if="error">This time is already taken!</div>

    <div class="form-row">
      <label>
        Select a date
      </label>
      <div>
        <Datepicker v-model="date" format="yyyy-MM-dd"></Datepicker>
      </div>
    </div>

    <div class="form-row">
      <label>Select time</label>
      <select v-model="time">
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
      </select>
    </div>

    <div class="form-row">
      <label>First name</label>
      <input type="text" v-model="firstName">
    </div>

    <div class="form-row">
      <label>Last name</label>
      <input type="text" v-model="lastName">
    </div>

    <div class="form-row">
      <label>ID card nr</label>
      <input type="text" v-model="idCardNr">
    </div>

    <div class="form-row">
      <label>Select dentist</label>
      <select v-model.number="selectedDentist">
        <option v-for="dentist in dentistList" :value="dentist.id">{{ dentist.dentistName }}</option>
      </select>
    </div>

    <div class="submit_container">
      <button v-on:click="saveRegistration()">Add registration</button>
    </div>

  </div>
</template>

<script>

let getData = function () {
}

import Datepicker from 'vuejs-datepicker';

export default {
  components: {

    Datepicker

  },
  name: "AddRegistration",
  data: function () {
    return {
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      idCardNr: '',
      selectedDentist: '',
      registrationBody: {},

      dentistId: '',
      dentistList: [],
      error: false
    }

  },
  methods: {
    saveRegistration() {
      this.error=false
      this.registrationBody = {
        date: this.date.toISOString().substring(0, 10),
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
          .catch((error) => {
            this.error=true
          });
    },
    async getDentistList() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentistList = data;
        console.log(this.dentistList)
      } catch (error) {
      }
    }
  },
  mounted() {
    this.getDentistList();
  }
}

</script>


