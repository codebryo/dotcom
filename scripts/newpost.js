// Get process.stdin as the standard input object.
const standardInput = process.stdin
const path = require('path')
const fs = require('fs').promises
const pathForNewPost = path.join(__dirname, '..', 'content')

// Set input character encoding.
standardInput.setEncoding('utf-8')

// Prompt user to input data in console.
console.log('New Post Title:')

// When user input data and click enter key.
standardInput.on('data', async title => {
  if (title.trim().length > 0) {
    await createNewPost(title)
    console.log('New Post Created!')
    process.exit()
  }
})

async function createNewPost(title) {
  const uuid = require('uuid')
  const slugify = require('slugify')
  const date = new Date()
  const [day, month, year] = [
    String(date.getDate()).padStart(2, '0'),
    String(date.getMonth()).padStart(2, '0'),
    String(date.getFullYear())
  ]
  const fileName = slugify(`${day}${month}${year} ${title.toLowerCase()}`, '_')

  const initialFileContent = `
---
title: ${title}
slug: ${slugify(uuid() + '-' + title.toLowerCase())}
published: ${day}.${month}.${year}
updated: ${day}.${month}.${year}
tags:
  - tag
---
`
  await fs.writeFile(`${pathForNewPost}/${fileName}.md`, initialFileContent)
}
