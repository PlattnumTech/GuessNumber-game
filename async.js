//Async Await


//Original Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//Async Promise
    async function fetchUsers() {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json();
        console.log(data)
    }


    