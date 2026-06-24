        (function(){
            var trigger = document.getElementById('heroLogoTrigger');
            if(!trigger) return;
            trigger.addEventListener('mouseenter', function(){
                for(var i=0;i<14;i++){
                    var p = document.createElement('div');
                    p.className = 'hero2-particle';
                    var angle = Math.random()*Math.PI*2;
                    var dist = 60 + Math.random()*70;
                    p.style.setProperty('--px', Math.cos(angle)*dist + 'px');
                    p.style.setProperty('--py', Math.sin(angle)*dist + 'px');
                    p.style.animationDelay = (Math.random()*0.15) + 's';
                    trigger.appendChild(p);
                    (function(el){ setTimeout(function(){ el.remove(); }, 1100); })(p);
                }
            });
        })();
    

        window.addEventListener('load',function(){setTimeout(function(){document.getElementById('pageLoader').classList.add('hidden')},2200)});
        function toggleMenu(){var m=document.getElementById('mobile-menu'),o=document.getElementById('menu-overlay'),isOpen=m.classList.toggle('open');o.classList.toggle('hidden');document.body.style.overflow=isOpen?'hidden':'';if(isOpen){var focusable=m.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');if(focusable.length)focusable[0].focus();m.addEventListener('keydown',trapFocus)}else{m.removeEventListener('keydown',trapFocus)}}
function trapFocus(e){if(e.key!=='Tab')return;var m=document.getElementById('mobile-menu');var focusable=m.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');var first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}

        /* Glow Card — global pointer tracking (vanilla port of GlowCard.tsx) */
        (function(){
            var root = document.documentElement;
            var ticking = false;
            window.addEventListener('pointermove', function(e){
                if(ticking) return;
                ticking = true;
                requestAnimationFrame(function(){
                    root.style.setProperty('--x', e.clientX.toFixed(2));
                    root.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(3));
                    root.style.setProperty('--y', e.clientY.toFixed(2));
                    root.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(3));
                    ticking = false;
                });
            }, {passive:true});
        })();
        var revealEls=document.querySelectorAll('.reveal');
        var rObs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting)en.target.classList.add('active')})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
        revealEls.forEach(function(el){rObs.observe(el)});
        var nav=document.querySelector('nav');
        window.addEventListener('scroll',function(){nav.style.background=window.scrollY>60?'rgba(0,0,0,0.85)':'rgba(0,0,0,0.5)'});
var canvas=document.getElementById('particles-canvas');
if(canvas){var ctx=canvas.getContext('2d');var particles=[];var COUNT=35;var animId=null;var heroVisible=true;function resize(){var h=canvas.parentElement;canvas.width=h.offsetWidth;canvas.height=h.offsetHeight}function create(){return{x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*1.8+.4,sx:(Math.random()-.5)*.25,sy:(Math.random()-.5)*.25,op:Math.random()*.4+.08,col:Math.random()>.5?'#e8b84b':'#c92c1e'}}function init(){particles=[];for(var i=0;i<COUNT;i++)particles.push(create())}function draw(){if(!heroVisible){animId=null;return}ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(function(p){p.x+=p.sx;p.y+=p.sy;if(p.x<0||p.x>canvas.width)p.sx*=-1;if(p.y<0||p.y>canvas.height)p.sy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=p.col;ctx.globalAlpha=p.op;ctx.fill()});ctx.globalAlpha=1;animId=requestAnimationFrame(draw)}resize();init();draw();window.addEventListener('resize',function(){resize();init()});var heroObs=new IntersectionObserver(function(e){heroVisible=e[0].isIntersecting;if(heroVisible&&!animId)draw()},{threshold:0});heroObs.observe(canvas.parentElement)}
        function toggleFaq(item){var wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');i.setAttribute('aria-expanded','false')});if(!wasOpen){item.classList.add('open');item.setAttribute('aria-expanded','true')}}
function toggleAccordion(trigger){var item=trigger.closest('.accordion-item');var content=item.querySelector('.accordion-content');var wasOpen=item.getAttribute('data-state')==='open';item.setAttribute('data-state',wasOpen?'closed':'open');content.style.maxHeight=wasOpen?'0':content.scrollHeight+'px'}
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('faq-item')){e.preventDefault();toggleFaq(e.target)}if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('accordion-trigger')){e.preventDefault();toggleAccordion(e.target)}});
var copyrightEl=document.querySelector('[data-copyright]');if(copyrightEl){var yr=new Date().getFullYear();var pe=yr.toString().replace(/\d/g,function(d){return'۰۱۲۳۴۵۶۷۸۹'[d]});copyrightEl.textContent='© '+pe+' KasbOCup — تمامی حقوق محفوظ است.'}
        (function(){var target=new Date('2026-01-15T00:00:00');var toPersian=function(n){return n.toString().padStart(2,'0').replace(/\d/g,function(d){return'۰۱۲۳۴۵۶۷۸۹'[d]})};function update(){var now=new Date();var diff=target-now;if(diff<0)diff=0;var d=Math.floor(diff/86400000);var h=Math.floor((diff%86400000)/3600000);var m=Math.floor((diff%3600000)/60000);var s=Math.floor((diff%60000)/1000);document.getElementById('cd-days').textContent=toPersian(d);document.getElementById('cd-hours').textContent=toPersian(h);document.getElementById('cd-mins').textContent=toPersian(m);document.getElementById('cd-secs').textContent=toPersian(s)}update();setInterval(update,1000)})();

        /* Magnetic Button Effect — smooth lerp tracking */
        (function(){
            document.querySelectorAll('.btn-magnetic').forEach(function(btn){
                var curX=0,curY=0,targX=0,targY=0,animating=false;
                function animate(){
                    curX+=(targX-curX)*.08;
                    curY+=(targY-curY)*.08;
                    btn.style.transform='translate('+curX.toFixed(1)+'px,'+curY.toFixed(1)+'px)';
                    if(Math.abs(targX-curX)>.3||Math.abs(targY-curY)>.3){requestAnimationFrame(animate)}else{animating=false;curX=0;curY=0;targX=0;targY=0;btn.style.transform=''}
                }
                btn.addEventListener('mousemove',function(e){
                    var rect=btn.getBoundingClientRect();
                    targX=(e.clientX-rect.left-rect.width/2)*.12;
                    targY=(e.clientY-rect.top-rect.height/2)*.12;
                    if(!animating){animating=true;animate()}
                });
                btn.addEventListener('mouseleave',function(){
                    targX=0;targY=0;
                    if(!animating){animating=true;animate()}
                });
            });
        })();
    
