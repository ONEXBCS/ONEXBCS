/* ONEX — mini Pinokkio die je volgt terwijl je scrolt */
(function(){
  const src=document.getElementById("puppet");
  if(!src)return;
  const T=window.T||(s=>s);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* build: a string from the top of the screen + a copy of the big puppet */
  const wrap=document.createElement("div");
  wrap.className="buddy";wrap.setAttribute("aria-hidden","true");
  wrap.innerHTML=`<svg class="toymaker" viewBox="0 0 200 112" aria-hidden="true">
  <defs>
    <radialGradient id="mkSkin" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#ffd9bd"/><stop offset=".7" stop-color="#f0b48e"/><stop offset="1" stop-color="#d98e66"/></radialGradient>
    <linearGradient id="mkWood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3a466"/><stop offset="1" stop-color="#7e4a22"/></linearGradient>
    <linearGradient id="mkPants" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3360"/><stop offset="1" stop-color="#241f3d"/></linearGradient>
    <pattern id="mkStripe" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(90)"><rect width="8" height="8" fill="#ece6d8"/><rect width="4" height="8" fill="#d6312a"/></pattern>
    <linearGradient id="mkHat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4b8be8"/><stop offset="1" stop-color="#1f4f9e"/></linearGradient>
  </defs>
  <!-- legs kicking up in the air behind him -->
  <g class="mk-leg mk-leg1">
    <path d="M58 74H34" stroke="url(#mkPants)" stroke-width="13" stroke-linecap="round"/>
    <path d="M34 74L22 44" stroke="url(#mkPants)" stroke-width="11" stroke-linecap="round"/>
    <path d="M14 40c0-6 6-9 12-7l6 3c3 2 2 6-2 6H16c-1 0-2-1-2-2z" fill="#d6312a" stroke="#3d200c" stroke-width="1.6"/>
    <path d="M15 42h16" stroke="#ece6d8" stroke-width="2.4"/>
  </g>
  <g class="mk-leg mk-leg2">
    <path d="M62 76H42" stroke="url(#mkPants)" stroke-width="13" stroke-linecap="round"/>
    <path d="M42 76l8-30" stroke="url(#mkPants)" stroke-width="11" stroke-linecap="round"/>
    <path d="M42 40c1-6 8-8 13-5l5 4c3 2 1 6-3 5l-13-1c-1 0-2-2-2-3z" fill="#d6312a" stroke="#3d200c" stroke-width="1.6"/>
    <path d="M43 42l15 1" stroke="#ece6d8" stroke-width="2.4"/>
  </g>
  <!-- body lying on the bar: striped shirt, braces -->
  <path d="M52 80c-2-16 10-26 32-26h22c18 0 28 10 28 26z" fill="url(#mkStripe)" stroke="#3d200c" stroke-width="1.8"/>
  <path d="M74 56l-6 24M104 55l2 25" stroke="#e8b021" stroke-width="4" stroke-linecap="round"/>
  <circle cx="68" cy="78" r="2" fill="#7a5a08"/><circle cx="106" cy="78" r="2" fill="#7a5a08"/>
  <!-- arms hanging over the edge, holding the reel -->
  <path class="mk-arm" d="M118 66c8 4 12 14 12 24" stroke="url(#mkStripe)" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M118 66c8 4 12 14 12 24" stroke="#3d200c" stroke-width="1.4" fill="none" opacity=".35"/>
  <!-- head (big and round) -->
  <g class="mk-head">
    <ellipse cx="128" cy="50" rx="6" ry="8" fill="url(#mkSkin)" stroke="#3d200c" stroke-width="1.6"/>
    <ellipse cx="180" cy="50" rx="6" ry="8" fill="url(#mkSkin)" stroke="#3d200c" stroke-width="1.6"/>
    <circle cx="154" cy="48" r="27" fill="url(#mkSkin)" stroke="#3d200c" stroke-width="1.8"/>
    <!-- short neat beard -->
    <path d="M129 52c1 16 11 25 25 25s24-9 25-25c-4 6-9 8-14 8-4-4-18-4-22 0-5 0-10-2-14-8z" fill="#ddd9d2" stroke="#9c978f" stroke-width="1.4"/>
    <path d="M140 66q2 4 1 7M154 69v6M168 66q-2 4-1 7" stroke="#b9b4ac" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <!-- cheeks -->
    <ellipse cx="138" cy="54" rx="5.5" ry="3.6" fill="#ef8b78" opacity=".55"/>
    <ellipse cx="170" cy="54" rx="5.5" ry="3.6" fill="#ef8b78" opacity=".55"/>
    <!-- smile -->
    <path d="M146 62q8 6 16 0" stroke="#7a3b2a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <!-- nose -->
    <ellipse cx="154" cy="54" rx="6" ry="5" fill="#f19b84" stroke="#a2543f" stroke-width="1.2"/>
    <ellipse cx="152" cy="52.5" rx="2" ry="1.3" fill="#fff" opacity=".6"/>
    <!-- bushy brows -->
    <path d="M136 36q6-5 13-1M159 35q7-4 13 1" stroke="#9c978f" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <!-- big round glasses, eyes looking down at Pinokkio -->
    <circle cx="144" cy="45" r="8" fill="#ffffff" fill-opacity=".25" stroke="#3d200c" stroke-width="2"/>
    <circle cx="164" cy="45" r="8" fill="#ffffff" fill-opacity=".25" stroke="#3d200c" stroke-width="2"/>
    <path d="M152 45h4" stroke="#3d200c" stroke-width="2"/>
    <g class="mk-eyes"><circle cx="143" cy="48" r="2.6" fill="#2a1d14"/><circle cx="163" cy="48" r="2.6" fill="#2a1d14"/>
      <circle cx="144" cy="47" r=".9" fill="#fff"/><circle cx="164" cy="47" r=".9" fill="#fff"/></g>
    <!-- floppy beanie -->
    <path d="M127 38c0-18 12-28 28-28 14 0 24 8 26 22z" fill="url(#mkHat)" stroke="#173a73" stroke-width="1.8"/>
    <path d="M135 24q18-6 40 2" stroke="#ece6d8" stroke-width="3.2" fill="none"/>
    <path d="M155 10c10-6 22-4 28 6" stroke="url(#mkHat)" stroke-width="9" fill="none" stroke-linecap="round"/>
    <circle cx="186" cy="20" r="6" fill="#d6312a" stroke="#7a1a14" stroke-width="1.4"/>
    <rect x="125" y="32" width="58" height="9" rx="4" fill="#e8b021" stroke="#7a5a08" stroke-width="1.4" transform="rotate(-6 154 36)"/>
  </g>
  <!-- reel -->
  <g class="mk-spool">
    <circle cx="140" cy="98" r="10" fill="url(#mkWood)" stroke="#3d200c" stroke-width="1.6"/>
    <circle cx="140" cy="98" r="6.5" fill="none" stroke="#e6dfcf" stroke-width="2.4" stroke-dasharray="3 1.6"/>
    <path d="M140 88v20M130 98h20" stroke="#5a3317" stroke-width="1.5"/>
    <circle cx="140" cy="98" r="2.4" fill="#3d200c"/>
  </g>
  <!-- hands -->
  <circle cx="131" cy="95" r="5.5" fill="url(#mkSkin)" stroke="#3d200c" stroke-width="1.5"/>
  <circle class="mk-hand-crank" cx="147" cy="91" r="5" fill="url(#mkSkin)" stroke="#3d200c" stroke-width="1.5"/>
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
    const top=70+wrap.querySelector(".toymaker").getBoundingClientRect().height*0.35,room=Math.max(0,innerHeight-top-wrap.querySelector(".buddy-pup").getBoundingClientRect().height-40);
    wrap.style.setProperty("--drop",Math.round(20+p*room)+"px");
    const drop=20+p*room;
    wrap.style.setProperty("--spin",(drop*4).toFixed(1)+"deg");
    const ang=drop*4*Math.PI/180;
    const hand=wrap.querySelector(".mk-hand-crank");
    if(hand){hand.setAttribute("cx",(140+8*Math.cos(ang-Math.PI/4)).toFixed(1));hand.setAttribute("cy",(98+8*Math.sin(ang-Math.PI/4)).toFixed(1));}
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
