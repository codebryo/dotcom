<template>
  <div class="content font-serif p-4 mt-20">
    <slot></slot>
    <footer>
      <p>copyright 2019 -- Roman Kuba</p>
    </footer>
  </div>
</template>

<style lang="sass">
.content
  @apply w-full
  max-width: 45em

footer
  padding: 8em 0 3em
  text-align: center
  @apply font-sans

  &::before
    content: ''
    height: 1px
    display: block
    border-top: 1px solid rgba(#fff, .2)
    width: 80%
    left: 10%
    position: relative
    top: -4em
</style>
