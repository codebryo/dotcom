<template>
  <div class="content font-serif p-4">
    <slot></slot>
    <footer class="text-gray-700 font-sans text-center px-6">
      <p>copyright 2019 -- Roman Kuba</p>
    </footer>
  </div>
</template>

<style lang="sass">
.content
  @apply w-full
  max-width: 45em
  margin-top: 200px
</style>
