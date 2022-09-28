<script lang="ts" setup>
  const description = ref('Vue Frontend Developer')

  useHead({
    meta: [{
      name: 'description',
      content: description.value
    }]
  })
</script>

<template>
  <section class="home-container d-flex align-items-center">
    <div class="text-container mx-auto">
      <h1 class="text-center">
        Hola! <span class="wave">👋</span> Soy
        Sergio Azócar, un <span class="tagline">Vue Frontend Developer</span>
        en el
        multiverso...
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
  max-height: calc(100vh - 196px);
}
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

.text-container {
  max-width: 600px;
}
</style>
