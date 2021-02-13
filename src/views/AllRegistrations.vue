<template>
  <div class="registrations">

    <table border="table1">
      <tr>
        <th>Reg.ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Id Card Nr</th>
        <th>Dentist Name</th>

      </tr>
      <tr v-for="registration in registrations">
        <td>{{ registration.id }}</td>
        <td>{{ registration.date }}</td>
        <td>{{ registration.time }}</td>
        <td>{{ registration.firstName }}</td>
        <td>{{ registration.lastName }}</td>
        <td>{{ registration.idCardNr }}</td>
        <td>{{ registration.dentistName }}</td>
        <td>
          <button @click="deleteRegistration(registration.id)">Delete</button>
        </td>
      </tr>

    </table>
  </div>

</template>

<script>
let getData;
export default {
  name: 'AllRegistrations',
  components: {},
  data: function () {
    return {
      registrations: []
    }
  },
  methods: {
    getData() {
      this.$http.get('/dentist/registrations')
          .then(({data}) => this.registrations = data)
          .catch(response => console.log(response))

    },
    deleteRegistration(registrationId) {
      console.log(registrationId);
      this.$http.delete(`/dentist/delete-registration/${registrationId}`)
          .then(() => {
            this.getData()

          })
    }

  },
  mounted() {
    this.getData();
  }
}
</script>
