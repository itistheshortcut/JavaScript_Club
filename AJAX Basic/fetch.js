
const getData = () => {
    fetch('data.json')
        .then(req => req.json())
        .then(res => {
            console.log(res);
            console.log(res.data)
            let html = '';
            res.data.map(data => {
                html += `<li>
                 Name: ${ data.name}, Age: ${data.age}, Location: ${data.location}, Occupation: ${data.occupation}
                </li>`
                return document.getElementById('root').innerHTML = html;
            })
        })
}
getData();

const getImages = () => {
    fetch('img.html')
        .then(req => req.text())
        .then(res => document.getElementById('root1').innerHTML = res)
}
getImages();

parseInt("3");

const getRandomData = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(req => req.json())
        .then(res => {
            console.log(res.message)
            let html = `<img src="${res.message}" />`;
            console.log(html);
            return document.getElementById('root2').innerHTML = html;
        })
}
