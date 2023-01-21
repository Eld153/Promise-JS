let processLoad = false

let resultLoad = document.querySelector('#progress')

document.querySelector('#load').onclick = () => {
  if (processLoad) {
    resultLoad.textContent = 'Waiting for progress'
    return
  }

  processLoad = true
  resultLoad.textContent = 'The download is in progress'
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const mark = Math.floor(Math.random() * 9)
      mark > 4 ? resolve(mark) : reject(mark)
    }, 2000)
  })

  promise
    .then(value => {
      resultLoad.textContent = `Your number ${value} - It's good!`
    })
    .catch(value => {
      resultLoad.textContent = `Your number ${value} - It's bad!`
    })
    .finally(() => {
      processLoad = false
    })
}