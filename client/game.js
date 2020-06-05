let itemPosition = [0, 0]
let observer = null

function emitChange() {
  observer(itemPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
    }

  observer = o
  emitChange()
}

export function moveItem(toX, toY) {
  itemPosition = [toX, toY]
  emitChange()
}