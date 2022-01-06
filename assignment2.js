//Jessica Lauria - TTP 2022
//Please forgive all the new line formatting, it was easier to separate the outputs while testing!

/////////For-each loop that takes an array and multiples each element by 2
function myEach(element){

for(let i = 0; i < element.length; i++)

    element[i] *= 2;
    console.log(element);
}

myEach([1, 4, 6, 9]);

/////////Map - key/value pairs
function myMap(arr){

let arr2 = [];

for(let i = 0; i < arr.length; i++)

    arr2[i] = arr[i].toUpperCase();
    console.log("Original unmutated array: " + arr + 
    "\nNew array with each element changed to upper case: " + arr2);

}

myMap(['hello', 'apple']);

/////////Filter - iterates through the array and returns elements matching a criteria
function callBack(element){
    return element;
 }
 
 function myFilter(arr, callback){
    
    let filteredArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0)
            filteredArr[i] = callBack(arr[i]);
    }

    return filteredArr;
 }

 const array = [1, 2, 3, 4, 3, 9, 10];
 console.log(myFilter(array, this.callBack));



/////////Some(Any) - Checks each element to see if some/any are even
function callBack(element){
    return element;
 }
 
 function mySome(arr, callback){
    

    for(let i = 0; i < arr.length; i++){
        if(callBack(arr[i]) % 2 === 0)
            return true;
        else
            return false;
    }
 }

 const arr1 = [3, 5, 7, 9, 1];//This array only has odd numbers so it will be false
 console.log(mySome(arr1, this.callBack));

/////////Every - Checks if every element in the array is greater than 10
function callBackNumSize(num){
    return num > 10;
 }
 
 function myEvery(arr, callback){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
        return true;
        }
    }
    return false;
 }

 const arrayOfNums = [2, 4, 6, 8, 9];//None of these numbers are bigger than 10 so it's false
 console.log(myEvery(arrayOfNums, this.callBackNumSize));

/////////Reduce - cumulatively adds all elements together and returns the sum
function callBack(element){
    return element;
 }
 
 function myReduce(arr, callback){
    
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += callBack(arr[i]);          
        }

        return sum;  
 }

 const array1 = [2, 4, 6, 8, 10];
 console.log(myReduce(array1, this.callBack));

/////////Includes - Returns true or false if a number is present in an array
function myIncludes(arr, num){

    for(let i = 0; i < arr.length; i++)
        if(arr[i] === num){
            return true
        }

  return false;
}

myIncludes([7, 14, 20, 9, 16, 8], 16) //An array with the target
myIncludes([5, 3, 8, 24, 19, 55], 16) //An array without the target

/////////IndexOf
function myIndexOf(arr, num){

    for(let i = 0; i < arr.length; i++)
        if(arr[i] === num){
            console.log("\nIndex: " + [i])
            break;
        }

}
myIndexOf([1, 7, 4, 3, 7], 7)

/////////Push - adds an element to the end of an array
function myPush(n){

    let arr = [3, 6, 9, 12];
    let index = arr.length;
    
    arr[index] = n;
    index++;
    
    console.log(arr);
}

    myPush(3);

/////////Last Index Of - finds the index of the last occurence of a number
function myLastIndexOf(arr, num){

    let target = num;

    for(let i = 0; i < arr.length; i++)
        if(arr[i] === target){
            console.log("\nThe target number in the array " + arr + " is: " + target + 
            "\nThe index of the target in the array is: " + [i]);
        }
    return -1;
}

    myLastIndexOf([1, 2, 4, 3, 3, 5, 8], 3) //There are two 3's but the last one is at the 5th element 
                                            //(index of 4) of the array
                                    
/////////Object.keys

/////////Object.values

