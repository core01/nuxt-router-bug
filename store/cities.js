export const state = () => ({
  city: {
    id: 1,
    title: 'Ukg City',
    alias: 'ust-kamenogorsk',
    lat: '49.96427057155009',
    lon: '82.59572865600605'
  },
  cities: []
})

export const getters = {
  city: state => {
    return state.city
  },
  cities: state => {
    return state.cities
  }
}
export const mutations = {
  SET_CITY(state, city) {
    state.city = city
  },
  SET_CITIES(state, cities) {
    state.cities = cities
  }
}

export const actions = {
  async setCity(context, city) {
    context.commit('SET_CITY', city)
  },
  async getCities(context) {
    setTimeout(function() {
      let cities = [
        {
          id: 1,
          title: 'Ukg City',
          alias: 'ust-kamenogorsk',
          lat: '49.96427057155009',
          lon: '82.59572865600605'
        },
        {
          id: 2,
          title: 'Almaty',
          alias: 'almaty',
          lat: '49.96427057155009',
          lon: '82.59572865600605'
        },
        {
          id: 3,
          title: 'Astana',
          alias: 'astana',
          lat: '49.96427057155009',
          lon: '82.59572865600605'
        }
      ]
      context.commit('SET_CITIES', cities)
    }, 3000)
  }
}
