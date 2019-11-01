# with-async-error
async without try...catch [Live demo](https://runkit.com/nishchit14/5dbbe1ba3885ba00148b71d1)

### install
```
npm i with-async-error --save or yarn add with-async-error
```

### example
```javascript
import withAsync from "with-async-error";

const apiA = ()=> Promise.resolve("200OK")
const apiB = ()=> Promise.reject("error")

let [ dataA, errA, timingA ] = await withAsync(apiA)
let [ dataB, errB, timingB ] = await withAsync(apiB)

console.log(dataA, errA, timingA)
// 200OK, null, { duration:1, start: timestamp, end: timestamp}

console.log(dataB, errB, timingB)
// null, error, { duration:1, start: timestamp, end: timestamp}
```

## todo

- [x] withAsync lib 
- [ ] ES5 transform (babel, webpack)
- [x] Test cases
- [ ] Documentation
- [x] npm publish
