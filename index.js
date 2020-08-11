// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => {
            document.body.prepend(data.id);
        })
        .catch(error => {
            document.body.append(error.message);
        });

}