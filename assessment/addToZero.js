let array = [50, 60, 22, -50, 14, 9, 2]

let result = "False"
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
            if (array[i] + array[j] === 0) {
                result = "True"
            }
        }
    }
}

console.log(result)

//  What is the space complexity? O(n)