<template>
  <div class="relative">
    <cities/>
    <ul class="lg:flex lg:flex-grow lg:justify-start lg:flex-no-shrink lg:items-center p-0">
      <nuxt-link
        :to="{ path: '/'}"
        tag="li"
        class="block px-1 mx-2 border-b border-grey-light py-1 hover:border-black"
      >
        <a>INDEX</a>
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'city-sales', params: { city: currentCity.alias }}"
        tag="li"
        class="block px-1 mx-2 border-b border-grey-light py-1 hover:border-black"
      >
        <a>Sales</a>
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'city-shops', params: { city: currentCity.alias }}"
        class="block px-1 mx-2 border-b border-grey-light py-1 hover:border-black"
        tag="li">
        <a>SHOPS</a>
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
import cities from './cities.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cities
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      cities: 'cities/cities',
      currentCity: 'cities/city'
    })
  }
}
</script>
