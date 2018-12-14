<template>
  <div>
    <h1>city sales index</h1>
    <h2>URL SHOULD BE {{ currentCity.alias }}/sales</h2>
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
