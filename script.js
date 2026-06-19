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
        function toggleMenu(){var m=document.getElementById('mobile-menu'),o=document.getElementById('menu-overlay');m.classList.toggle('open');o.classList.toggle('hidden');document.body.style.overflow=m.classList.contains('open')?'hidden':''}

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
        if(canvas){var ctx=canvas.getContext('2d');var particles=[];var COUNT=35;function resize(){var h=canvas.parentElement;canvas.width=h.offsetWidth;canvas.height=h.offsetHeight}function create(){return{x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*1.8+.4,sx:(Math.random()-.5)*.25,sy:(Math.random()-.5)*.25,op:Math.random()*.4+.08,col:Math.random()>.5?'#e8b84b':'#c92c1e'}}function init(){particles=[];for(var i=0;i<COUNT;i++)particles.push(create())}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(function(p){p.x+=p.sx;p.y+=p.sy;if(p.x<0||p.x>canvas.width)p.sx*=-1;if(p.y<0||p.y>canvas.height)p.sy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=p.col;ctx.globalAlpha=p.op;ctx.fill()});ctx.globalAlpha=1;requestAnimationFrame(draw)}resize();init();draw();window.addEventListener('resize',function(){resize();init()})}
        function toggleFaq(item){var wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});if(!wasOpen)item.classList.add('open')}
        (function(){var target=new Date();target.setDate(target.getDate()+30);target.setHours(0,0,0,0);var toPersian=function(n){return n.toString().padStart(2,'0').replace(/\d/g,function(d){return'۰۱۲۳۴۵۶۷۸۹'[d]})};function update(){var now=new Date();var diff=target-now;if(diff<0)diff=0;var d=Math.floor(diff/86400000);var h=Math.floor((diff%86400000)/3600000);var m=Math.floor((diff%3600000)/60000);var s=Math.floor((diff%60000)/1000);document.getElementById('cd-days').textContent=toPersian(d);document.getElementById('cd-hours').textContent=toPersian(h);document.getElementById('cd-mins').textContent=toPersian(m);document.getElementById('cd-secs').textContent=toPersian(s)}update();setInterval(update,1000)})();
    
