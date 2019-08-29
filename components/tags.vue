<script>
export default {
  functional: true,

  render(h, context) {
    const tags = context.props.tags
    const tagClasses =
      'inline-block p-1 border rounded border-gray-700 border-solid mr-1'

    return [
      ...tags.map(tag =>
        h(
          'span',
          {
            class: tagClasses.split(' '),
            key: tag
          },
          tag
        )
      )
    ]
  }
}
</script>
