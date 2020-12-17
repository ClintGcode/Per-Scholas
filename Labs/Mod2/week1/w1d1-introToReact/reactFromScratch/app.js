const message = "Hello, World!";
const nameVar = "Clinton Garwood"
const obj = {
  firstName: "Clinton",
  lastName: "Garwood"
}
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('container').innerHTML = message;
// })
// document.createElement('h1')
// $('<h1>')
// ReactDOM.render(/* element we want to render */, /* element we want to render in */)
ReactDOM.render(
  <h1>{ `${obj.firstName} ${obj.lastName}`) }</h1>,
  document.getElementById('container')
);