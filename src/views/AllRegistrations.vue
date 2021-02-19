<template>
  <div id="registrations">

    <table>
      <thead>
      <th>Reg.ID</th>
      <th>Date</th>
      <th>Time</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Id card nr</th>
      <th>Dentist name</th>
      <th></th>
      <th></th>
      </thead>
      <tr v-for="registration in registrations">
        <td>{{ registration.id }}</td>
        <td>{{ registration.date }}</td>
        <td>{{ registration.time }}</td>
        <td>{{ registration.firstName }}</td>
        <td>{{ registration.lastName }}</td>
        <td>{{ registration.idCardNr }}</td>
        <td>{{ registration.dentistName }}</td>
        <td>
          <router-link :to="{name: 'ChangeRegistration', params: {id: registration.id }}"> Change</router-link>
        </td>
        <td>
          <button @click="deleteRegistration(registration.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>

export default {
  name: 'AllRegistrations',
  components: {},
  data: function () {
    return {
      registrations: []
    }
  },
  methods: {
    async getData() {
      try {
        const {data} = await this.$http.get('/dentist/registrations');
        this.registrations = data;
      } catch (error) {
        console.log(error);
      }

    },
    async deleteRegistration(registrationId) {
      try {
        await this.$confirm("Delete registration?");
        await this.$http.delete(`/dentist/delete-registration/${registrationId}`);
        await this.getData()
      } catch (error) {
        console.log(error);
      }

    },

  },
  mounted() {
    this.getData();
  }

}
</script>

<style scoped>

</style>
