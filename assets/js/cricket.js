/* ONEX — een krekel die naast het logo op de menubalk zit */
(function(){
  const header=document.querySelector(".header"),logo=header&&header.querySelector(".logo");
  if(!header||!logo)return;
  const T=window.T||(s=>s);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  const el=document.createElement("button");
  el.type="button";el.className="cricket";
  el.setAttribute("aria-label",T("Krekel"));
  el.innerHTML=`<svg viewBox="0 0 72 44" aria-hidden="true">
    <defs>
      <linearGradient id="ckBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd35f"/><stop offset="1" stop-color="#3f8a2e"/></linearGradient>
      <linearGradient id="ckWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b5763d"/><stop offset="1" stop-color="#6b3c1b"/></linearGradient>
    </defs>
    <!-- long antennae swept back -->
    <g class="ck-ant">
      <path d="M50 14C44 2 30 -1 14 4" stroke="#2f5e22" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M53 13C50 0 40 -4 26 -2" stroke="#2f5e22" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    </g>
    <!-- big folded jumping leg (back) -->
    <path d="M22 30L12 18L6 42" stroke="#3f8a2e" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 18L6 42" stroke="#2f5e22" stroke-width="1.4" fill="none" stroke-dasharray="2 2"/>
    <!-- abdomen -->
    <path d="M10 30c0-8 10-12 22-12h10c6 0 9 4 9 9 0 6-5 9-12 9H18c-5 0-8-2-8-6z" fill="url(#ckBody)" stroke="#2a4f1c" stroke-width="1.5"/>
    <path d="M18 23v12M24 21v15M30 20v16" stroke="#2f6b24" stroke-width="1.1" opacity=".6"/>
    <!-- wings -->
    <path class="ck-wing" d="M20 22c6-6 18-7 28-3-6 5-17 7-28 3z" fill="url(#ckWing)" stroke="#4a2a10" stroke-width="1.2"/>
    <!-- small legs on the ground -->
    <path d="M40 34l-2 8M46 34l3 8M32 35l-2 7" stroke="#2f5e22" stroke-width="2" stroke-linecap="round"/>
    <!-- head -->
    <circle cx="54" cy="22" r="10" fill="url(#ckBody)" stroke="#2a4f1c" stroke-width="1.5"/>
    <ellipse cx="57" cy="20" rx="4.6" ry="5.4" fill="#fff" stroke="#2a4f1c" stroke-width="1.1"/>
    <g class="ck-eye"><circle cx="58.4" cy="21" r="2.4" fill="#16210f"/><circle cx="59.2" cy="20" r=".8" fill="#fff"/></g>
    <path d="M57 28q3 2 6-1" stroke="#2a4f1c" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <ellipse cx="61" cy="25.5" rx="2" ry="1.3" fill="#ef8b78" opacity=".6"/>
    <!-- tiny carving pencil he holds -->
    <g transform="rotate(-25 64 33)"><rect x="58" y="32" width="12" height="2.6" rx=".8" fill="#e8b021" stroke="#7a5a08" stroke-width=".6"/><path d="M70 32l3 1.3-3 1.3z" fill="#3d200c"/></g>
    <!-- music notes (chirp) -->
    <g class="ck-notes" fill="#e8b021"><text x="60" y="6" font-size="10" font-family="serif">♪</text><text x="67" y="-2" font-size="8" font-family="serif">♫</text></g>
  </svg><span class="ck-say" data-noi18n></span>`;
  header.appendChild(el);
  const say=el.querySelector(".ck-say");

  /* sit right next to the logo, on the bottom line of the navbar */
  function place(){
    const h=header.getBoundingClientRect(),l=logo.getBoundingClientRect();
    el.style.left=Math.round(l.right-h.left+6)+"px";
  }
  addEventListener("resize",place);addEventListener("load",place);place();

  /* chirps now and then */
  function chirp(){
    if(reduce)return;
    el.classList.remove("chirp");void el.offsetWidth;el.classList.add("chirp");
  }
  setInterval(()=>{if(!document.hidden)chirp()},7000);
  setTimeout(chirp,2500);

  /* click: he hops and says something */
  const LINES=["Tsjirp!","Wees eerlijk, Pinokkio!","Ik hou hem in de gaten.","Klik maar op Contact!"];
  let i=0,t=null,key=null;
  el.addEventListener("click",()=>{
    key=LINES[i++%LINES.length];say.textContent=T(key);
    el.classList.remove("hop","talk");void el.offsetWidth;el.classList.add("hop","talk");chirp();
    clearTimeout(t);t=setTimeout(()=>el.classList.remove("talk"),2200);
  });
  document.addEventListener("langchange",()=>{el.setAttribute("aria-label",T("Krekel"));if(key)say.textContent=T(key)});
})();
