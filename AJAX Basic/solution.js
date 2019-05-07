const getData = () => {
    fetch('https://js-club-api.herokuapp.com/persons')
        .then(req => req.json())
        .then(res => {
            let html = '';
            console.log(res.persons)
            res.persons.map(person => {
                html += `<li>
                Name: ${person.firstName} ${person.lastName}
                Age: ${person.age}
                Location: ${person.location}
                </li>`
                return document.getElementById('app').innerHTML = html;
            })
        })
}

getData();