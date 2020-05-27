import  {count} from './counter2'
// let {count} = require('./counter2')

console.log('第一次执行count，获取原始值',count);

setTimeout(function () {
  console.log('read count after 1000ms is', count)
}, 1000)
