// const decoder = str => {
//     let finalStr = ''

//     for(let i = 0; i < str.length; i++){
//         let currentValue = parseInt(str[i])
//         console.log(currentValue)
//         if(!isNaN(str[i])){
//             console.log("=========")
//             console.log(`i before addition is ${i}`)
//             i += currentValue
//             console.log(`i after addition is ${i}`)
//         } else {
//             finalStr += str[i]
//         }
//     }

//     return finalStr
// }

// console.log(decoder('0h2xce5ngbrdy'))

numberarr = [0,1,2,3,4,5,6,7,8,9]
function decoder(code){
  let decoderchk = code.split('')
  let finalStr = ''
    for(let i = 0; i < decoderchk.length; i++){
        if(numberarr.includes(parseInt(decoderchk[i]))){
            i += parseInt(decoderchk[i])
        } else {
            finalStr += decoderchk[i]
        }
    }
    return finalStr
}

console.log(decoder('0h2xce5ngbrdy'))