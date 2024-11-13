const divEle = document.querySelector('.card-container');

function getDetails(id){

   fetch(`https://dummyjson.com/users/${id}`).then((response) => {
    if(!response.ok){
        throw new Error('Id does not match');
    }
        return response.json();
    }).then((user) => console.log(user))
    .catch((err) =>{
        console.error(err);
    })
}

getDetails(1);