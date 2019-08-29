<template>
  <Content>
    <Post v-cloak :post="post" class="mb-12" />
  </Content>
</template>

<script>
/* eslint no-console: 'off' */
import Content from '~/components/content'
import Post from '~/components/post'
import graph from '~/static/graph.json'

function pickPostBySlug(slug) {
  const match = Object.entries(graph.posts).find(([key, value]) => {
    if (value.attributes.slug === slug) return true
  })
  return match[1] // return just the value
}

export default {
  components: {
    Content,
    Post
  },

  data() {
    return {
      post: pickPostBySlug(this.$route.params.slug)
    }
  }
}
</script>
