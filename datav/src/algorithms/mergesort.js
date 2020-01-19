export default async function finalMS(arr, updateUI){
  let splitarr = split(arr)

  for(let i = 0; i < log(arr.length); i++){

    splitarr = iterator(splitarr)

    updateUI(splitarr)
    sleep(500)
  }

return splitarr
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function log(y){
  return Math.ceil(Math.log(y)/Math.log(2))
}


function split(arr){
  return arr.map(element => {
  return [element]
})
}

function iterator (arr){
  console.log(arr.length)
  let finalarr =[]
  for(let i = 0; i < arr.length; i++){
    if(i%2 === 0 && arr[i+1]){
      finalarr.push(merge(arr[i],arr[i+1]))
    } else if(i%2 === 0){
      finalarr.push(arr[i])
    }
  }
  return finalarr
}

function merge (arr1, arr2){
  let index1 = 0
  let index2 = 0
  let returnArr = []
  while(index1 <= arr1.length -1 || index2 <= arr2.length - 1){
    // console.log(index1 < arr1.length -1)
    // console.log(index2 < arr2.length - 1)
    if(index1 === arr1.length){
      returnArr.push(arr2[index2])
      index2++
    } else if (index2 === arr2.length){
      returnArr.push(arr1[index1])
      index1++
    } else if(arr1[index1] < arr2[index2]){
      returnArr.push(arr1[index1])
      index1++
    } else {
      returnArr.push(arr2[index2])
      index2++
    }
  }
  return returnArr
}
