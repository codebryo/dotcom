/* eslint no-console: 'off' */
const path = require('path')
const fs = require('fs').promises
const fm = require('front-matter')

const PATHS = {
  CONTENT: path.join(__dirname, '..', 'content'),
  STATIC: path.join(__dirname, '..', 'static')
}

const graph = {}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function collectPosts(inputPath) {
  const data = {}
  try {
    const files = await fs.readdir(inputPath, { withFileTypes: true })

    await asyncForEach(files, async file => {
      const fileNameWithoutExtension = path.basename(file, path.extname(file))
      const fileStream = await fs.readFile(
        path.join(inputPath, '/', file),
        'utf8'
      )
      const content = fm(fileStream)
      data[fileNameWithoutExtension] = content
    })
    return data
  } catch (err) {
    console.error(err)
  }
}

async function createGraphFile() {
  const files = await collectPosts(PATHS.CONTENT)
  graph.posts = files

  try {
    await fs.writeFile(`${PATHS.STATIC}/graph.json`, JSON.stringify(graph))
    console.log('Graph file generated!')
  } catch (err) {
    console.error(err)
  }
}

createGraphFile()
