function A(next) {
  console.log('start A')
  next()
  console.log('end A')
}

function B(next) {
  console.log('start B')
  next()
  console.log('end B')
}

function C(next) {
  console.log('start C')
  next()
  console.log('end C')
}
const fnArr = [A, B, C]

let index = -1
function next() {
  index ++
  if (index >= fnArr.length) {
    return
  }
  fnArr[index](next)
}

next()