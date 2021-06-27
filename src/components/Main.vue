<template>
  <section class="section is-large">
    <h1 class="title">請選擇縣市</h1>

    <hr />
    <div class="columns is-multiline is-mobile">
      <div class="column">
        <div class="select">
          <select v-model="currCity" class="is-hovered">
            <option v-for="item in cityList" :key="item">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="select" v-if="currCity === '臺北市'">
          <select v-model="currDistrict" class="is-hovered">
            <option v-for="item in districtList" :key="item">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="columns is-multiline is-mobile">
      <div class="column">
        <div class="card" v-for="item in filterStores" :key="item">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="item.representImage"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                       :src="item.representImage"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{item.name}}</p>
                <p class="subtitle is-6">{{item.address}}</p>
              </div>
            </div>

            <div class="content">
             <p class="subtitle is-6"> {{item.name}}</p>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const currCity = computed({
      get () {
        return store.state.currCity
      },
      set (value) {
        store.commit('setCurrCity', value)
      }
    })

    const cityList = computed(() => store.getters.cityList)

    const districtList = computed(() => store.getters.districtList)

    const filterStores = computed(() => store.getters.filterStores)

    return {
      currCity,
      cityList,
      districtList,
      filterStores
    }
  }
}
</script>

<style lang="scss" scoped>
.section.is-large {
  padding: 3rem 6rem;
}
</style>
