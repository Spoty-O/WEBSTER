// import { fabric } from 'fabric';
const editText = (text, canvas) => {
  const objects = canvas.getActiveObjects()
  if (objects.length && objects[0].type === 'text') {
    const textObject = objects[0]
    textObject.set({ text })
    canvas.renderAll()
  }
}
const editColor = (color, canvas) => {
  const objects = canvas.getActiveObjects()
  objects.forEach(object => {
    if (object.type === "text") {
      object.set({ fill: color })
    }
  })
  canvas.renderAll()
}
const editFont = (font, canvas) => {
  const objects = canvas.getActiveObjects()
  objects.forEach(object => {
    if (object.type === "text") {
      object.set({ fontFamily: font==="TNR"? "Times New Roman" :  font})
    }
  })
  canvas.renderAll()
}
const editAlign = (align, canvas) => {
  const objects = canvas.getActiveObjects()
  objects.forEach(object => {
    if (object.type === "text") {
      object.set({ textAlign: align })
    }})
  canvas.renderAll()
}
const editSize = (size, canvas) => {
  const objects = canvas.getActiveObjects()
  objects.forEach(object => {
    if (object.type === "text") {
      object.set({ fontSize: size })
    }})
  canvas.renderAll()
}


export { editText, editFont, editAlign, editColor, editSize }