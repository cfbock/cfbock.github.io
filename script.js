const nav = document.querySelector('#nav');
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!expanded)); nav.classList.toggle('open', !expanded); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open'); menu.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent = new Date().getFullYear();
const cfg = window.PORTFOLIO_CONFIG || {};
function applyLink(el, url, fallbackLabel) { if (!el) return; if (url && (/^https:\/\//.test(url) || /^assets\/[a-zA-Z0-9_./-]+$/.test(url))) {el.href=url;if(url.startsWith('https://')) {el.target='_blank';el.rel='noopener noreferrer';}} else {el.href='#contact';el.title='Add this URL in config.js before publishing';if(fallbackLabel)el.textContent=fallbackLabel;} }
applyLink(document.querySelector('#githubLink'), cfg.githubUrl, 'Add GitHub URL in config.js');
applyLink(document.querySelector('#resumeLink'), cfg.resumeUrl, 'Add resume in config.js');
document.querySelectorAll('[data-config-link]').forEach(el=>applyLink(el,cfg[el.dataset.configLink], 'Add project link in config.js ↗'));
const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.content-section, .project-card, .skill-card, .edu-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
const sections=[...document.querySelectorAll('main section[id]')]; const links=[...nav.querySelectorAll('a[href^="#"]')];const activeObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>activeObserver.observe(s));
