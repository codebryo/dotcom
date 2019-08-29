<template>
  <Content>
    <Post v-cloak :post="post" />

    <div v-if="recentPosts.length" class="py-6">
      <h2 class="text-gray-700 mb-10">Recent Posts</h2>
      <div class="flex flex-col">
        <div v-for="post in recentPosts" :key="post.slug" class="p-1">
          <nuxt-link
            :to="`/p/${post.slug}`"
            class=" block
            border
              no-underline
              hover:border-transparent
              hover:no-underline
              border
              border-gray-700
              rounded-lg
              p-6
            "
          >
            <h3 class="text-xl">
              {{ post.title }}
            </h3>
            <div class="text-gray-700 italic py-2 text-sm">
              Published {{ post.published }} -- <Tags :tags="post.tags" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
/* eslint no-console: 'off' */
import Content from '~/components/content'
import Post from '~/components/post'
import Tags from '~/components/tags'
import graph from '~/static/graph.json'

function pickLastPost(posts) {
  const allPosts = Object.keys(posts)
  const lastPostKey = allPosts[allPosts.length - 1]
  return posts[lastPostKey]
}

function pickRecentPosts(posts) {
  const maxPosts = 3
  const allPosts = Object.keys(posts)
  const availablePosts = allPosts.length - 1 // Don't show the latest post
  const loops = availablePosts >= maxPosts ? maxPosts : availablePosts
  const recentPosts = []

  for (let i = 0; i < loops; i++) {
    const postKey = allPosts[availablePosts - 1 - i]
    recentPosts.push(posts[postKey].attributes)
  }

  return recentPosts
}

export default {
  components: {
    Content,
    Post,
    Tags
  },

  data() {
    return {
      post: pickLastPost(graph.posts),
      recentPosts: pickRecentPosts(graph.posts)
    }
  }
}
</script>
