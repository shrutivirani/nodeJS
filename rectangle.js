// module.exports = (x, y, callback) => {
//     if(x <= 0 || y <= 0){
//         setTimeout(() =>
//         callback(
//         new Error("X and Y must more than 0 value")
//         ,null)
//         ,2000)
//     }
//     else{
//         setTimeout(() =>
//         callback(null,
//             {
//                 add: () => (2+(x+y)),
//                 mul:() => (2*(x+y))
//             })
//         ,2000)
//     }
// }