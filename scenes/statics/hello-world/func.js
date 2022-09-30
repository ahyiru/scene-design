const container = document.getElementById('hello-world');

const title = document.createElement('h1');
title.setAttribute('class', 'red');
title.innerText = 'Hello World!';
container.appendChild(title);