
// Simple storefront logic with localStorage cart
const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));

let PRODUCTS = [];
let CART = JSON.parse(localStorage.getItem('dees_cart')||'{}');

const formatNGN = n => new Intl.NumberFormat('en-NG', {style:'currency', currency:'NGN', maximumFractionDigits:0}).format(n);

async function loadProducts(){
  const res = await fetch('products.json');
  PRODUCTS = await res.json();
  renderProducts(PRODUCTS);
  buildCategoryFilter(PRODUCTS);
}

function renderProducts(list){
  const grid = $('#product-grid');
  grid.innerHTML = '';
  list.forEach(p => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div class="imgwrap"><img src="${p.img}" alt="${p.name}"/></div>
      <div class="content">
        <div class="title">${p.name}</div>
        <div class="pills">
          ${p.badges.map(b=>`<span class="pill">${b}</span>`).join('')}
        </div>
        <div class="muted">${p.category} • ⭐ ${p.rating}</div>
        <div class="price">${formatNGN(p.price)}</div>
        <div class="controls">
          <button class="quick">Quick view</button>
          <button class="add">Add to cart</button>
        </div>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> addToCart(p.id));
    el.querySelector('.quick').addEventListener('click', ()=> openModal(p.id));
    grid.appendChild(el);
  });
}

function buildCategoryFilter(list){
  const cats = ['All', ...new Set(list.map(p => p.category))];
  const sel = $('#category');
  sel.innerHTML = cats.map(c=>`<option value="${c}">${c}</option>`).join('');
}

function searchAndFilter(){
  const term = $('#q').value.toLowerCase().trim();
  const cat = $('#category').value;
  const min = parseInt($('#min').value || '0', 10);
  const max = parseInt($('#max').value || '999999999', 10);
  const sorted = $('#sort').value;

  let list = PRODUCTS.filter(p => 
    (cat === 'All' || p.category === cat) &&
    p.price >= min && p.price <= max &&
    (p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
  );

  if(sorted === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if(sorted === 'price-desc') list.sort((a,b)=>b.price-a.price);
  if(sorted === 'rating') list.sort((a,b)=>b.rating-a.rating);

  renderProducts(list);
}

function addToCart(id, qty=1){
  CART[id] = (CART[id]||0) + qty;
  localStorage.setItem('dees_cart', JSON.stringify(CART));
  updateCartBadge();
  showToast('Added to cart');
  renderCartItems();
}

function updateCartBadge(){
  const totalQty = Object.values(CART).reduce((a,b)=>a+b,0);
  $('#cart-count').textContent = totalQty;
}

function openModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  $('#modal-img').src = p.img;
  $('#modal-title').textContent = p.name;
  $('#modal-desc').textContent = p.description;
  $('#modal-price').textContent = formatNGN(p.price);
  $('#modal-add').onclick = ()=> addToCart(p.id);
  $('.modal').classList.add('active');
}
function closeModal(){
  $('.modal').classList.remove('active');
}

function renderCartItems(){
  const wrap = $('#cart-items');
  wrap.innerHTML = '';
  let subtotal = 0;
  for(const [id, qty] of Object.entries(CART)){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) continue;
    subtotal += p.price * qty;
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${p.name}"/>
      <div>
        <div style="font-weight:700">${p.name}</div>
        <div class="muted">${formatNGN(p.price)}</div>
        <div class="qty">
          <button data-op="dec">-</button>
          <span>${qty}</span>
          <button data-op="inc">+</button>
          <button data-op="rm" style="margin-left:auto">Remove</button>
        </div>
      </div>
      <div>${formatNGN(p.price*qty)}</div>
    `;
    item.querySelector('[data-op="inc"]').onclick = ()=>{ addToCart(id,1) };
    item.querySelector('[data-op="dec"]').onclick = ()=>{
      CART[id] = Math.max(0, (CART[id]||0)-1);
      if(CART[id]===0) delete CART[id];
      localStorage.setItem('dees_cart', JSON.stringify(CART));
      updateCartBadge(); renderCartItems();
    };
    item.querySelector('[data-op="rm"]').onclick = ()=>{
      delete CART[id];
      localStorage.setItem('dees_cart', JSON.stringify(CART));
      updateCartBadge(); renderCartItems();
    };
    wrap.appendChild(item);
  }
  $('#subtotal').textContent = formatNGN(subtotal);
  const ship = subtotal>0 ? 2000 : 0;
  $('#shipping').textContent = formatNGN(ship);
  $('#total').textContent = formatNGN(subtotal + ship);
}

function toggleCart(open){
  $('.cart-panel').classList[open?'add':'remove']('active');
}

function showToast(msg){
  const t = $('.toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 1500);
}

function checkout(){
  const items = Object.entries(CART).map(([id, qty])=>{
    const p = PRODUCTS.find(x=>x.id===id);
    return `${p.name} x${qty}`
  }).join(', ');
  alert('Demo checkout. Items: ' + (items||'none'));
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadProducts().then(()=>{ updateCartBadge(); renderCartItems(); });
  $('#search-btn').addEventListener('click', searchAndFilter);
  $('#category').addEventListener('change', searchAndFilter);
  $('#sort').addEventListener('change', searchAndFilter);
  $('#min').addEventListener('input', searchAndFilter);
  $('#max').addEventListener('input', searchAndFilter);
  $('#open-cart').addEventListener('click', ()=> toggleCart(true));
  $('#close-cart').addEventListener('click', ()=> toggleCart(false));
  $('#modal-close').addEventListener('click', closeModal);
  $('#checkout').addEventListener('click', checkout);
});
