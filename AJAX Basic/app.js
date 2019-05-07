const displayData = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const d = JSON.parse(xhr.responseText);
            console.log(d)
            let html = '';
            d.data.map(data => {
                html += '<li>' +
                    `Name: ${data.name}, Age: ${data.age}, Location: ${data.location}, Occupation: ${data.occupation}` +
                    '</li>';
                return document.getElementById("app").innerHTML = html;
            });
        }
    };
    xhr.open('GET', 'data.json');
    xhr.send()
}
displayData();