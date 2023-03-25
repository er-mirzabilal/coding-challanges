/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    let magazineHash = {};
  magazine.map((word) => {
      if(magazineHash[word]) magazineHash[word] = magazineHash[word] + 1;
      else magazineHash[word] = 1;
  })
  let noteTrace = {};
  let isDoable = 'Yes';
  for(let i =0; i < note.length; i++){
      if(noteTrace[note[i]]) noteTrace[note[i]] = noteTrace[note[i]] + 1;
      else noteTrace[note[i]] = 1;
      if(!magazineHash[note[i]] ||
        magazineHash[note[i]] < noteTrace[note[i]]
      ) {
          isDoable = 'No';
          break
          }
     
         
  }
    console.log(isDoable);
}
