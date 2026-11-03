import {profile,entries,categories} from './data.mjs';

const main=document.querySelector('main');
const panel=document.querySelector('#detail-panel');
const panelBody=document.querySelector('#panel-body');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
let cleanupAtom=()=>{},renderedPath='',panelOpener=null,navigationToken=0;
const arrow='<span aria-hidden="true">↗</span>';
const documentIcon='<svg class="detail-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></svg>';
const panelIcon='<svg class="detail-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M13 4v16M6.5 9h3M6.5 13h3"/><path d="M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z" fill="currentColor" opacity=".1" stroke="none"/></svg>';
const ext=(link)=>`<a class="text-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ${arrow}</a>`;
const tags=(entry)=>`<div class="tags">${entry.tags.map(t=>`<span>${t}</span>`).join('')}</div>`;
const route=(id)=>`#/${entries[id].category}/${id}`;

function home(){
  return `<section class="home-hero">
    <div class="hero-copy"><span class="eyebrow"><span class="status-dot"></span> PORTFOLIO</span><h1>경험이 모여,<br>하나의 <span>나로.</span></h1><p class="hero-description">${profile.intro}</p><p class="hero-person">${profile.english}<span>${profile.role}</span></p><a href="#/cv" class="quiet-link">CV 한눈에 보기 ${arrow}</a></div>
    <div class="atom-stage" aria-label="원자형 포트폴리오 탐색">
      <div class="atom-halo" aria-hidden="true"></div><div class="fallback-orbits" aria-hidden="true"><i></i><i></i><i></i></div><canvas aria-hidden="true"></canvas>
      <a class="atom-node core-node" data-node="cv" data-atom-link href="#/cv" style="left:50%;top:50%"><span class="node-sphere"></span><span class="node-label"><strong>김두호</strong><span>CV 전체 보기 ↗</span></span></a>
      <a class="atom-node electron-node lilac" data-node="projects" data-atom-link href="#/projects" style="left:80%;top:27%"><span class="node-sphere"></span><span class="node-label"><strong>프로젝트</strong><span>만들어 온 서비스 ↗</span></span></a>
      <a class="atom-node electron-node mint" data-node="activities" data-atom-link href="#/activities" style="left:21%;top:26%"><span class="node-sphere"></span><span class="node-label"><strong>대외활동·연구</strong><span>대회와 새로운 탐구 ↗</span></span></a>
      <a class="atom-node electron-node slate" data-node="experience" data-atom-link href="#/experience" style="left:55%;top:80%"><span class="node-sphere"></span><span class="node-label"><strong>경력</strong><span>KIST · 삼성전자 ↗</span></span></a>
    </div>
  </section>
  <section class="home-index" aria-label="분야별 바로가기">${Object.entries(categories).map(([key,cat])=>`<a href="#/${key}"><span class="index-dot ${cat.color}"></span><span><strong>${cat.title}</strong><span>${key==='projects'?'만들어 온 서비스':key==='activities'?'대회, 연구, 커뮤니티':'현장에서 쌓은 경험'}</span></span><span aria-hidden="true">↗</span></a>`).join('')}</section>`;
}

function projectVisual(entry){
  const cover=entry.cover;
  return cover?`<div class="project-visual project-cover"><img src="${cover.src}" alt="${cover.alt}" width="${cover.width}" height="${cover.height}" loading="lazy" decoding="async"></div>`:'';
}

function entryRows(ids){
  return `<div class="experience-list">${ids.map(id=>{const e=entries[id];return `<a class="experience-row" href="${route(id)}"><span class="row-period">${e.period}</span><div><span class="eyebrow">${e.kicker}</span><h3>${e.title}</h3><p>${e.summary}</p>${tags(e)}</div><span class="row-arrow">${documentIcon}</span></a>`;}).join('')}</div>`;
}

