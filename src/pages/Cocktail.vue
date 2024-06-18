<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import axios from 'axios';
import AppLayout from '@/components/AppLayout.vue';
import { COCKTAIL_BY_ID } from '@/constants/api.js';

const route = useRoute();

const cocktail = ref(null);
const cocktailId = computed(() => route.path.split('/').pop());

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }

  return ingredients;
});

const getCocktail = async () => {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
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
          <ul class="list">
            <li class="list-item" v-for="(item, key) in ingredients"
                :key="key">
              {{ item.name }}
              <template v-if="item.measure">
                |
                {{ item.measure }}
              </template>
            </li>
          </ul>
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

.list {
  margin-bottom: 80px;
  list-style-type: none;

  &-item {
    background: url("/img/item.svg") no-repeat;
    padding-left: 40px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
