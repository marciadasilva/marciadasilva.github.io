const start = () => {
  detail();
  gallery();
};

const detail = () => {
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const details = Array.from(document.querySelectorAll('.item__details'));
  details.forEach((detail) => setText(detail, url));
};

const setText = async (detail, url) => {
  const element = document.createElement('span');
  try {
    const req = await fetch(url);
    const data = await req.json();
    element.textContent = data[0];
    detail.appendChild(element);
  } catch (error) {
    alert('ERROR!');
  }
};

const gallery = () => {
  const sizes = ['item--medium', 'item--large'];
  const items = Array.from(document.querySelectorAll('.item'));
  items.map((item) => setSize(item, sizes));
};

const setSize = (item, sizes) => {
  const random = Math.floor(Math.random() * sizes.length + 1);

  if (random !== sizes.length + 1) {
    item.classList.add(sizes[random]);
  }

  item.addEventListener('click', () => {
    item.classList.toggle('item--full');
  });

  const position = Math.floor(Math.random() * 500);

  item.setAttribute(
    'style',
    `background-image: url(https://picsum.photos/1024/768/?image=${position})`
  );
};

window.onload = start();
