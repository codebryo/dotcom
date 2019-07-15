<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <article v-html="content" />
  </div>
</template>

<script>
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
      title: this.post.attributes.title,
      content: MD.markdown(this.post.body)
    }
  }
}
</script>

<style lang="sass"></style>
