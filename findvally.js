
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let down = 0;
  let up = 0;
  let isDown = 0;
  let vallayCount = 0;
  path.split('').map((step) => {
      if( step === 'D') down++;
      if( step === 'U') up++;
      if(step === 'D' && up < down  && !isDown) {
          vallayCount++
          isDown = 1;
          }
        if(up >= down) isDown =0;
  })
  return vallayCount;
  
}
