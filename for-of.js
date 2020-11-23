
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
//generator函数
let objs={ name:'xiaomao'}
    objs[Symbol.iterator]=function* (){
        var count=0;
        if(count<1){
            count++;
            yield this.name;
        }
    }
    

    for(let key of objs) {
    //for of循环调用[Symbol.iterator]属性，返回的是[Symbol.iterator]里面的next()方法返回的值
    // for of的本质是调用objs对象上的[Sybol.iterator]方法，该方法返回可一个符合迭代协议的对象，该
    // 对象上有一个 next方法，next方法返回一个对象，对象存在done与value属性，done用来判断for循环时的结束条件，
    // value是每次循环取的值
        console.log(key);
    }


for(let key of obj) {

    console.log(key);
}

// var arr = [1,2,3,4];
// for(key in arr) {
//     console.log(key)
// }