const withAsync = (asyncFn)=> {

   let startTime = new Date().valueOf(), endTime;
   let fn = asyncFn()
   let isPromise = fn instanceof Promise;
   if(!isPromise) {
      endTime = new Date().valueOf()
      return Promise.resolve([null, new Error("not a promise"), {start: startTime, end: endTime, duration: endTime-startTime }])
   }
   return fn
   .then(data=> {
      endTime = new Date().valueOf()
      return [ data, null, {start: startTime, end: endTime, duration: endTime-startTime }]
   })
   .catch(err=> {
      endTime = new Date().valueOf()
      return [null, err, {start: startTime, end: endTime, duration: endTime-startTime }]
   })
}

// export default withAsync;
module.exports = withAsync