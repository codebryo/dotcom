<template>
  <Content>
    <Post v-cloak :post="post" />
  </Content>
</template>

<script>
/* eslint no-console: 'off' */
import Content from '~/components/content'
import Post from '~/components/post'
import graph from '~/static/graph.json'

console.log(graph.posts)

export default {
  components: {
    Content,
    Post
  },

  data() {
    return {
      post: graph.posts[Object.keys(graph.posts)[0]]
    }
  }
}
</script>