function categoryPage(key){
  const cat=categories[key];
  const assignments=cat.assignments?`<section class="assignments-section"><header><span class="eyebrow">Selected assignments</span><h2>수업에서 만든 것들</h2></header>${entryRows(cat.assignments)}</section>`:'';
  let body;
  if(key==='projects')body=`<div class="project-grid">${cat.ids.map(id=>{const e=entries[id];return `<a class="project-card ${id==='roadmap'?'featured-project':''}" href="${route(id)}">${projectVisual(e)}<div class="project-card-body"><div class="project-card-meta"><span class="eyebrow">${e.kicker}</span><span>${e.period}</span></div><div class="project-card-title"><h2>${e.title}</h2><span class="circle-arrow">${documentIcon}</span></div><p>${e.summary}</p>${tags(e)}</div></a>`;}).join('')}</div>`;
  else if(cat.groups)body=cat.groups.map(group=>`<section class="category-group"><h2 class="group-heading">${group.title}</h2>${entryRows(group.ids)}</section>`).join('');
  else body=`<section class="category-group"><h2 class="group-heading">Experience <span>경력</span></h2>${entryRows(cat.ids)}</section><section class="category-group"><h2 class="group-heading">Education <span>학력</span></h2><div class="experience-list">${profile.education.map(e=>`<article class="experience-row education-item"><span class="row-period">${e.period}</span><div><h3>${e.title}</h3><p>${e.description}</p>${e.note?`<p class="education-note">${e.note}</p>`:''}</div></article>`).join('')}</div></section>`;
  return `<section class="page-container"><a class="back-link" href="#/">← 원자로 돌아가기</a><header class="page-heading"><span class="eyebrow">${cat.english}</span><h1>${cat.title}<span class="heading-dot ${cat.color}"></span></h1><p>${cat.description}</p></header>${body}${assignments}<div class="page-crosslink"><span>전체 이력을 간결하게 보고 싶다면</span><a class="text-link" href="#/cv">CV 보기 ${arrow}</a></div></section>`;
}

function cvRow(id){const e=entries[id];return `<a class="cv-row" href="#/cv?detail=${id}" data-detail="${id}"><span class="cv-period">${e.period}</span><span class="cv-row-body"><strong>${e.title}</strong><span>${e.role||e.summary}</span>${e.role?`<small>${e.summary.replace(e.role+' · ','')}</small>`:''}</span><span class="cv-row-arrow">${panelIcon}</span></a>`;}

function cvPage(){
  return `<section class="cv-page"><div class="cv-toolbar"><a class="back-link" href="#/">← 원자로 돌아가기</a><button class="text-button print-cv">인쇄 / PDF 저장 ${arrow}</button></div>
    <header class="cv-header"><div><span class="eyebrow">CURRICULUM VITAE</span><h1>김두호 <span>${profile.english}</span></h1><p>${profile.role}</p></div><div class="cv-contact"><a href="mailto:${profile.email}">${profile.email}</a><div><a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="${profile.blog}" target="_blank" rel="noopener noreferrer">Blog ↗</a></div><span class="nationality">국적: ${profile.nationality}</span><span>서울, 대한민국</span></div></header>
    <section class="cv-section"><h2>학력</h2><div>${profile.education.map(e=>`<div class="cv-row education-row"><span class="cv-period">${e.period}</span><span class="cv-row-body"><strong>${e.title}</strong><span>${e.description}</span>${e.note?`<small>${e.note}</small>`:''}</span></div>`).join('')}</div></section>
    <section class="cv-section"><h2>경력</h2><div>${['kist','samsung'].map(cvRow).join('')}</div></section>
    <section class="cv-section"><h2>논문</h2><div>${['research'].map(cvRow).join('')}</div></section>
    <section class="cv-section"><h2>프로젝트</h2><div>${['roadmap','malo','medivc'].map(cvRow).join('')}</div></section>
    <section class="cv-section"><h2>주요 과제</h2><div>${categories.projects.assignments.map(cvRow).join('')}</div></section>
    <section class="cv-section"><h2>활동</h2><div>${['studies'].map(cvRow).join('')}<div class="cv-row education-row"><span class="cv-period">2025.2학기 — 현재</span><span class="cv-row-body"><strong>GDG on KU</strong><span>멤버</span></span></div></div></section>
    <section class="cv-section"><h2>수상·선발</h2><div>${['aimers'].map(cvRow).join('')}<a class="cv-row" data-detail="robotics" href="#/cv?detail=robotics"><span class="cv-period">2021</span><span class="cv-row-body"><strong>전국기능경기대회 우수상 (4위)</strong><span>모바일 로보틱스</span></span><span class="cv-row-arrow">${panelIcon}</span></a><a class="cv-row" data-detail="robotics" href="#/cv?detail=robotics"><span class="cv-period">2021 · 2020</span><span class="cv-row-body"><strong>지방기능경기대회 은상 · 동상</strong><span>모바일 로보틱스</span></span><span class="cv-row-arrow">${panelIcon}</span></a></div></section>
    <section class="cv-section"><h2>알고리즘</h2><div class="algorithm-profile"><p>그래프 · 자료구조 · 동적 계획법 중심의 문제 풀이</p><div>${profile.algorithms.map(a=>`<a href="${a.url}" target="_blank" rel="noopener noreferrer"><strong>${a.label}</strong><span>${a.achievement}</span>${arrow}</a>`).join('')}</div><small>2026.11.03 확인</small></div></section>
    <section class="cv-section skills-section"><h2>기술</h2><div>${profile.skills.map(s=>`<div class="skill-row"><span>${s.label}</span><p>${s.value}</p></div>`).join('')}</div></section>
  </section>`;
}

