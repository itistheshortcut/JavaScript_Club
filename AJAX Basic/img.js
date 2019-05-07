const showImages = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById('app').innerHTML = xhr.responseText;
            console.log(xhr.responseText)
        }
    };
    xhr.open('GET', 'img.html')
    xhr.send();
}

showImages();