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
        <q-img src="src\assets\yilsonu_indirim_banner_tr.webp"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-img src="src\assets\Ekran görüntüsü 2023-12-12 170854.jpg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-img src="src\assets\Ekran görüntüsü 2023-12-12 173657.jpg"></q-img>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-img
          src="src\assets\site_yenileniyor2023_alternatif2_TRre-10.webp"
          style="height: 500px"
          :ratio="1"
        />
      </div>

      <div class="col-4">
        <q-img src="src\assets\kamp.webp" style="height: 500px" :ratio="1" />
      </div>

      <div class="col-4">
        <q-img src="src\assets\erkek.webp" style="height: 500px" :ratio="1" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
