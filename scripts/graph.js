/* eslint no-console: 'off' */
const path = require('path')
const fs = require('fs').promises
const fm = require('front-matter')

const PATHS = {
  CONTENT: path.join(__dirname, '..', 'content'),
  STATIC: path.join(__dirname, '..', 'static')
}

async function assembleGraphData(inputPath) {
  const files = await fs.readdir(inputPath, { withFileTypes: true })
  const filesReducer = async (accumulator, file) => {
    const fileNameWithoutExtension = path.basename(
      file.name,
      path.extname(file.name)
    )

    const fileStream = await fs.readFile(
      path.join(inputPath, '/', file.name),
      'utf8'
    )
    // Turn the raw .md content into a JSON object
    const content = fm(fileStream)
    // assign it to the main graph object
    accumulator[fileNameWithoutExtension] = content
    return accumulator
  }
  try {
    return files.reduce(filesReducer, {})
  } catch (err) {
    console.error(err)
  }
}

async function writeGraphFile() {
  const graph = {
    posts: await assembleGraphData(PATHS.CONTENT)
  }

  try {
    await fs.writeFile(
      `${PATHS.STATIC}/graph.json`,
      JSON.stringify(graph, null, 4)
    )
    console.log('Graph file generated!')
  } catch (err) {
    console.error(err)
  }
}

writeGraphFile()
