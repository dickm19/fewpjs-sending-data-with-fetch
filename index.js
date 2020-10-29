// Add your code here
function submitData(name, email){
       let formData = {
        name: name,
        email: email
      };
      
      // method: "POST" is missing from the object below
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            const h1 = document.createElement("h1")
            
            document.body.append(h1)
            h1.textContent = object.id
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            document.body.append(error.message);
          })
      
      
}

//submitData("mary", "m@m.com")