function aLongWaitAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, post: 'I am a post!' })
      }, 3000)
    })
  }

// const callApi = async () => {
//     try {
//         let data = await aLongWaitAPI()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// console.log(callApi())

(async () => {
    try {
        let data = await aLongWaitAPI()
        console.log(data)
    } catch (reject) {
        console.log(reject)
    }
})();

