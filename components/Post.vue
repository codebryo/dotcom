<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <div class="text-gray-700 italic py-2">
      <nuxt-link
        :to="`/p/${slug}`"
        class="source"
        title="Unique url for this post"
        >⛓</nuxt-link
      >
      -- Published {{ published }} --
      <Tags :tags="tags" />
    </div>

    <figure v-if="image" class="my-2">
      <img :src="image.url" :alt="title" />
      <figcaption class="text-gray-700 italic text-sm text-right">
        Photo by: <span v-html="image.author" />
      </figcaption>
    </figure>

    <article v-html="content" />
  </div>
</template>

<script>
/* eslint-disable */
import MD from 'markdown-js'
import Tags from '~/components/tags'

export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  components: { Tags },

  data() {
    return {
      ...this.post.attributes,
      content: MD.markdown(this.post.body)
    }
  }
}
</script>

<style lang="sass">

.source
  @apply no-underline not-italic
  &:hover
    background: none

</style>
