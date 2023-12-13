<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      height="500px"
      animated
      control-color="black"
      navigation
      padding
      arrows
      class="col-8 text-white shadow-1 rounded-borders"
      style="background-color: white"
    >
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-img src="src/assets/yilsonu_indirim_banner_tr.webp"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-img src="src/assets/Ekran görüntüsü 2023-12-12 170854.jpg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-img src="src/assets/Ekran görüntüsü 2023-12-12 173657.jpg"></q-img>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0, // Initial slide index
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
