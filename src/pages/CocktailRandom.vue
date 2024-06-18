<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import AppLayout from '@/components/AppLayout.vue';
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from '@/constants/api.js';

const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }

  return ingredients;
});

const getCocktail = async () => {
  const data = await axios.get(COCKTAIL_RANDOM);
  cocktail.value = data?.data?.drinks[0];
};

getCocktail();
</script>

<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :img-url="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <h2 class="title">
            {{ cocktail.strDrink }}
          </h2>
          <span class="line"></span>
          <div class="slider">
            <swiper
                class="swiper"
                :slides-per-view="3"
                :space-between="50"
            >
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img class="img" :src="`${INGREDIENT_PIC}${ingredient}-Small.png`"/>
                <p class="name">{{ ingredient }}</p>
              </swiper-slide>
            </swiper>
          </div>
          <p class="description">
            {{ cocktail.strInstructions }}
          </p>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/vars' as *;
@import '@/assets/styles/main';

.slider {
  padding-top: 18px;
  margin-bottom: 50px;
  text-align: center;
}

.swiper {
  max-width: 586px;
}

.img {
  margin-bottom: 20px;
}
</style>
