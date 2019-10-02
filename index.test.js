const withAsync = require("./index")

 test("should resolve the promise and return data in the first position in returned array", async()=> {

    let resolvedPromise = ()=> Promise.resolve("This promise will resolve")
    let [ data, err, timing ] = await withAsync(resolvedPromise)
    
    expect(data).toBe("This promise will resolve")
    expect(err).toBe(null)
    expect(timing.duration).toBeGreaterThanOrEqual(0)
 })

 test("should reject the promise and return error at second position in returened array", async()=> {
   
    let rejectedPromise = ()=> Promise.reject("This promise will reject")
    let [ data, err, timing ] = await withAsync(rejectedPromise)

    expect(data).toBe(null)
    expect(err).toBe("This promise will reject")
    expect(timing.duration).toBeGreaterThanOrEqual(0)
})

test("should reject the promise if passed function is not promisable", async()=> {
   
    let rejectedPromise = ()=> "This is not a promise";
    let [ data, err, timing ] = await withAsync(rejectedPromise)

    expect(data).toBe(null)
    expect(err.message).toBe("not a promise")
    expect(timing.duration).toBeGreaterThanOrEqual(0)
})