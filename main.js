const app = document.getElementById('app')
const grid = document.createElement('div')
grid.setAttribute('class', 'grid')

const nav = document.createElement('nav')
nav.setAttribute('class', 'nav')
app.appendChild(nav)

const nav1 = document.createElement('a')
nav1.setAttribute('href', '#')
nav1.setAttribute('class', 'nav1')
nav1.innerText = "Home"
nav.appendChild(nav1)

const nav2 = document.createElement('a')
nav2.setAttribute('href', '#')
nav2.setAttribute('class', 'nav1')
nav2.innerText = "Kontakt"
nav.appendChild(nav2)

const nav3= document.createElement('a')
nav3.setAttribute('href', '#')
nav3.setAttribute('class', 'nav1')
nav3.innerText = "Adres"
nav.appendChild(nav3)








const papa = document.createElement('div')
app.appendChild(papa)
papa.appendChild(grid)
papa.setAttribute('class', 'papa')

const img1 = document.createElement('img')
img1.setAttribute('class', 'imagetrashcancat')
grid.appendChild(img1)
img1.src = "cattrash.jpg"
const img2 = document.createElement('img')
img2.setAttribute('class', 'imagetrashcancat')
grid.appendChild(img2)
img2.src = "samoyed.jpg"
const div1 = document.createElement('div')
div1.setAttribute('class', 'grid2')
div1.appendChild(img1)
div1.appendChild(img2)
grid.appendChild(div1)

const p1 = document.createElement('p')
p1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure laudantium sint fugiat voluptas veniam esse doloremque quaerat. Sunt nobis natus cupiditate reiciendis, minima similique, necessitatibus libero, quae ipsum dolorem aspernatur consequuntur ratione placeat? Quisquam nostrum modi autem ut molestiae pariatur hic commodi nam neque ex optio dicta, harum ab accusamus atque vero delectus voluptatum rem iusto aut molestias nulla qui? Blanditiis praesentium totam modi fugiat, soluta mollitia voluptatem autem, iste necessitatibus sed ipsum enim dolorem, porro excepturi obcaecati alias similique exercitationem accusamus doloremque atque voluptates dicta? Quae libero non pariatur eaque assumenda iure, aliquid laborum aliquam ullam qui illo."
div1.appendChild(p1)

const div2 = document.createElement('div')
grid.appendChild(div2)
const span1 = document.createElement('span')
span1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure laudantium sint fugiat voluptas veniam esse doloremque quaerat. Sunt nobis natus cupiditate reiciendis, minima similique, necessitatibus libero, quae ipsum dolorem aspernatur consequuntur ratione placeat? Quisquam nostrum modi autem ut molestiae pariatur hic commodi nam neque ex optio dicta, harum ab accusamus atque vero delectus voluptatum rem iusto aut molestias nulla qui? Blanditiis praesentium totam modi fugiat, soluta mollitia voluptatem autem, iste necessitatibus sed ipsum enim dolorem, porro excepturi obcaecati alias similique exercitationem accusamus doloremque atque voluptates dicta? Quae libero non pariatur eaque assumenda iure, aliquid laborum aliquam ullam qui illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure laudantium sint fugiat voluptas veniam esse doloremque quaerat. Sunt nobis natus cupiditate reiciendis, minima similique, necessitatibus libero, quae ipsum dolorem aspernatur consequuntur ratione placeat? Quisquam nostrum modi autem ut molestiae pariatur hic commodi nam neque ex optio dicta, harum ab accusamus atque vero delectus voluptatum rem iusto aut molestias nulla qui? Blanditiis praesentium totam modi fugiat, soluta mollitia voluptatem autem, iste necessitatibus sed ipsum enim dolorem, porro excepturi obcaecati alias similique exercitationem accusamus doloremque atque voluptates dicta? Quae libero non pariatur eaque assumenda iure, aliquid laborum aliquam ullam qui illo."
div2.appendChild(span1)













const footer = document.createElement('footer')
footer.setAttribute('class', 'footer')
app.appendChild(footer)
footer.innerText = "Alicja Śpiewak, Mateusz Prochowski, Marta Żuber, Dawid Mikołajczyk 2021"