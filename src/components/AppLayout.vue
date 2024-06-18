<script setup>
import { useRoute, useRouter } from 'vue-router';
import { Back } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { ROUTERS_PATH } from '@/constants/index.js';

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  }
});

const route = useRoute(); // брать название стр, где находится юзер
const router = useRouter(); // для перехода на нужную страницу

const routeName = computed(() => route.name);

const goForCocktailRandom = () => {
  router.push(ROUTERS_PATH.COCKTAIL_RANDOM);

  if (routeName.value === ROUTERS_PATH.COCKTAIL_RANDOM) {
    router.go();
  }
};

const goBack = () => {
  props.backFunc ? props.backFunc() : router.go(-1);
}
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button class="btn-back" type="primary"
                   :icon="Back" circle
                   @click="goBack"
                   v-if="isBackButtonVisible">
        </el-button>
        <el-button class="btn" @click="goForCocktailRandom">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/vars' as *;
@import '@/assets/styles/main';

.root {
  display: flex;
  min-height: 100vh;
  background-color: $bg;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 32px 40px;
}

.btn {
  background-color: $accent;
  border-color: $accent;
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  color: $text;
  transition-property: border-color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  margin-left: auto;

  &:hover,
  &:active {
    background-color: darken($accent, 10%);
    border-color: darken($accent, 10%);
  }
}

.btns {
  display: flex;
  align-items: center;
  width: 100%;
}

.btn-back {
  background-color: transparent;
  border-color: $text;
  transition-property: border-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
    border-color: $accent;
    color: $accent;
  }
}
</style>
