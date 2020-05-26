
//click the three diagonal lines to expand the matrix view//
function expandDiv() {
    document.getElementById('input-form').style.width = '0%';
    document.getElementById('input-form').style.opacity = '0';
    document.getElementById('container-template').style.width = '100%';
    document.getElementById('container-template').style.opacity = '1';
    document.getElementById('writeup-1-open').style.opacity = '0';
    document.getElementById('writeup-1-open').style.width = '0px';
    document.getElementById('writeup-1-close').style.opacity = '1';
    document.getElementById('writeup-1-close').style.width = '20px';
}

//click the x to close the matrix view and return to the input form//
function closeDiv() {
    document.getElementById('input-form').style.width = '100%';
    document.getElementById('input-form').style.opacity = '1';
    document.getElementById('container-template').style.width = '0%';
    document.getElementById('container-template').style.opacity = '0';
    document.getElementById('writeup-1-open').style.opacity = '1';
    document.getElementById('writeup-1-open').style.width = '20px';
    document.getElementById('writeup-1-close').style.opacity = '0';
    document.getElementById('writeup-1-close').style.width = '0px';
}