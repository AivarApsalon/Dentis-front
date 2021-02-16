<template>
  <div class="dentistList">

    <table border="table1">
      <tr>
        <th>Id</th>
        <th>Dentist Name</th>

      </tr>
      <tr v-for="dentist in dentists">
        <td>{{ dentist.id }}</td>
        <td>{{ dentist.dentistName }}</td>

      </tr>
    </table>
  </div>

</template>

<script>

export default {
  name: 'DentistList',
  components: {},
  data: function () {
    return {
      dentists: []
    }
  },
  methods: {
    async getData() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentists = data;
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

