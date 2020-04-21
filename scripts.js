const filterUsers = async (name) =>
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json())


const debounceEvent = (fn, wait = 1000, time) =>  (...args) =>
        clearTimeout(time, time = setTimeout(() => fn(...args), wait))
        

function handleKeyUp(event) {
    let grid = document.querySelector(".grid");
    filterUsers(event.target.value)
    .then(users => users.map( user => grid.innerHTML = user.name ))
}

document.querySelector("input")
.addEventListener("keyup", debounceEvent(handleKeyUp, 1000))