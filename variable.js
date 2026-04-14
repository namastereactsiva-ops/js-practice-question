// var firstName = "Jhon";

// console.log(firstName);

// // function enterName(){
// //     console.log(firstName)
// //     const firstName = "ram";
// // }

// // enterName();

// function reverce(wordReverce){
//     let result = '';
    
//      for(let i = wordReverce.length -1; i >= 0; i--){
//       result += wordReverce[i];
//      }

//      return result;
// }

// console.log(reverce("hello"));


function reverceWord(word){

   
    let result = '';

    for(let i = word.length -1; i>=0; i--){
        result += word[i];
    }

    return result
}


