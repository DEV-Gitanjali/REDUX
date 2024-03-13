// function sum(x,y,z){
//     return x+y+z;
// }

// const result = sum(10,20,30);

// console.log(result);

// indivisual function
function sum(x){

    return function sumY(y){
        return function sumZ(z){
            return x+y+z;
        }
    }
     
}

const resultsum = sum(10);
console.log(resultsum);

const resultsumY = resultsum(20);
console.log(resultsumY);

const resultsumZ = resultsumY(30);
console.log(result);