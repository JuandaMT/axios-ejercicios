// 1
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
// 2
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    for (let persona of res.data) {
      console.log(persona.name);
    }
  })
  .catch((err) => console.error(err));
// 3
let users = [];
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => (users = res.data))
  .catch((err) => console.error(err));
console.log(users);
// 4
const showUsers = () => {
  console.log(users)
  users.forEach(user => {
    console.log(user)
    texto.innerHTML += `<p> ${user.name} </p>`
  })
}
// 5
const btn = document.getElementById("btn")
btn.addEventListener("click",showUsers)
// 6
const texto = document.getElementById("text")

