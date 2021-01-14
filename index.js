// Add your code here

const url = 'http://localhost:3000/users'

function submitData(name, email) {
    const configObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 'name': name, 'email': email })
      };

    return fetch(url, configObj)
        .then(function(response) {
        return response.json();
        })
        .then(function(body) {
            const p = document.createElement('p');
            p.innerHTML = body.id;
            document.body.appendChild(p);
        })
        .catch(function(error) {
        alert("Error:");
            const p = document.createElement('p');
            p.innerHTML = error.message;
            document.body.appendChild(p);
        });
}