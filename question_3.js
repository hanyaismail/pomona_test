let original = [
    {a: 1, b: 'bob'},
    {a: 2, b: 'sally'},
    {a: 3, b: 'peter'}
  ]

// into:
/*
let result = [
    {id: 1, name: 'bob', updatedOn: '2018-4-30 03:26:49'}, // use Date.now() to get current timestamp
    {id: 2, name: 'sally', updatedOn: '2018-4-30 03:26:49'}, // use Date.now() to get current timestamp
    {id: 3, name: 'peter', updatedOn: '2018-4-30 03:26:49'}, // use Date.now() to get current timestamp
  ]
*/

function output(array) {
    let result = array.map(obj => {
        let dateNow = new Date()
        let year = dateNow.getFullYear().toString()
        let month = dateNow.getMonth().toString()
        let date = dateNow.getDate().toString()
        
        let hour = dateNow.getHours().toString()
        let minute = dateNow.getMinutes().toString()
        let second = dateNow.getSeconds().toString()
 
        let dateString = `${year}-${month}-${date} ${hour}:${minute}:${second}`
        return {id: obj.a, name: obj.b, updatedOn: dateString }
    })

    return result
}

console.log(output(original))