// Add your functions here

function map(array, callBackFunction) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callBackFunction(array[i]))
  }
  return newArray
}

function reduce(array, callBackFunction, ) {

}

