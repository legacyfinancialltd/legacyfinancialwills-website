document.querySelectorAll('[data-copy]').forEach(function(b){
  b.addEventListener('click', function(){
    var v=b.getAttribute('data-copy');
    if(navigator.clipboard){navigator.clipboard.writeText(v).then(function(){b.textContent='Copied'},function(){b.textContent=v})}else{b.textContent=v}
  });
});
var btn=document.getElementById('menuBtn');
if(btn){btn.addEventListener('click',function(){
  var nav=document.getElementById('mainNav');var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));
});}
