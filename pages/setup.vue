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
  <section>
    <h1 class="text-primary mb-3">
      Equipo
    </h1>

    <p class="text-slate-200 mb-8 text-xl md:text-2xl">
      Actualmente estoy desarrollando con el siguiente entorno.
    </p>

    <h2 class="text-lime-300 text-2xl font-bold mb-3">
      Desktop PC:
    </h2>

    <ul class="text-slate-200 text-xl mb-10 border-l-4 border-yellow-300 pl-3">
      <li>CPU · <span class="text-yellow-300">Intel Core i9 12900k</span></li>
      <li>MOBO · <span class="text-yellow-300">Asus ROG STRIX Z690-F GAMING WIFI</span></li>
      <li>RAM · <span class="text-yellow-300">32GB Team T-Force Delta RGB DDR5 6200mhz</span></li>
      <li>SSD · <span class="text-yellow-300">1TB AORUS Gen4 7000s</span></li>
      <li>Tarro · <span class="text-yellow-300">Cougar MX660 Mesh RGB</span></li>
      <li>WC · <span class="text-yellow-300">Asus ROG STRIX LC II 360 ARGB</span></li>
    </ul>

    <h2 class="text-lime-300 text-2xl font-bold mb-3">
      Periféricos:
    </h2>

    <ul class="text-slate-200 text-xl mb-10 border-l-4 border-yellow-300 pl-3">
      <li>Monitor · <span class="text-yellow-300">Ozone DSP27 IPS</span></li>
      <li>Keyboard · <span class="text-yellow-300">Razer Huntsman Elite</span></li>
      <li>Mouse · <span class="text-yellow-300">Razer Naga Pro</span></li>
      <li>Headsets · <span class="text-yellow-300">Razer Nari Ultimate</span></li>
      <li>Webcam · <span class="text-yellow-300">Razer Kiyo Pro</span></li>
      <li>Mousepad · <span class="text-yellow-300">Razer Gigantus v2 XXL</span></li>
      <li>Silla · <span class="text-yellow-300">Cougar Armor One Skyblue</span></li>
    </ul>

    <h2 class="text-lime-300 text-2xl font-bold mb-3">
      Software:
    </h2>

    <ul class="text-slate-200 text-xl border-l-4 border-yellow-300 pl-3">
      <li>S.O. · <span class="text-yellow-300">Windows 11</span></li>
      <li>Code Editor · <span class="text-yellow-300">VSCode</span></li>
      <li>Editor Theme · <span class="text-yellow-300">Halcyon</span></li>
      <li>Editor Font · <span class="text-yellow-300">JetBrains Mono</span></li>
      <li>Terminal · <span class="text-yellow-300">Windows Terminal</span></li>
      <li>Terminal Theme · <span class="text-yellow-300">Blue Matrix</span></li>
    </ul>
  </section>
</template>
