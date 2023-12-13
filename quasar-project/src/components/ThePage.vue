<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      navigation
      padding
      arrows
      height="750px"
      class="bg-grey-9 shadow-2 rounded-borders"
      style="background-color: white"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\site_yenileniyor2023_alternatif2_TRre-10.webp"
            style="height: 500px"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\erkek.webp"
            style="height: 500px"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\kamp.webp"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\KADIN.webp"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\ÇOCUK.webp"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\BEBEK.webp"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\fitness.webp"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="src\assets\aksesuar.webp"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
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
