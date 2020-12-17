// My Api Key: 69c892a5
// const apiKey = '69c892a5';
// const myUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=`;// going to fill this in with a movie title 

// $.ajax({
//     url: myUrl + 'Frozen',

//     success: (data) => {
//         console.log(data);
//     }, 

//     error: () => {
//         console.error("Something went wrong")
//     }
// });
// const promise = $.ajax{('')}

// 5b3682be <- my API key
const apiKey = '5b3682be';
// const fakeApiKey = '5b3682b';
const myUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=` // I'm going to fill in with
// movie title
// $.ajax({
//   url: myUrl + 'Frozen', // -> http://www.omdbapi.com/?apikey=5b3682be&t=Frozen
//   success: (dataThatCameFromOutsideWorld) => {
//     console.log(dataThatCameFromOutsideWorld);
//   },
//   error: (errorThatCameBack) => {
//     console.error("something messed up")
//     console.error(errorThatCameBack)
//   }
// })
const promise = $.ajax({ url: myUrl + 'Frozen' });
console.log(promise) // Promise obj has .then AND .catch
// .then is like a success. If your async func worked. Run .then
// .catch is to catch your errors
promise.then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})