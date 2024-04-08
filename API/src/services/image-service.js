const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    const result = []

    for (const image of images) {
      const filename = image.filename

      const newFilename = await fs.access(path.join(__dirname, `../storage/images/gallery/original/${path.parse(filename).name}.webp`)).then(async () => {
        return `${path.parse(filename).name}-${new Date().getTime()}.webp`
      }).catch(async () => {
        return `${path.parse(filename).name}.webp`
      })

      await sharp(image.buffer)
        .webp({ lossless: true })
        .toFile(path.join(__dirname, `../storage/images/gallery/original/${newFilename}`))

      await sharp(image.buffer)
        .resize(135, 135)
        .webp({ lossless: true })
        .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${newFilename}`))

      result.push(newFilename)
    }

    // return result
  }

  resizeImages = async (images) => {
    const resizedImages = {}
    for (const image of images) {
      const filename = image.filename.split('.')[0]
      const originalFilename = path.join(__dirname, `../storage/images/gallery/original/${filename}.webp`)

      for (const size in image.imageConfiguration) {
        console.log(size)
        if (!resizedImages[size]) {
          resizedImages[size] = {}
        }

        resizedImages[size][image.name] = {
          originalFilename,
          filename,
          title: image.title,
          alt: image.alt,
          widthPx: image.imageConfiguration[size].widthPx,
          heightPx: image.imageConfiguration[size].heightPx

        }
      }

      // Object.entries(image.imageConfiguration).forEach(async ([key, value]) => {
      //   await sharp(originalFilename)
      //     .resize(parseInt(value.widthPx), parseInt(value.heightPx))
      //     .webp({ lossless: true })
      //     .toFile(path.join(__dirname, `../storage/images/resized/${filename}-${value.widthPx}x${value.heightPx}.webp`))
      // })
    }
    console.log(resizedImages)
    return resizedImages
  }

  deleteImages = async filename => {
    try {
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/original/${filename}`))
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/thumbnail/${filename}`))

      return 1
    } catch {
      return 0
    }
  }
}
