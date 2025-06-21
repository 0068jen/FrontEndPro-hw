`use strict`

let array = [1, 2, 3, 4, 5, 6, 7]

const filter = (arr, cb) => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr))  {
            result[result.length] = arr[i]
        }
    }
    return result
}


const removeElement(arr, item) = filter(array, (item) => {
 return item !== [i]
})
const removeElement (array, 5)

console.log(removeElement)