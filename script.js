const data=[
['Classic Leather Wallet','Wallets','PKR 1,499','PKR 2,999','01','50% OFF'],
['Executive Belt','Belts','PKR 1,299','PKR 2,499','02','NEW'],
['Urban Runner','Shoes','PKR 3,499','PKR 5,000','03','SALE'],
['Aviator Black','Sunglasses','PKR 1,799','PKR 2,999','04','SALE'],
['Signature Noir','Perfumes','PKR 2,499','PKR 4,000','05','NEW'],
['Alpha Classic','Watches','PKR 3,000','PKR 5,000','06','SALE'],
['Essential Cap','Caps','PKR 999','PKR 1,499','07','NEW'],
['Premium Card Holder','Wallets','PKR 1,199','PKR 2,000','08','SALE']
];
let current='All',cart=[];
function filter(c){current=c;document.querySelectorAll('.filters button').forEach(b=>b.classList.toggle('active',b.textContent===c));render();document.querySelector('#shop').scrollIntoView({behavior:'smooth'});}
function render(){const q=(document.querySelector('#search')?.value||'').toLowerCase();const list=data.filter(p=>(current==='All'||p[1]===current)&&p.join(' ').toLowerCase().includes(q));document.querySelector('#products').innerHTML=list.map((p,i)=>`<article class="product"><span class="badge">${p[5]}</span><div class="product-img">${['▣','◈','◉','◇','✦','◌','△','▱'][i%8]}</div><div class="product-info"><h3>${p[0]}</h3><p>${p[1]} · Alpha Wear</p><div class="price"><span class="old">${p[3]}</span>${p[2]} <button class="add" onclick="add(${data.indexOf(p)})">ADD</button></div></div></article>`).join('')||'<div class="empty">No products found.</div>';}
function add(i){cart.push(data[i]);document.querySelector('#count').textContent=cart.length;showToast(data[i][0]+' added to bag');}
function openCart(){const el=document.querySelector('#cart');el.style.display='flex';document.querySelector('#cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p[0]}</span><b>${p[2]}</b></div>`).join(''):'<div class="empty">Your bag is empty.</div>';document.querySelector('#total').textContent='PKR '+cart.reduce((s,p)=>s+parseInt(p[2].replace(/\D/g,'')),0).toLocaleString();}
function closeCart(){document.querySelector('#cart').style.display='none'}
function focusSearch(){document.querySelector('#search').focus();document.querySelector('#shop').scrollIntoView({behavior:'smooth'})}
function showToast(t){const e=document.querySelector('#toast');e.textContent=t;e.style.display='block';clearTimeout(window.tt);window.tt=setTimeout(()=>e.style.display='none',2200)}
render();
