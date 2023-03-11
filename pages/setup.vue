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
      Setup
    </h1>

    <p class="lead">
      Actualmente estoy desarrollando con el siguiente entorno.
    </p>

    <div class="d-flex flex-column gap-3">
      <div>
        <h2 class="mb-3">
          Coding:
        </h2>

        <ul class="border-start border-4 border-primary list-unstyled ps-3">
          <li>Code Editor · <span class="text-primary">VSCode</span></li>
          <li>Editor Theme · <span class="text-primary">HackTheBox / Halcyon</span></li>
          <li>Editor Font · <span class="text-primary">JetBrains Mono</span></li>
          <li>Terminal · <span class="text-primary">Windows Terminal</span></li>
          <li>Terminal Theme · <span class="text-primary">Blue Matrix</span></li>
          <li>S.O. · <span class="text-primary">Windows 11</span></li>
        </ul>
      </div>

      <div>
        <h2 class="mb-3">
          Desktop PC:
        </h2>

        <ul class="border-start border-4 border-primary list-unstyled ps-3">
          <li>CPU · <span class="text-primary">Intel Core i9 12900k</span></li>
          <li>MOBO · <span class="text-primary">Asus ROG STRIX Z690-F GAMING WIFI</span></li>
          <li>RAM · <span class="text-primary">32GB Team T-Force Delta RGB DDR5 6200mhz</span></li>
          <li>SSD · <span class="text-primary">1TB AORUS Gen4 7000s</span></li>
          <li>Tarro · <span class="text-primary">Cougar MX660 Mesh RGB</span></li>
          <li>WC · <span class="text-primary">Asus ROG STRIX LC II 360 ARGB</span></li>
        </ul>
      </div>

      <div>
        <h2 class="mb-3">
          Periféricos:
        </h2>

        <ul class="border-start border-4 border-primary list-unstyled ps-3">
          <li>Monitor · <span class="text-primary">Ozone DSP27 IPS</span></li>
          <li>Keyboard · <span class="text-primary">Razer Huntsman Elite</span></li>
          <li>Mouse · <span class="text-primary">Razer Naga Pro</span></li>
          <li>Headsets · <span class="text-primary">Razer Nari Ultimate</span></li>
          <li>Webcam · <span class="text-primary">Razer Kiyo Pro</span></li>
          <li>Mousepad · <span class="text-primary">Razer Gigantus v2 XXL</span></li>
          <li>Silla · <span class="text-primary">Cougar Armor One Skyblue</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
