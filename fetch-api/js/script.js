/** @format */

// etape 1
const request = new XMLHttpRequest();

// etape 2

request.addEventListener('load', (event) => {
  const response = event.target.response;
  const jsReponse = JSON.parse(response);

  for (const user of jsReponse) {
    const ulParent = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const hr = document.createElement('hr');

    li1.innerHTML = user.id;
    li2.innerHTML = user.name;
    li3.innerHTML = user.surname;
    li4.innerHTML = user.email;

    ulParent.appendChild(li1);
    ulParent.appendChild(li2);
    ulParent.appendChild(li3);
    ulParent.appendChild(li4);

    document.getElementById('users').appendChild(ulParent);
    document.getElementById('users').append(hr);
  }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.send();
