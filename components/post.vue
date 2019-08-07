<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <div class="meta">
      Published {{ published }} --
      <span v-for="tag in tags" :key="tag" class="tag" v-text="tag" />
    </div>
    <article v-html="content" />
  </div>
</template>

<script>
/* eslint-disable */
import MD from 'markdown-js'

export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      ...this.post.attributes,
      content: MD.markdown(this.post.body)
    }
  }
}
</script>

<style lang="sass">
.meta
  @apply text-gray-600 italic py-2

.tag
  @apply inline-block p-1 border rounded border-gray-800 border-solid
</style>
