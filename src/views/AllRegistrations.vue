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
        <th> Action 1</th>
        <th> Action 2</th>
      </tr>
      <tr v-for="registration in registrations">
        <td>{{ registration.id }}</td>
        <td>{{ registration.date }}</td>
        <td>{{ registration.time }}</td>
        <td>{{ registration.firstName }}</td>
        <td>{{ registration.lastName }}</td>
        <td>{{ registration.idCardNr }}</td>
        <td>{{ registration.dentistName }}</td>
        <div class="link">
          <router-link :to="{name: 'ChangeRegistration', params: {id: registration.id }}"> Change</router-link>
        </div>
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
        await this.$confirm("Are you sure?");
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
