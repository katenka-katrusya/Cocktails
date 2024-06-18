<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div class="pic" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
    </RouterLink>
    <p class="name">{{ cocktail.strDrink}}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/vars' as *;
@import '@/assets/styles/main';

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 76px) / 3);

  @media (max-width: 1070px) {
    width: calc((100% - 76px) / 2);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
}

.pic {
  margin-bottom: 15px;
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  letter-spacing: 0.1em;
}
</style>
