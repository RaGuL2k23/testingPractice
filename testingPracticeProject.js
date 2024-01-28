function capitalize(string) {
  return string.toUpperCase();
}
const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multipy: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};
function caesarCipher(string,key=4){ //4
    string = string.toUpperCase().split('');
    // let modifiedString = string.filter(e=> typeof(e) == Number)
    let modifiedString = string.map(e=>{
        if(   !isNaN(Number.parseInt(e)  )  && typeof(Number.parseInt(e)) == "number"  ) {  return e; }
        else{
        let charCode = e.charCodeAt(0);
        let charThen = String.fromCharCode(charCode+Number.parseInt(`${key}`));
        return charThen
        }
    })

   return(modifiedString.join('')) 
}


function reverseString(string){ console.log(string);return string.split('').reverse().join('')}

function analyzeArray (array){
    console.log('hi');
   let length = array.length;
   let average = array.reduce((sum,value)=> sum+=value ,0);average/=length;
   let max = Math.max(...array);
   let     min = Math.min(...array)
    average = Math.floor(average);
        console.log({average,min,max,length})
        return {average,min,max,length}
}
console.log(analyzeArray([4,23,56]))
export { capitalize, calculator ,reverseString,caesarCipher,analyzeArray};
