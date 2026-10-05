/* ONEX — de krekel: zit links op de footer op een houten klos garen en speelt viool (alleen op computer) */
(function(){
  const foot=document.querySelector(".foot");
  if(!foot)return;
  const T=window.T||(s=>s);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  const el=document.createElement("button");
  el.type="button";el.className="cricket";
  el.setAttribute("aria-label",T("Krekel"));
  el.innerHTML=`<svg viewBox="-6 -14 108 80" aria-hidden="true">
    <defs>
      <linearGradient id="ckBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd35f"/><stop offset="1" stop-color="#3f8a2e"/></linearGradient>
      <linearGradient id="ckWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b5763d"/><stop offset="1" stop-color="#6b3c1b"/></linearGradient>
      <linearGradient id="ckBox" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3a466"/><stop offset="1" stop-color="#7e4a22"/></linearGradient>
      <linearGradient id="ckFid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c46a2a"/><stop offset="1" stop-color="#6b2f0e"/></linearGradient>
    </defs>
    <!-- big wooden spool of puppet string he sits on -->
    <g class="ck-box">
      <rect x="10" y="44" width="58" height="16" fill="#c9433a" stroke="#6b1a14" stroke-width="1.2"/>
      <path d="M12 47h54M12 50.5h54M12 54h54M12 57.5h54" stroke="#e8675c" stroke-width="1.1" opacity=".8"/>
      <path d="M14 44v16M22 44v16M30 44v16M38 44v16M46 44v16M54 44v16M62 44v16" stroke="#8e2a22" stroke-width=".6" opacity=".45"/>
      <ellipse cx="9" cy="52" rx="4.5" ry="11" fill="url(#ckBox)" stroke="#5a3317" stroke-width="1.3"/>
      <ellipse cx="69" cy="52" rx="4.5" ry="11" fill="url(#ckBox)" stroke="#5a3317" stroke-width="1.3"/>
      <ellipse cx="69" cy="52" rx="1.6" ry="3.6" fill="#5a3317"/>
      <!-- loose thread end -->
      <path d="M66 59c4 3 6 4 9 3s5-2 7 0" stroke="#c9433a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    </g>
    <!-- the cricket -->
    <g class="ck-bug">
      <g class="ck-ant">
        <path d="M50 14C44 2 30 -1 14 4" stroke="#2f5e22" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <path d="M53 13C50 0 40 -4 26 -2" stroke="#2f5e22" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M22 30L12 18L8 44" stroke="#3f8a2e" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 30c0-8 10-12 22-12h10c6 0 9 4 9 9 0 6-5 9-12 9H18c-5 0-8-2-8-6z" fill="url(#ckBody)" stroke="#2a4f1c" stroke-width="1.5"/>
      <path d="M18 23v12M24 21v15M30 20v16" stroke="#2f6b24" stroke-width="1.1" opacity=".6"/>
      <path class="ck-wing" d="M20 22c6-6 18-7 28-3-6 5-17 7-28 3z" fill="url(#ckWing)" stroke="#4a2a10" stroke-width="1.2"/>
      <path d="M40 35l-2 9M46 35l2 9M32 36l-2 8" stroke="#2f5e22" stroke-width="2" stroke-linecap="round"/>
      <circle cx="54" cy="22" r="10" fill="url(#ckBody)" stroke="#2a4f1c" stroke-width="1.5"/>
      <ellipse cx="57" cy="20" rx="4.6" ry="5.4" fill="#fff" stroke="#2a4f1c" stroke-width="1.1"/>
      <g class="ck-eye"><circle cx="58.4" cy="21" r="2.4" fill="#16210f"/><circle cx="59.2" cy="20" r=".8" fill="#fff"/></g>
      <path d="M57 28q3 2 6-1" stroke="#2a4f1c" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="61" cy="25.5" rx="2" ry="1.3" fill="#ef8b78" opacity=".6"/>
      <!-- tiny fiddle under his chin -->
      <g transform="translate(10 8) rotate(35 70 30)">
        <path d="M70 22.5c3.2 0 4.6 2 4.6 4 0 1.4-1 2.2-1.6 3 .8.8 2.6 2 2.6 4.6 0 3.2-2.6 5.4-5.6 5.4s-5.6-2.2-5.6-5.4c0-2.6 1.8-3.8 2.6-4.6-.6-.8-1.6-1.6-1.6-3 0-2 1.4-4 4.6-4z" fill="url(#ckFid)" stroke="#3d1a06" stroke-width="1"/>
        <path d="M67.6 31.5q-.8 2 0 4M72.4 31.5q.8 2 0 4" stroke="#2a1206" stroke-width=".8" fill="none"/>
        <path d="M70 24v12" stroke="#e6dfcf" stroke-width=".5"/>
        <rect x="68.6" y="36.4" width="2.8" height="1.4" rx=".4" fill="#2a1206"/>
        <rect x="69" y="12" width="2.4" height="13" rx="1" fill="#3d1a06"/>
        <circle cx="70.2" cy="11.5" r="1.8" fill="#3d1a06"/>
      </g>
      <!-- bow -->
      <!-- arm holding the fiddle, arm with the bow -->
      <path d="M50 30q10 2 16 4" stroke="#3f8a2e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M46 34q8 8 20 10" stroke="#3f8a2e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <g class="ck-bow"><path d="M64 48L98 30" stroke="#e6dfcf" stroke-width="1.2"/><path d="M64 48L98 30" stroke="#6b3c1b" stroke-width=".6" transform="translate(0 -1.6)"/></g>
      <circle cx="66" cy="45" r="2.6" fill="url(#ckBody)" stroke="#2a4f1c" stroke-width="1"/>
    </g>
    <!-- music notes -->
    <g class="ck-notes" fill="#e8b021" font-family="serif"><text x="84" y="10" font-size="11">♪</text><text x="92" y="0" font-size="9">♫</text><text x="76" y="-4" font-size="8">♪</text></g>
  </svg><span class="ck-say" data-noi18n></span>`;
  foot.appendChild(el);
  const say=el.querySelector(".ck-say");

  let t=null,key=null;
  function talk(k){key=k;say.textContent=T(k);el.classList.add("talk");clearTimeout(t);t=setTimeout(()=>el.classList.remove("talk"),2600)}
  function play(){if(reduce)return;el.classList.remove("play");void el.offsetWidth;el.classList.add("play")}

  /* plays a little tune now and then */
  setInterval(()=>{if(!document.hidden&&el.offsetParent)play()},6000);

  /* says hi when you reach the bottom of the page */
  let greeted=false;
  if("IntersectionObserver" in window){
    new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!greeted){greeted=true;play();talk("Je hebt alles gezien! Tsjirp!")}}),{threshold:.5}).observe(el);
  }

  /* click: he just hops */
  el.addEventListener("click",()=>{
    el.classList.remove("hop");void el.offsetWidth;el.classList.add("hop");
  });
  document.addEventListener("langchange",()=>{el.setAttribute("aria-label",T("Krekel"));if(key)say.textContent=T(key)});
})();
