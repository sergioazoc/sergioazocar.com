<script setup>

</script>

<template>
  <main class="prose text-left">
    <ContentList path="/blog">
      <template #default="{ list }">
        <NuxtLink
          v-for="article in list"
          :key="article._path"
          :to="article._path"
        >
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </main>
</template>
