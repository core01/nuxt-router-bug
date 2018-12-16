<template>
  <div>
    <h1>CITY SHOPS INDEX</h1>
    <h2>URL SHOULD BE {{ currentCity.alias }}/shops</h2>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cities: 'cities/cities',
      currentCity: 'cities/city'
    })
  }
}
</script>
