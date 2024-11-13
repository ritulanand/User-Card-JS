const divEle = document.querySelector('.card-container');

function getDetails(id){
  const req = new XMLHttpRequest();
  console.log("req", req)

  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
    if(req.status === 404) return;
    //console.log(this.responseText);
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(req.responseText);
    console.log(data);
    displayUser(data, "beforeend");
      

    const req2 = new XMLHttpRequest();

    req2.open('GET', `https://dummyjson.com/users/${id-1}`);
    req2.send();
    req2.addEventListener('load', function () {
      if(req2.status === 404) return
      //console.log(this.responseText);
      //console.log(JSON.parse(this.responseText));
      const data = JSON.parse(req2.responseText);
      console.log(data);
    displayUser(data, "afterbegin", 'other');

  });
});
}


// getDetails(1);
getDetails(2);




function displayUser(data, pos, className=''){
  const card = `<div class="user-card ${className} ">
  <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName} </h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

      divEle.insertAdjacentHTML(pos, card);
}