const showImages = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText)
            document.getElementById('app').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'img.html')
    xhr.send();
}

showImages();