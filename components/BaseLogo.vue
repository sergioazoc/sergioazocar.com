<script setup lang="ts">
  export interface Props {
    icon: string
  }

  const props = defineProps<Props>()

</script>

<template>
  <div class="grid place-items-center border border-slate-800 rounded-lg size-24 bg-slate-900 hover:shadow-2xl hover:shadow-vue-green">
    <Icon
      :name="props.icon"
      size="40px"
      class="hover:drop-shadow-[0_0_18px_rgba(256,256,256,0.3)]"
    />
  </div>
</template>