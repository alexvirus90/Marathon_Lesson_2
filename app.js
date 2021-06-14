const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
})

function dragStart(event) {
  const { target } = event

  target.classList.add('hold')
  setTimeout(() => target.classList.add('hide'), 0)
}

function dragEnd(event) {
  const { target } = event

  // 1
  // target.classList.remove('hold')
  // target.classList.remove('hide')

  // 2
  // target.classList.remove('hold', 'hide')

  // 3
  target.className = 'item'
}

function dragOver(event) {
  event.preventDefault()
}

function dragEnter(event) {
  const { target } = event

  target.classList.add('hovered')
}

function dragLeave(event) {
  const { target } = event

  target.classList.remove('hovered')
}

function dragDrop(event) {
  const { target } = event

  target.classList.remove('hovered')
  target.append(item)
}
