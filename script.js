const items = [
        {
            n: 'Calabresa Suprema',
            c: 'Pizzas',
            p: 'R$ 49,90',
            i: './assets/imagens/pizza_calabresa.png',
            d: 'Molho especial, mussarela, calabresa e cebola roxa.'
        },
        {
            n: 'Frango Cremoso',
            c: 'Pizzas',
            p: 'R$ 52,90',
            i: './assets/imagens/pizza_frango.png',
            d: 'Frango desfiado, requeijão e toque de orégano.'
        },
        {
            n: 'Quatro Queijos',
            c: 'Pizzas',
            p: 'R$ 56,90',
            i: './assets/imagens/pizza_quatro.png',
            d: 'Mistura intensa de queijos para quem ama cremosidade.'
        },
        {
            n: 'Portuguesa da Casa',
            c: 'Pizzas',
            p: 'R$ 54,90',
            i: './assets/imagens/pizza portugesa.png',
            d: 'Presunto, ovos, cebola, azeitona e muito sabor.'
        },
        {
            n: 'Strogonoff Especial',
            c: 'Pizzas',
            p: 'R$ 58,90',
            i: './assets/imagens/pizza_strogonoff.png',
            d: 'Versão autoral com molho cremoso e cobertura marcante.'
        },
        {
            n: 'Pastel de Carne',
            c: 'Pastéis',
            p: 'R$ 12,90',
            i: './assets/imagens/pastel.png',
            d: 'Massa crocante com recheio bem temperado.'
        },
        {
            n: 'Pastel de Queijo',
            c: 'Pastéis',
            p: 'R$ 11,90',
            i: './assets/imagens/pastel.png',
            d: 'Queijo derretendo e sabor clássico.'
        },
        {
            n: 'Pastel de Frango',
            c: 'Pastéis',
            p: 'R$ 12,90',
            i: './assets/imagens/pastel.png',
            d: 'Frango suculento com tempero equilibrado.'
        },
        {
            n: 'Coxinha de Frango',
            c: 'Salgados',
            p: 'R$ 8,90',
            i: './assets/imagens/coxinha.webp',
            d: 'Casquinha dourada e recheio generoso.'
        },
        {
            n: 'Coxinha de Carne',
            c: 'Salgados',
            p: 'R$ 8,90',
            i: './assets/imagens/coxinha.webp',
            d: 'Versão saborosa para variar o pedido.'
        },
        {
            n: 'Combo Pizza + Refri',
            c: 'Combos',
            p: 'R$ 69,90',
            i: './assets/imagens/pizza e coca.png',
            d: 'Perfeito para dividir sem erro.'
        }
    ], grid = document.getElementById('menuGrid'), filters = document.getElementById('filters'),
    navToggle = document.querySelector('.nav-toggle'), navLinks = document.querySelector('.nav-links'),
    links = [...document.querySelectorAll('.nav-links a[href^="#"]')],
    cats = ['Todos', ...new Set(items.map(({c}) => c))];
const render = (cat = 'Todos') => grid.innerHTML = items.filter(i => cat === 'Todos' || i.c === cat).map(({
                                                                                                              n,
                                                                                                              c,
                                                                                                              p,
                                                                                                              i,
                                                                                                              d
                                                                                                          }) => `<article class="menu-card"><img src="${i}" alt="${n}"><div class="menu-card-content"><span class="pill">${c}</span><div class="menu-top"><h3>${n}</h3><span class="price">${p}</span></div><p>${d}</p></div></article>`).join('');
filters.innerHTML = cats.map((c, i) => `<button class="filter-btn ${!i ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');
filters.addEventListener('click', e => {
    if (!e.target.matches('button')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    render(e.target.dataset.cat)
});
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'))
});
links.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
const obs = new IntersectionObserver(es => es.forEach(({
                                                           isIntersecting,
                                                           target
                                                       }) => document.querySelector(`.nav-links a[href="#${target.id}"]`)?.classList.toggle('active', isIntersecting)), {rootMargin: '-45% 0px -45% 0px'});
[...document.querySelectorAll('main section[id]')].forEach(s => obs.observe(s));
render();
