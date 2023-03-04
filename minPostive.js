function solution(A) {
    // Implement your solution here
    const maxNumber = Math.max(...A);
    let smallestPositive = 1;
    let found = false;

    while(!found){
        if(!A.includes(smallestPositive)) {
        found = true;
        }
        
       else if(smallestPositive >=  maxNumber){
            found = true;
             smallestPositive = smallestPositive + 1;
             
        }
       else smallestPositive = smallestPositive + 1;
    }
    return smallestPositive;
    
}
// second solution

function solutionB(A) {
    // Implement your solution here

    const sortedArray = A.sort();
    let num = 1;
    let found = false;
   for (let index = 0; index < sortedArray.length -2; index++) {
    if( sortedArray[index+1] - sortedArray[index] > 1 ) {
        num = sortedArray[index] + 1; 
        found = true;
    }
   }
   if(found) return num;
   
    
   
}