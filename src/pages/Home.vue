<script setup>
import AppLayout from '@/components/AppLayout.vue';
import CocktailThumb from '@/components/CocktailThumb.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

const getCocktails = () => {
  rootStore.getCocktails(rootStore.ingredient);
}

const removeIngredient = () => {
  rootStore.setIngredient(null);
}
</script>

<template>
  <AppLayout img-url="/img/cocktail.jpg"
             :back-func="removeIngredient"
             :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!rootStore.ingredient || !cocktails" class="info">
        <h2 class="title">
          Choose your drink
        </h2>
        <span class="line"></span>
        <div class="select-wrapper">
          <el-select
              v-model="ingredient"
              placeholder="Choose main ingredient"
              size="large"
              filterable
              allow-create
              class="select"
              @change="getCocktails"
          >
            <el-option
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <p class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
        </p>
        <img src="/img/cocktails.png" alt="cocktails" class="img">
      </div>
      <div v-else class="info">
        <h2 class="title">
          COCKTAILS WITH {{ ingredient }}
        </h2>
        <span class="line"></span>
        <div class="cocktails">
          <CocktailThumb
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
          :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped lang="scss">
@use '@/assets/styles/vars' as *;
@import '@/assets/styles/main';

.select-wrapper {
  margin-bottom: 50px;
  max-width: 220px;
  width: 100%;
}

.select {
  background-color: $bg;
}

.text {
  margin-bottom: 60px;
  max-width: 516px;
  line-height: 2.25;
  letter-spacing: 0.1em;
  text-align: center;
  color: $textMuted;
}

.cocktails {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 41px;
  column-gap: 20px;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: black transparent;
}
</style>
