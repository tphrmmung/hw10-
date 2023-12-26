const usersList = document.querySelector('.user-list');

function makeElement(tag, attr_n, attr_v, content) {
    let output = document.createElement(tag);
    (!!attr_n) && output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => {
        for (let el of data) {
            const li = makeElement('li', 'data-user-id', el.id, `${el.name} / ${el.email}`);
            usersList.append(li);
        }
})
    
   


