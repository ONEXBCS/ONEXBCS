/* ONEX — mini Pinokkio die je volgt terwijl je scrolt */
(function(){
  const src=document.getElementById("puppet");
  if(!src)return;
  const T=window.T||(s=>s);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* build: a string from the top of the screen + a copy of the big puppet */
  const wrap=document.createElement("div");
  wrap.className="buddy";wrap.setAttribute("aria-hidden","true");
  wrap.innerHTML=`<svg class="maker" viewBox="0 0 140 124" aria-hidden="true">
  <defs>
    <radialGradient id="mkSkin" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#f6c9a4"/><stop offset="1" stop-color="#d9946b"/></radialGradient>
    <linearGradient id="mkSpool" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3a466"/><stop offset="1" stop-color="#7e4a22"/></linearGradient>
  </defs>
  <!-- wooden beam he sits behind -->
  <rect x="0" y="104" width="140" height="10" rx="4" fill="url(#mkSpool)" stroke="#5a3317" stroke-width="1.2"/>
  <!-- body: mustard shirt, dark green apron -->
  <path d="M14 108c2-16 14-26 34-28h30c20 2 32 12 34 28z" fill="#d8a03a" stroke="#6b4a10" stroke-width="1.5"/>
  <path d="M40 108l4-24h40l4 24z" fill="#2f5d4a" stroke="#183528" stroke-width="1.5"/>
  <path d="M44 84l-6-6M84 84l6-6" stroke="#183528" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="56" y="92" width="16" height="9" rx="1.5" fill="#24493a" stroke="#183528"/>
  <!-- head -->
  <ellipse cx="88" cy="44" rx="5" ry="7" fill="url(#mkSkin)" stroke="#7a4a2c" stroke-width="1.2"/>
  <ellipse cx="40" cy="44" rx="5" ry="7" fill="url(#mkSkin)" stroke="#7a4a2c" stroke-width="1.2"/>
  <circle cx="64" cy="44" r="24" fill="url(#mkSkin)" stroke="#7a4a2c" stroke-width="1.5"/>
  <!-- full grey beard -->
  <path d="M41 48c2 22 12 34 23 34s21-12 23-34c-6 6-12 8-23 8s-17-2-23-8z" fill="#c9c6c0" stroke="#8d8a84" stroke-width="1.3"/>
  <path d="M52 64q3 8 2 14M64 66v13M76 64q-3 8-2 14" stroke="#a5a29c" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <!-- mouth smile in the beard -->
  <path d="M57 58q7 5 14 0" stroke="#7a3b2a" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- round nose -->
  <ellipse cx="64" cy="50" rx="5.5" ry="4.8" fill="#e58f78" stroke="#a2543f" stroke-width="1"/>
  <!-- round glasses + eyes -->
  <circle cx="55" cy="41" r="6.5" fill="#ffffff22" stroke="#3a2a1e" stroke-width="1.8"/>
  <circle cx="73" cy="41" r="6.5" fill="#ffffff22" stroke="#3a2a1e" stroke-width="1.8"/>
  <path d="M61.5 41h5" stroke="#3a2a1e" stroke-width="1.8"/>
  <g class="mk-eyes"><circle cx="56" cy="42" r="2" fill="#2a1d14"/><circle cx="74" cy="42" r="2" fill="#2a1d14"/></g>
  <path d="M50 33q5-3 10 0M68 33q5-3 10 0" stroke="#8d8a84" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- knitted beanie -->
  <path d="M40 34c0-16 11-26 24-26s24 10 24 26z" fill="#2f6fd0" stroke="#173a73" stroke-width="1.5"/>
  <path d="M46 20q18-6 36 0M42 27q22-7 44 0" stroke="#2559ad" stroke-width="1.4" fill="none"/>
  <rect x="38" y="29" width="52" height="8" rx="3" fill="#e8b021" stroke="#7a5a08" stroke-width="1.2"/>
  <circle cx="64" cy="8" r="5" fill="#e8b021" stroke="#7a5a08" stroke-width="1.2"/>
  <!-- carpenter pencil behind ear -->
  <g transform="rotate(-35 92 36)"><rect x="84" y="34" width="18" height="4" rx="1" fill="#f2c94c" stroke="#7a5a08" stroke-width=".8"/><path d="M102 34l4 2-4 2z" fill="#3a2a1e"/></g>
  <!-- arms reaching for the spool -->
  <path class="mk-arm-l" d="M30 92c10 6 30 10 54 10" stroke="#d8a03a" stroke-width="11" fill="none" stroke-linecap="round"/>
  <path class="mk-arm-r" d="M110 90c-2 6-4 10-6 12" stroke="#d8a03a" stroke-width="11" fill="none" stroke-linecap="round"/>
  <!-- the spool / reel -->
  <g class="mk-spool">
    <circle cx="96" cy="104" r="12" fill="url(#mkSpool)" stroke="#5a3317" stroke-width="1.5"/>
    <circle cx="96" cy="104" r="8" fill="none" stroke="#e6dfcf" stroke-width="2.4" stroke-dasharray="3 1.5"/>
    <path d="M96 93v22M85 104h22" stroke="#5a3317" stroke-width="1.6"/>
    <circle cx="96" cy="104" r="2.6" fill="#3a2a1e"/>
    <circle cx="104" cy="96" r="2.4" fill="#5a3317"/>
  </g>
  <!-- hands -->
  <circle cx="86" cy="102" r="6" fill="url(#mkSkin)" stroke="#7a4a2c" stroke-width="1.2"/>
  <circle class="mk-hand-crank" cx="104" cy="96" r="5.5" fill="url(#mkSkin)" stroke="#7a4a2c" stroke-width="1.2"/>
</svg>`+'<i class="buddy-str"></i><div class="buddy-bubble" data-noi18n></div>';
  const svg=src.cloneNode(true);
  svg.removeAttribute("id");svg.removeAttribute("role");svg.removeAttribute("aria-label");
  svg.setAttribute("class","buddy-pup");
  svg.setAttribute("viewBox","40 20 240 470");
  svg.querySelectorAll(".str,.bar,defs").forEach(n=>n.remove());
  svg.style.cssText="--nose:1.15";
  wrap.appendChild(svg);
  document.body.appendChild(wrap);
  const bubble=wrap.querySelector(".buddy-bubble");

  /* what he says in each section */
  const LINES={
    wie:"Dit ben ik!",
    skills:"Kijk, mijn skills!",
    bouwen:"Wat zal ik voor je bouwen?",
    socials:"Volg me!",
    contact:"Stuur me een brief!"
  };
  const ids=Object.keys(LINES);
  let current=null,key=null,hideT=null;

  function say(k){
    key=k;bubble.textContent=T(LINES[k]||k);
    wrap.classList.add("talk");
    clearTimeout(hideT);hideT=setTimeout(()=>wrap.classList.remove("talk"),2600);
    if(!reduce){svg.classList.remove("wave");void svg.getBoundingClientRect();svg.classList.add("wave");}
  }

  function update(){
    const max=document.documentElement.scrollHeight-innerHeight;
    const p=max>0?Math.min(1,scrollY/max):0;
    /* hidden while the big puppet on home is visible */
    const home=document.getElementById("home");
    const show=home?home.getBoundingClientRect().bottom<innerHeight*0.35:true;
    wrap.classList.toggle("on",show);
    /* string gets longer the further you scroll */
    const top=70+wrap.querySelector(".maker").getBoundingClientRect().height,room=Math.max(0,innerHeight-top-wrap.querySelector(".buddy-pup").getBoundingClientRect().height-40);
    wrap.style.setProperty("--drop",Math.round(20+p*room)+"px");
    const drop=20+p*room;
    wrap.style.setProperty("--spin",(drop*4).toFixed(1)+"deg");
    const ang=drop*4*Math.PI/180;
    const hand=wrap.querySelector(".mk-hand-crank");
    if(hand){hand.setAttribute("cx",(96+8*Math.cos(ang-Math.PI/4)).toFixed(1));hand.setAttribute("cy",(104+8*Math.sin(ang-Math.PI/4)).toFixed(1));}
    /* which section is in the middle of the screen */
    let sec=null;
    for(const id of ids){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<innerHeight*0.5&&r.bottom>innerHeight*0.5)sec=id;}
    if(show&&sec&&sec!==current){current=sec;say(sec);}
    if(!show)current=null;
  }

  let ticking=false;
  addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(()=>{ticking=false;update()})}},{passive:true});
  addEventListener("resize",update);
  document.addEventListener("langchange",()=>{if(key)bubble.textContent=T(LINES[key]||key)});

  /* click him: back to the top */
  svg.style.pointerEvents="auto";
  svg.addEventListener("click",()=>{bubble.textContent=T("Terug naar boven!");wrap.classList.add("talk");scrollTo({top:0,behavior:reduce?"auto":"smooth"})});

  update();
})();
