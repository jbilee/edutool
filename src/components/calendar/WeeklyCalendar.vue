<script setup lang="ts">
import EventIcon from './EventIcon.vue';

</script>

<template>
  <table>
    <thead>
      <tr>
        <td>
          일
        </td>
        <td>
          월
        </td>
        <td>
          화
        </td>
        <td>
          수
        </td>
        <td>
          목
        </td>
        <td>
          금
        </td>
        <td>
          토
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td><EventIcon event-type="quiz" /></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <EventIcon event-type="homework" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;

  tbody tr {
    height: 80px;
  }

  tbody td {
    border-right: 1px dotted rgb(188, 188, 188);

    &:last-child {
      border: none;
    }
  }
}
</style>