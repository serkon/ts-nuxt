import { readdirSync, statSync } from 'fs'

const componentDirectories = []
const watchFolders = ['./components']

export const find = function(watchFolders) {
  for (const pathString of watchFolders) {
    const directories = getDirectories(pathString)

    if (!componentDirectories.some((compDir) => compDir.path === pathString)) {
      componentDirectories.push({
        path: pathString,
        extentions: ['vue'],
      })
      console.log('### loaded component directory', pathString)
      for (const directory of directories) {
        const subDir = [pathString, directory].join('/')

        componentDirectories.push({
          path: subDir,
          extentions: ['vue'],
        })
        console.log('### loaded component directory', subDir)
        find([subDir])
      }
    }
  }
}

function getDirectories(path) {
  return readdirSync(path).filter(function(file) {
    return statSync(path + '/' + file).isDirectory()
  })
}

find(watchFolders)
export default componentDirectories
