# with-async-error
async without try...catch

### install
```
npm i with-async-error --save or yarn add with-async-error
```

### example
```javascript
import withAsync from "with-async-error";

cost apiA = Promise.resolve("200OK")
cost apiB = Promise.reject("error")

let [ dataA, errA, timingA ] = await withAsync(apiA)
let [ dataB, errB, timingB ] = await withAsync(apiB)

conosle.log(dataA, errA, timingA)
// 200OK, null, 125

conosle.log(dataB, errB, timingB)
// null, error, 15
```

## todo

- [x] withAsync lib 
- [ ] ES5 transform (babel, webpack)
- [x] Test cases
- [ ] Documentation
- [x] npm publish
