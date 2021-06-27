<template>
  <section class="section is-large">
    <h1 class="title">縣市特色書店</h1>

    <hr />
    <div class="row columns is-multiline">
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

    <hr />
    <div class="row columns is-multiline">
      <div class="column is-4" v-for="item in filterStores" :key="item">
        <div class="card large">
          <div class="card-image">
            <figure class="image is-16by9">
              <img :src="item.representImage" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p class="title is-4 no-padding">{{ item.name }}</p>
                <p>
                  <span class="title is-6"
                    ><a :href="item.facebook">
                      {{ "facebook" }}
                    </a></span
                  >
                </p>

                <p class="subtitle is-6">{{ item.address }}</p>
              </div>
            </div>
             <div class="content">
              {{ item.intro }}
              <div class="background-icon">
                <span class="icon-twitter"></span>
              </div>
            </div>
            <div class="content">
              {{ item.openTime }}
              <div class="background-icon">
                <span class="icon-twitter"></span>
              </div>
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
.column {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
