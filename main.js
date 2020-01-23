//Closure using Array

function demo(){

    let method1=function(numValue1,numValue2){
        return numValue1+numValue2;
    }
    let method2=function(numValue1,numValue2){
        return numValue1-numValue2;
    }
    let method3=function(numValue1,numValue2){
        return numValue1*numValue2;
    }

    let arrayObj = new Array();
    arrayObj.push(method1,method2,method3);

    return arrayObj; //returned method = Closure
}

let methodObj= demo();

//Single element
//let result = methodObj(2,2);

let result1 = methodObj[0](2,2);
let result2 = methodObj[1](4,1);
let result3 = methodObj[2](5,4);

console.log(`Addition: ${result1} \nSubstraction: ${result2} \nMultiplication: ${result3}`);


//Closure using Object


function demo2(){
    let method1=function(numValue1,numValue2){
        return numValue1+numValue2;
    }
    let method2=function(numValue1,numValue2){
        return numValue1-numValue2;
    }
    let method3=function(numValue1,numValue2){
        return numValue1*numValue2;
    }

    let obj={
        method1:method1,
        method2:method2,
        method3:method3
    };
    return obj;
}

let methodObj2 = demo2();
result1 = methodObj2.method1(4,2);
result2 = methodObj2.method2(5,1);
result3 = methodObj2.method3(6,4);

console.log(`Addition: ${result1} \nSubstraction: ${result2} \nMultiplication: ${result3}`);