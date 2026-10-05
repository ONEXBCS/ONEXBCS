/* ONEX — mini Pinokkio die je volgt terwijl je scrolt */
(function(){
  const src=document.getElementById("puppet");
  if(!src)return;
  const T=window.T||(s=>s);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* build: a string from the top of the screen + a copy of the big puppet */
  const wrap=document.createElement("div");
  wrap.className="buddy";wrap.setAttribute("aria-hidden","true");
  wrap.innerHTML='<i class="buddy-str"></i><div class="buddy-bubble" data-noi18n></div>';
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
    const top=70,room=Math.max(0,innerHeight-top-wrap.querySelector(".buddy-pup").getBoundingClientRect().height-40);
    wrap.style.setProperty("--drop",Math.round(20+p*room)+"px");
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
