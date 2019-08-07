<template>
  <div>
    <header class="text-white flex flex-row">
      <div class="flex-1 p-4">
        <a href="/" class="no-underline hover:bg-transparent">
          <img id="logo" src="~/assets/img/Logo.svg" alt="Codebryo" />
        </a>
      </div>
      <ul class="text-right flex-row flex font-sans">
        <li class="p-4">
          <a href="#twitter">twitter</a>
        </li>
        <li class="p-4">
          <a href="#github">github</a>
        </li>
        <li class="p-4">
          <a href="#rss">rss</a>
        </li>
      </ul>
    </header>
    <div class="flex justify-center">
      <nuxt />
    </div>
  </div>
</template>

<style lang="sass" scoped>
#logo
  width: 150px
  min-width: 80px

header
  background-color: rgba(#272727, .8)
  position: fixed
  width: 100%
  max-width: 80em
  transform: translateX(-50%)
  left: 50%
</style>
