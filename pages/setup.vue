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

    <p class="lead">
      Actualmente estoy desarrollando con el siguiente entorno.
    </p>

    <div class="d-flex flex-column gap-3">
      <div>
        <h2 class="mb-3">
          Desktop PC:
        </h2>

        <ul class="border-start border-4 border-warning list-unstyled ps-3">
          <li>CPU · <span class="text-warning">Intel Core i9 12900k</span></li>
          <li>MOBO · <span class="text-warning">Asus ROG STRIX Z690-F GAMING WIFI</span></li>
          <li>RAM · <span class="text-warning">32GB Team T-Force Delta RGB DDR5 6200mhz</span></li>
          <li>SSD · <span class="text-warning">1TB AORUS Gen4 7000s</span></li>
          <li>Tarro · <span class="text-warning">Cougar MX660 Mesh RGB</span></li>
          <li>WC · <span class="text-warning">Asus ROG STRIX LC II 360 ARGB</span></li>
        </ul>
      </div>

      <div>
        <h2 class="mb-3">
          Periféricos:
        </h2>

        <ul class="border-start border-4 border-warning list-unstyled ps-3">
          <li>Monitor · <span class="text-warning">Ozone DSP27 IPS</span></li>
          <li>Keyboard · <span class="text-warning">Razer Huntsman Elite</span></li>
          <li>Mouse · <span class="text-warning">Razer Naga Pro</span></li>
          <li>Headsets · <span class="text-warning">Razer Nari Ultimate</span></li>
          <li>Webcam · <span class="text-warning">Razer Kiyo Pro</span></li>
          <li>Mousepad · <span class="text-warning">Razer Gigantus v2 XXL</span></li>
          <li>Silla · <span class="text-warning">Cougar Armor One Skyblue</span></li>
        </ul>
      </div>

      <div>
        <h2 class="mb-3">
          Software:
        </h2>

        <ul class="border-start border-4 border-warning list-unstyled ps-3">
          <li>S.O. · <span class="text-warning">Windows 11</span></li>
          <li>Code Editor · <span class="text-warning">VSCode</span></li>
          <li>Editor Theme · <span class="text-warning">HackTheBox / Halcyon</span></li>
          <li>Editor Font · <span class="text-warning">JetBrains Mono</span></li>
          <li>Terminal · <span class="text-warning">Windows Terminal</span></li>
          <li>Terminal Theme · <span class="text-warning">Blue Matrix</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
