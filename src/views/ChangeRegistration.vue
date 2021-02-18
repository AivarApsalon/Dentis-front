<template>
  <div id="changeRegistration">

    <h2> Change Registration </h2>

    <div class="form-row">
      <label>Select a date</label>
      <div>
        <Datepicker v-model="registration.date" format="yyyy-MM-dd"></Datepicker>
      </div>
    </div>

    <div class="form-row">
      <label>Select Time</label>
      <select v-model="registration.time">
        <option value="09:00:00">09:00</option>
        <option value="10:00:00">10:00</option>
        <option value="11:00:00">11:00</option>
        <option value="12:00:00">12:00</option>
        <option value="13:00:00">13:00</option>
        <option value="14:00:00">14:00</option>
        <option value="15:00:00">15:00</option>
        <option value="16:00:00">16:00</option>
      </select>
    </div>

    <div class="form-row">
      <label>First Name</label>
      <input type="text" v-model="registration.firstName" placeholder="First Name">
    </div>

    <div class="form-row">
      <label>Last Name</label>
      <input type="text" v-model="registration.lastName" placeholder="Last Name">
    </div>

    <div class="form-row">
      <label>ID Card Nr</label>
      <input type="text" v-model="registration.idCardNr" placeholder="Id Card Nr">
    </div>

    <div class="form-row">
      <label>Select dentist</label>
      <select v-model="registration.dentistId">
        <option v-for="dentist in dentistList" :value="dentist.id">{{ dentist.dentistName }}</option>
      </select>
    </div>

    <div class="submit_container">
      <button @click="changeRegistration()">Change Registration</button>
    </div>

  </div>

</template>

<script>

import Timeselector from 'vue-timeselector';
import TimePicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker';
import router from "@/router";

export default {
  components: {
    Timeselector,
    TimePicker,
    Datepicker
  },
  name: "ChangeRegistration",
  data: function () {
    return {
      registration: {},
      dentistList: []
    }
  },
  methods: {
    getRegistrationById(id) {
      this.$http.get('dentist/registration-by-id/' + id)
          .then(response => {
            this.registration = response.data
          })
    },

    changeRegistration() {
      this.$confirm("Change Registration?")
          .then(async () => {
            let id = this.$route.params.id;
            await this.$http.put('dentist/change-registration/' + id, this.registration);
            this.registration = {}
            await router.push({ path: '/registrations' });
          })
    },

    async getDentistList() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentistList = data;
        console.log(this.dentistList)
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getRegistrationById(this.$route.params.id);
    this.getDentistList();
  }
}

</script>


