var count = 0
exports.count = count
setTimeout(function () {
  console.log('increase count to', ++count, 'in counter.js after 500ms')
}, 500)