function detail(id,inPanel=false){
  const e=entries[id];
  return `<article class="detail-article ${inPanel?'in-panel':''}"><span class="eyebrow">${e.kicker}</span><h${inPanel?'2':'1'} ${inPanel?'id="panel-title"':''}>${e.title}</h${inPanel?'2':'1'}><p class="detail-subtitle">${e.subtitle}</p><dl class="detail-meta"><div><dt>기간</dt><dd>${e.period}</dd></div><div><dt>${e.role?'소속':'활동'}</dt><dd>${e.org}</dd></div>${e.role?`<div><dt>역할</dt><dd>${e.role}</dd></div>`:''}</dl>${tags(e)}
    ${id==='malo'?'<figure class="presentation-figure"><img src="./assets/malo-cover.png" alt="Malo 발표자료: 서비스 화면과 김두호의 팀장·백엔드·AI Agent·DevOps 역할" width="2880" height="1620" loading="lazy"><figcaption>INTHON 최종 발표자료 · 서비스 화면과 팀 구성</figcaption></figure>':''}
    ${id==='medivc'?'<figure class="presentation-figure"><img src="./assets/medivc-flow.png" alt="MediVC 제안 아키텍처: 환자 앱, 발견자 웹, 의료진 앱과 서버 연결" width="1920" height="1080" loading="lazy"><figcaption>결선 발표자료 · 제안 아키텍처. 해커톤 구현은 개발 인증·합성 데이터·로컬 체인 범위입니다.</figcaption></figure>':''}
    ${id==='roadmap'?projectVisual(e):''}
    ${e.sections.map(s=>`<section class="detail-section"><h3>${s.title}</h3>${s.text?`<p>${s.text}</p>`:''}${s.bullets?`<ul>${s.bullets.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}${s.links?`<div class="section-links">${s.links.map(ext).join('')}</div>`:''}</section>`).join('')}
    ${e.related?`<section class="detail-section"><h3>연결된 경험</h3>${e.related.map(related=>`<a class="related-link" href="${route(related)}"><span>${entries[related].title}</span>${documentIcon}</a>`).join('')}</section>`:''}
    ${e.links.length?`<div class="detail-sources"><span>관련 링크</span>${e.links.map(ext).join('')}</div>`:''}</article>`;
}

function closePanel(updateURL=true){
  if(panel.open)panel.close();
  document.body.classList.remove('panel-open');
  if(updateURL){history.replaceState(null,'','#/cv');document.title='CV · 김두호';}
  if(panelOpener?.isConnected)panelOpener.focus({preventScroll:true});
}
function openPanel(id){
  if(!entries[id])return;
  if(!panelOpener?.isConnected||panelOpener.dataset.detail!==id)panelOpener=main.querySelector(`[data-detail="${id}"]`);
  panelBody.innerHTML=detail(id,true);document.querySelector('#panel-permalink').href=route(id);
  document.body.classList.add('panel-open');
  if(!panel.open)panel.showModal();
  panel.scrollTop=0;document.querySelector('#close-panel').focus();
  document.title=`${entries[id].title} · CV · 김두호`;
}

async function render(){
  const token=++navigationToken;
  const raw=location.hash==='#main'?'/':location.hash.slice(1)||'/';const [pathname,search='']=raw.split('?');
  const parts=pathname.split('/').filter(Boolean);const key=parts[0]||'home';
  const changed=renderedPath!==pathname;
  if(changed){
    cleanupAtom();cleanupAtom=()=>{};closePanel(false);
    document.body.classList.toggle('is-home',key==='home');
    document.body.classList.toggle('is-cv',key==='cv');
    document.querySelectorAll('[data-nav]').forEach(el=>{if(el.dataset.nav===key)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
    if(key==='home'){main.innerHTML=home();document.title='김두호 · 포트폴리오';}
    else if(key==='cv'){main.innerHTML=cvPage();document.title='CV · 김두호';}
    else if(categories[key]&&!parts[1]){main.innerHTML=categoryPage(key);document.title=`${categories[key].title} · 김두호`;}
    else if(entries[parts[1]]&&entries[parts[1]].category===key){main.innerHTML=`<section class="detail-page"><a class="back-link" href="#/${key}">← ${categories[key].title}</a>${detail(parts[1])}<a href="#/cv" class="text-link detail-cv-link">CV에서 전체 이력 보기 ${arrow}</a></section>`;document.title=`${entries[parts[1]].title} · 김두호`;}
    else{main.innerHTML='<section class="page-container not-found"><span class="eyebrow">404</span><h1>페이지를 찾을 수 없습니다.</h1><a class="text-link" href="#/">홈으로 돌아가기 →</a></section>';document.title='페이지를 찾을 수 없습니다 · 김두호';}
    renderedPath=pathname;window.scrollTo(0,0);main.focus({preventScroll:true});
    if(key==='home'){
      const stage=document.querySelector('.atom-stage');
      try{const {mountAtom}=await import('./atom.mjs');if(token===navigationToken&&stage.isConnected)cleanupAtom=mountAtom(stage);}
      catch(error){if(stage.isConnected){stage.classList.add('fallback');}console.warn('원자는 정적 모드로 표시됩니다.',error.message);}
    }
  }
  if(key==='cv'){
    const id=new URLSearchParams(search).get('detail');
    if(id&&entries[id])openPanel(id);else{closePanel(false);document.title='CV · 김두호';}
  }
}

async function animateNavigation(link){
  const orb=document.querySelector('#transition-orb');const sphere=link.querySelector('.node-sphere');
  const rect=sphere.getBoundingClientRect();
  if(reduceMotion.matches){location.hash=link.hash;return;}
  const size=rect.width;const scale=Math.max(innerWidth,innerHeight)*2.6/size;
  orb.style.cssText=`left:${rect.left}px;top:${rect.top}px;width:${size}px;height:${size}px;background:${link.dataset.node==='projects'?'#e5ddf4':link.dataset.node==='activities'?'#d8eee5':link.dataset.node==='experience'?'#e0e6ed':'#dce5ff'};opacity:1`;
  document.body.classList.add('transitioning');
  try{await orb.animate([{transform:'scale(1)',opacity:.7},{transform:`scale(${scale})`,opacity:1}],{duration:480,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'}).finished;location.hash=link.hash;await new Promise(requestAnimationFrame);await orb.animate([{opacity:1},{opacity:0}],{duration:220,fill:'forwards'}).finished;}
  finally{orb.getAnimations().forEach(a=>a.cancel());orb.style.opacity=0;document.body.classList.remove('transitioning');}
}

document.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();main.focus();return;}
  const atom=event.target.closest('[data-atom-link]');
  if(atom&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&event.button===0){event.preventDefault();if(!document.body.classList.contains('transitioning'))animateNavigation(atom);return;}
  const row=event.target.closest('[data-detail]');if(row)panelOpener=row;
  if(event.target.closest('.print-cv'))window.print();
  if(event.target.closest('#panel-permalink,.related-link'))closePanel(false);
});
document.querySelector('#close-panel').addEventListener('click',()=>closePanel());
panel.addEventListener('cancel',event=>{event.preventDefault();closePanel();});
panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();closePanel();}});
panel.addEventListener('click',event=>{if(event.target===panel){const r=panel.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closePanel();}});
addEventListener('hashchange',render);
render();
