/**
 
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
 */

function sockMerchant(n, ar) {
    const socksByPair = {};
    ar.map((item) => {
        if(socksByPair[item]) socksByPair[item] = socksByPair[item] + 1;
        else socksByPair[item] = 1;
    })
    
    const pairs = Object.keys(socksByPair).reduce((total,val) => {
        console.log(socksByPair[val], total);
          total =  total + parseInt(socksByPair[val] / 2)  ;
          return total
    },0)
    
    return pairs;
}
