 export const postUser =  () => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            "key": "Accept",
            "value": "application/json"
            },
        body: JSON.stringify({ 
            email:"abh125aad@gmail.com",
            name: "Abhi",
            password: '90909090',
            gender:'male',
            status: 'active'
        })
    };

    fetch('https://www.getpostman.com/api/auth/register', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}


const getUsers =  () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
    };

    fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
        console.error(error);
      });

}

const UpdateUser =  () => {

    const requestOptions = {
        method: 'PUT',
        headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
              'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
        body: JSON.stringify({ 
            email:"cody3@gmail.com",
            name: "Abhi Rai",
            gender: 'male',
            status: 'inactive'
        })
    };

    fetch('https://gorest.co.in/public/v1/users/8969', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const deleteUser =  () => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
    };

    fetch('https://gorest.co.in/public/v1/users/8986', requestOptions)
    .then(response => response.ok)
    .catch((error) => {
        console.error(error);
      });
    

}
