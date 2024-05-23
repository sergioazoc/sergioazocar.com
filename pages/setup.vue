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
    <BaseTitle>
      Setup
    </BaseTitle>

    <p class="text-lg mb-5">
      Actualmente estoy desarrollando con el siguiente entorno.
    </p>

    <div class="flex flex-col gap-5">
      <div>
        <BaseTitle tag="h2">
          Coding:
        </BaseTitle>

        <ul class="border-s-4 border-vue-purple dark:border-vue-green ps-5 text-base">
          <li>Code Editor · <span class="text-vue-purple dark:text-vue-green font-semibold">VSCode</span></li>
          <li>Editor Theme · <span class="text-vue-purple dark:text-vue-green font-semibold">HackTheBox / Halcyon</span></li>
          <li>Editor Font · <span class="text-vue-purple dark:text-vue-green font-semibold">JetBrains Mono</span></li>
          <li>Terminal · <span class="text-vue-purple dark:text-vue-green font-semibold">Windows Terminal</span></li>
          <li>Terminal Theme · <span class="text-vue-purple dark:text-vue-green font-semibold">Blue Matrix</span></li>
          <li>S.O. · <span class="text-vue-purple dark:text-vue-green font-semibold">Windows 11</span></li>
        </ul>
      </div>

      <div>
        <BaseTitle tag="h2">
          Desktop PC:
        </BaseTitle>

        <ul class="border-s-4 border-vue-purple dark:border-vue-green ps-5 text-base">
          <li>CPU · <span class="text-vue-purple dark:text-vue-green font-semibold">Intel Core i9 12900k</span></li>
          <li>MOBO · <span class="text-vue-purple dark:text-vue-green font-semibold">Asus ROG STRIX Z690-F GAMING WIFI</span></li>
          <li>RAM · <span class="text-vue-purple dark:text-vue-green font-semibold">32GB Team T-Force Delta RGB DDR5 6200mhz</span></li>
          <li>SSD · <span class="text-vue-purple dark:text-vue-green font-semibold">1TB AORUS Gen4 7000s</span></li>
          <li>Tarro · <span class="text-vue-purple dark:text-vue-green font-semibold">Cougar MX660 Mesh RGB</span></li>
          <li>WC · <span class="text-vue-purple dark:text-vue-green font-semibold">Asus ROG STRIX LC II 360 ARGB</span></li>
        </ul>
      </div>

      <div>
        <BaseTitle tag="h2">
          Periféricos:
        </BaseTitle>

        <ul class="border-s-4 border-vue-purple dark:border-vue-green ps-5 text-base">
          <li>Monitor · <span class="text-vue-purple dark:text-vue-green font-semibold">Samsung Odyssey G9</span></li>
          <li>Keyboard · <span class="text-vue-purple dark:text-vue-green font-semibold">Razer Huntsman Elite</span></li>
          <li>Mouse · <span class="text-vue-purple dark:text-vue-green font-semibold">Razer Naga Pro</span></li>
          <li>Headsets · <span class="text-vue-purple dark:text-vue-green font-semibold">Razer Nari Ultimate</span></li>
          <li>Webcam · <span class="text-vue-purple dark:text-vue-green font-semibold">Razer Kiyo Pro</span></li>
          <li>Mousepad · <span class="text-vue-purple dark:text-vue-green font-semibold">Razer Gigantus v2 XXL</span></li>
          <li>Silla · <span class="text-vue-purple dark:text-vue-green font-semibold">Cougar Armor One Skyblue</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
