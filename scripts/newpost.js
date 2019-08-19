// Get process.stdin as the standard input object.
const standardInput = process.stdin

// Set input character encoding.
standardInput.setEncoding('utf-8')

// Prompt user to input data in console.
console.log('New Post Title:')

// When user input data and click enter key.
standardInput.on('data', title => {
  if (title.trim().length > 0) {
    const uuid = require('uuid')
    const slugify = require('slugify')
    const date = new Date()
    const fileName =
      String(date.getDate()).padStart(2, '0') +
      String(date.getMonth()).padStart(2, '0') +
      String(date.getFullYear())

    const result = `
File Name: ${slugify(fileName + ' ' + title.toLowerCase(), '_')}

---
title: ${title}
slug: ${slugify(uuid() + '-' + title.toLowerCase())}
published:
updated:
tags:
  - tag
---
`
    console.log(result)
    process.exit()
  }
})
