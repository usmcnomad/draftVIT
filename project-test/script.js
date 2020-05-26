function expandDiv() {
    document.getElementById('input-form').style.width = '0%';
    document.getElementById('container-template').style.width = '100%';
    document.getElementById('container-template').style.opacity = '1';
    document.getElementById('writeup-1-open').style.opacity = '0';
    document.getElementById('writeup-1-close').style.opacity = '1';
}

function closeDiv() {
    document.getElementById('input-form').style.width = '100%';
    document.getElementById('container-template').style.width = '0%';
    document.getElementById('container-template').style.opacity = '0';
    document.getElementById('writeup-1-open').style.opacity = '1';
    document.getElementById('writeup-1-close').style.opacity = '0';
}