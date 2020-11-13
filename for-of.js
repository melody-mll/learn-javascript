
let obj = {
    name: 'mll',
    [Symbol.iterator]() {
        const that = this;
        var count = 0;
        return {
            next() {
                count++;
                return {
                    done: count === 2,
                    value: that.name
                }
            }
        }
    }
}

// for(let key of obj) {

//     console.log(key)
// }

// var arr = [1,2,3,4];
// for(key in arr) {
//     console.log(key)
// }