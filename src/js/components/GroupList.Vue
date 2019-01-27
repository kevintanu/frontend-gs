<template>
  <div class="card">
    <h5 class="card-header">Groups</h5>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(g,i) in groups" v-bind:key="i">
            <td>{{g.name}}</td>
            <td>view</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getGroups } from "../services/GroupService";
export default {
  data() {
    return {
      groups: []
    };
  },
  mounted() {
    getGroups();
  }
};
</script>

<style>
</style>
