<template>
  <div id="dentistRegistrations">

    <h2> Get registrations by dentist name </h2>

    <div class="form">
      <div class="form-row">
        <label>Select dentist</label>
        <select v-model="dentistId">
          <option v-for="dentist in dentistList" :value="dentist.id">
            {{ dentist.dentistName }}
          </option>
        </select>
      </div>

      <div class="submit_container">
        <button @click="getData()">Get registrations</button>
      </div>
    </div>

    <table v-if="registrations.length">
      <thead>
      <th>Reg.ID</th>
      <th>Date</th>
      <th>Time</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Id card nr</th>
      <th>Dentist name</th>
      </thead>
      <tr v-for="registration in registrations">
        <td>{{ registration.id }}</td>
        <td>{{ registration.date }}</td>
        <td>{{ registration.time }}</td>
        <td>{{ registration.firstName }}</td>
        <td>{{ registration.lastName }}</td>
        <td>{{ registration.idCardNr }}</td>
        <td>{{ registration.dentistName }}</td>
      </tr>
    </table>

    <div v-if="showList && !registrations.length">
      No registrations to show!
    </div>

  </div>

</template>

<script>

export default {
  name: 'RegistrationsByDentistId',
  components: {},
  data: function () {
    return {
      registrations: [],
      dentistId: '',
      dentistList: [],
      showList: false
    }
  },
  methods: {
    getData() {
      this.$http.get('/dentist/registrations-by-dentist-id/' + this.dentistId)
          .then(response => {
            this.registrations = response.data
            this.showList = true;
          });
    },
    async getDentistList() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentistList = data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getDentistList();
  }
}
</script>

