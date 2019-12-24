// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++; // |this| 正确地指向 p 实例
//     }, 1000);
// }

// var p = new Person();

// var arr1 = [1, 2, 3]
// var arr2 = arr1.map(item => item * 2)
// console.log(arr1, arr2);

// var arr3 = [
//     { name: 'liaohao1', age: 22 },
//     { name: 'liaohao2', age: 10 },
//     { name: 'liaohao2', age: 28 }
// ]
// var arr4 = arr3.map((item) => item.age * 2)
// console.log(arr3, arr4);

// $(function() {
//     $('#opendiv').on('click', function() {
//         // parent scrope this == opendiv

//         // content 显示出来,然后更改opendiv按钮的颜色
//         $('#content').slideDown(2000, function() {
//             // child scrope  this == id为content的div
//             // 通过bind this === opendiv
//             $(this).toggleClass("active")
//         }.bind(this))

//     })
// })