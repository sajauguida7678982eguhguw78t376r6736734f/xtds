const testContent = "He#L#L#O";

/*

remove values
push files to gihub

["H","e","#","L","#","L","#","O"]


***********

str = str.split('')

while index less than array length

if array[i] higher than 0

if array[i] equal to # and array[i-1] not equal to # =>  array.pop ; index++

else array push the value

***********


if str1 === str2 true
else false




 */

const setupString = function(str) {

    const splitString1 = str.split('');

    let i = 0;

    let newarr = [];

    while(i < str.length){

        if(i === 0){
            if(splitString1[i] === "#"){
                i++
            }else{
                newarr.push(splitString1[i]);
                i++
            }
        }else{
            if(splitString1[i] === "#" && splitString1[i-1] !== "#"){
                newarr.pop();
                i++
            }else{
                if(splitString1[i] === "#" && splitString1[i-1] === "#"){
                  i++
                }else{
                    newarr.push(splitString1[i]);
                    i++;

                }
            }
        }

    }
   return newarr;
}




const removeBackSpace = function(str1 , str2) {

    const teststr1 = setupString(str1).join('');
    const teststr2 = setupString(str2).join('');

    if(teststr1 === teststr2){

        console.log("Yes");

    }else{

        console.log("No");
    }
}

console.log(removeBackSpace("ab##","c#d#"));