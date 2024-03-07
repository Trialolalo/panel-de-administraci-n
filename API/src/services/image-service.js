const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    for (const image in images) {
      console.log(image)
    }
    // const filename = images.target.value.replace(/\s+/g, '-').replace(/[^A-Za-zÑñÁáÉéÍíÓóÚúÜü-]/g, '')
  }

  resizeImages = async (images) => {

  }

  deleteImages = async filename => {

  }
}
