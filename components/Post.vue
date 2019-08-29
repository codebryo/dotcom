<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <div class="text-gray-700 italic py-2">
      <nuxt-link
        :to="`/p/${slug}`"
        class="not-italic no-underline hover:no-underline hover:bg-transparent"
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

article
  p
    @apply my-2
  h2
    @apply mt-8 mb-4

</style>
