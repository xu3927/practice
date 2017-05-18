
function component () {
    var element = document.createElement('div');
    element.innerHTML = 'haha';
    return element;
}
document.body.appendChild(component());