<script setup>
</script>

<template>
  <div class="max-w-3xl flex justify-center flex-col">
    <h1 class="text-lime-300 text-center font-bold text-2xl md:text-5xl mb-10 md:mb-20">Hola! <span
        class="wave">👋</span> Soy
      Sergio Azócar,
      <br>un <span class="tagline">Vue Frontend Developer</span>
      en el
      multiverso...
    </h1>
    <fa :icon="['fab', 'vuejs']" class="fa-beat-fade block text-6xl md:text-9xl text-lime-300" />
  </div>
</template>

<style scoped>
.wave {
  -webkit-animation-name: hi-animation;
  animation-name: hi-animation;
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes hi-animation {

  0%,
  7% {
    transform: rotateZ(0);
  }

  15% {
    transform: rotateZ(-15deg);
  }

  20% {
    transform: rotateZ(10deg);
  }

  25% {
    transform: rotateZ(-10deg);
  }

  30% {
    transform: rotateZ(6deg);
  }

  35% {
    transform: rotateZ(-4deg);
  }

  40%,
  100% {
    transform: rotateZ(0);
  }
}

.tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>