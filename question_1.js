const obj = {
    brand: 'Sosro',
    products: ['teh-botol', 'fruit-tea']
  }

function output(obj) {
    // ?brand=sosro&products=teh-botol,fruit-tea
    let keyArr = []
    let valueArr = []

    for (let key in obj) {
        keyArr.push(key)
        valueArr.push(obj[key])
    }

    let outputString = `?${keyArr[0]}=${valueArr[0].toLowerCase()}&${keyArr[1]}=${valueArr[1][0]},${valueArr[1][1]}`

    return outputString
}

console.log(output(obj))