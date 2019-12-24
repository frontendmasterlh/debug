function sum(a, b, callback) {
    var obj = {
            a: a,
            b: b,
            fn: callback
        }
        // obj.fn = callback
    return obj.fn()
}
var c = 99999999

// 回调函数的this
console.log(sum(4, 5, function() {
    return this.a + this.b
}));

// 箭头函数的this
console.log(sum(4, 5, () => {
    console.log(c);
    // console.log(this === window);
    return this.a + this.b
}));

// 回调函数的作用
console.log(sum(4, 5, function() {
    var c = this.a + this.b
    console.log('callback is so easy !')
    return c
}));

// map 函数的回调函数必须要return 返回
var arr1 = [1, 2, 3, 4, 5]
var arr2 = arr1.map(function(item) {
    // console.log(this === global);   true
    return item = item * 2
})
console.log(arr1, arr2);