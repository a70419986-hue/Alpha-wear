const products=[
{name:'Classic Leather Wallet',cat:'Wallets',price:1499,old:2999,badge:'50% OFF',image:'https://images.pexels.com/photos/3434522/pexels-photo-3434522.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Premium Card Holder',cat:'Wallets',price:1199,old:2000,badge:'SALE',image:'https://images.pexels.com/photos/3434522/pexels-photo-3434522.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Executive Belt',cat:'Belts',price:1299,old:2499,badge:'NEW',image:'https://images.pexels.com/photos/4493694/pexels-photo-4493694.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Urban Runner',cat:'Shoes',price:3499,old:5000,badge:'SALE',image:'https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Aviator Black',cat:'Sunglasses',price:1799,old:2999,badge:'SALE',image:'https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Signature Noir',cat:'Perfumes',price:2499,old:4000,badge:'NEW',image:'https://images.pexels.com/photos/4493694/pexels-photo-4493694.jpeg?auto=compress&cs=tinysrgb&w=900'},
{name:'Alpha Classic',cat:'Watches',price:3000,old:5000,badge:'SALE',image:'https://images.pexels.com/photos/34479698/pexels-photo-34479698.jpeg?auto=compress&cs=tinysrgb&w=900'}
];
const cat=document.body.dataset.category;document.title=`${cat} | Alpha Wear`;
const money=n=>'PKR '+Number(n).toLocaleString('en-PK');
const list=products.filter(p=>p.cat===cat);document.querySelector('#categoryProducts').innerHTML=list.map(p=>`<article class="product"><span class="badge">${p.badge}</span><div class="product-img"><img src="${p.image}" alt="${p.name} - Alpha Wear" loading="lazy"></div><div class="product-info"><h3>${p.name}</h3><p>${p.cat} · Alpha Wear</p><div class="price"><span class="old">${money(p.old)}</span>${money(p.price)}</div><a class="add" style="display:block;text-align:center;margin-top:13px;text-decoration:none" href="https://wa.me/923321957558?text=${encodeURIComponent(`Hello Alpha Wear! I want to order ${p.name} for ${money(p.price)}.`)}" target="_blank" rel="noopener">ORDER ON WHATSAPP</a></div></article>`).join('');