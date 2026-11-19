/* =========================================================
   EDIT THIS BLOCK — everything on the page comes from here.
   Put images in assets/ and your PDFs in files/.
   ========================================================= */
const DATA = {
  name: "J Victorino G. Zulueta",
  shortName: "jvictorino",
  roles: ["DevOps Engineer", "Software Engineer", "Front-End Developer", "Automation Enthusiast"],
  tagline: "I build and automate the pipelines, platforms and infrastructure that ship software faster and safer.",
  about: "I'm a software engineer who grew from IT support and front-end development into DevOps. I'm currently a DevOps Engineer on the Vodafone account through Accenture, where I focus on automation, scripting and reliable delivery. I love learning new tools and making projects that keep improving.",
  photo: "assets/profile.jpg",
  resume: "files/Resume.pdf",
  stats: [
    { n: 2, suffix: "+", label: "Years in IT" },
    { n: 3, suffix: "", label: "Organizations" },
    { n: 4, suffix: "", label: "Projects" },
    { n: 8, suffix: "", label: "Certificates" }
  ],
  skills: [
    { name: "HTML", icon: "assets/skills/html.svg" },
    { name: "CSS", icon: "assets/skills/css.svg" },
    { name: "JavaScript", icon: "assets/skills/javascript.svg" },
    { name: "SQL", icon: "assets/skills/sql.svg" },
    { name: "Unix / Linux", icon: "assets/skills/linux.svg" },
    { name: "Windows Shell Scripting", icon: "assets/skills/powershell.svg" },
    { name: "Python", icon: "assets/skills/python.svg" },
    { name: "Angular", icon: "assets/skills/angular.svg" },
    { name: "React JS", icon: "assets/skills/react.svg" },
    { name: "Vue JS", icon: "assets/skills/vue.svg" },
    { name: "PHP", icon: "assets/skills/php.svg" },
    { name: "Bootstrap", icon: "assets/skills/bootstrap.svg" },
    { name: "Git", icon: "assets/skills/git.svg" },
    { name: "Claude Code", icon: "assets/skills/claude.svg" },
    { name: "WordPress", icon: "assets/skills/wordpress.svg" },
    { name: "Canva", icon: "assets/skills/canva.svg" },
    { name: "MongoDB", icon: "assets/skills/mongodb.svg" },
    { name: "Express.js", icon: "assets/skills/express.svg" },
    { name: "Node.js", icon: "assets/skills/nodejs.svg" },
    { name: "TypeScript", icon: "assets/skills/typescript.svg" }
  ],
  projects: [
    { title: "Angelicacies", desc: "Business website for a sweet cassava cake bakery, with menu, blog, contact and table-booking pages.", tags: ["HTML", "CSS", "WordPress"], cat: "Website", img: "assets/projects/Project 1 Angelicacies.png", github: "", live: "" },
    { title: "Information Website", desc: "Clean, responsive information website that presents content clearly across devices.", tags: ["HTML", "CSS", "JavaScript"], cat: "Website", img: "assets/projects/Project 2 Information Website.png", github: "", live: "" },
    { title: "Content Management System", desc: "Patient management app (Rise with us) to sign up, list, edit and remove appointed patients.", tags: ["PHP", "MySQL", "Bootstrap"], cat: "Web App", img: "assets/projects/Project 3 Content Management System.png", github: "", live: "" },
    { title: "KATO Anime Website", desc: "Anime-themed fan website with a bold, media-rich layout.", tags: ["HTML", "CSS", "JavaScript"], cat: "Website", img: "assets/projects/Project 4 KATO Anime Website.png", github: "", live: "" }
  ],
  experience: [
    { role: "DevOps Engineer", company: "Vodafone (via Accenture)", when: "Aug 2, 2026 — Present", now: true, points: ["Working as a DevOps Engineer on the Vodafone account, placed through Accenture."] },
    { role: "Packaged App Development Analyst", company: "Accenture", when: "Nov 6, 2025 — Present", now: true, points: ["Promoted from Associate to Analyst."] },
    { role: "Packaged App Development Associate", company: "Accenture", when: "Jun 24, 2025 — Nov 2025", points: ["Started my career at Accenture in packaged application development."] },
    { role: "IT Support Intern", company: "Direct Sourcing Solutions", when: "Jul 1, 2024 — Sep 30, 2024", points: ["Configured and managed IT assets, including computers, servers and network devices, to optimize performance and efficiency.", "Supported individuals and businesses in New Zealand by troubleshooting hardware, software and network issues remotely using TeamViewer.", "Used various IT tools and resources to assist users, provide training and improve their experience with technology."] }
  ],
  awards: [
    { icon: "🏆", title: "2nd Place — Accenture Hackathon", by: "Code Titans · InnovaAI: Innovation Evaluator", desc: "InnovaAI – Innovation Evaluator is an AI-powered platform that rapidly evaluates innovation ideas across feasibility, business impact, risk, financial viability and strategic value. It delivers a structured scorecard and a Build, Refine or Reject recommendation in under 20 seconds." },
    { icon: "🎖️", title: "Dean's Lister", by: "Bachelor of Science in Information Technology", list: ["1st Year, 1st Semester", "1st Year, 2nd Semester", "2nd Year, 2nd Semester", "3rd Year, 1st Semester"], desc: "" },
    { icon: "🎓", title: "Bachelor of Science in Information Technology", by: "College degree", desc: "" }
  ],
  certs: [
    { title: "AWS Cloud Foundation", issuer: "AWS · April 15, 2024", img: "assets/certs/AWS Cloud Foundation Certificate.jpg", link: "" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp · March 31, 2024", img: "assets/certs/Responsive Web Design Certificate.png", link: "" },
    { title: "Cisco CyberOps Associate", issuer: "Cisco · November 27, 2023", img: "assets/certs/Cyberops Associate Certificate CISCO.jpg", link: "" },
    { title: "Google Analytics", issuer: "Google · October 10, 2023", img: "assets/certs/Google Analytics Certificate.png", link: "" },
    { title: "Red Hat Linux / Unix", issuer: "Red Hat · November 13, 2022", img: "assets/certs/Redhat Linux Certificate.jpg", link: "" },
    { title: "Code Geeks", issuer: "Code Geeks · September 23, 2022", img: "assets/certs/Code Geek Certificate.png", link: "" },
    { title: "Internet of Things (IoT)", issuer: "Cisco · November 16, 2021", img: "assets/certs/IoT Certificate CISCO.jpg", link: "" },
    { title: "Cybersecurity", issuer: "Cisco · November 13, 2021", img: "assets/certs/Cybersecurity Certificate CISCO.jpg", link: "" }
  ],
  testimonials: [
    { quote: "A very endearing person with a great personality to work with. Can keep your spirits high and the task difficulties low.", who: "Allen Serrano", role: "Front-End Developer", img: "assets/Allen Carlo Serrano.jpg" },
    { quote: "When it comes to designing, J Victorino Zulueta is very consistent in his works. He makes sure that the projects he makes are all made from his creative mind.", who: "Aaron Punzalan", role: "Junior Developer", img: "assets/Aaron Punzalan.jpg" },
    { quote: "Witnessing the process of his hard work in web development, especially in front-end development, it is evident that his projects were improving over time. As I collaborated with him on other school projects, he is one of the learners who loves to challenge himself with front-end development. I am happy to work with him if there is a chance in the future.", who: "Jenna Pangilinan", role: "Social Media Consultant", img: "assets/Jenna Pangilinan.jpg" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Jayzulu", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/j-victorino-zulueta-b18730302/", icon: "linkedin" }
  ]
};

/* ====================== ENGINE ====================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ICONS = {
  linkedin: '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" style="fill:currentColor;stroke:none"/></svg>'
};

// bind simple text
document.querySelectorAll("[data-bind]").forEach(el => el.textContent = DATA[el.dataset.bind]);
document.title = `${DATA.name} · DevOps Engineer`;
$("#photo").src = DATA.photo;
$("#dl-resume").href = DATA.resume;
$("#year").textContent = new Date().getFullYear();

// stats (count up)
$("#stats").innerHTML = DATA.stats.map(s => `<div class="stat"><b data-n="${s.n}" data-s="${esc(s.suffix)}">0</b><span>${esc(s.label)}</span></div>`).join("");

// skills rings
$("#skills-grid").innerHTML = DATA.skills.map(s => `
  <div class="skill"><img src="${esc(s.icon)}" alt="${esc(s.name)} logo" loading="lazy"><p>${esc(s.name)}</p></div>`).join("");

// projects + filters
const cats = ["All", ...new Set(DATA.projects.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " on"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
function drawProjects(cat = "All") {
  $("#projects-grid").innerHTML = DATA.projects.filter(p => cat === "All" || p.cat === cat).map(p => `
    <article class="card in">
      <img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy">
      <div class="body"><h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="links">${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live ↗</a>` : ""}</div></div>
    </article>`).join("");
  document.querySelectorAll(".card").forEach(tilt);
}
$("#filters").onclick = e => {
  const b = e.target.closest(".chip"); if (!b) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b));
  drawProjects(b.dataset.c);
};
function tilt(el) {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  });
  el.addEventListener("mouseleave", () => el.style.transform = "");
}

// experience
$("#timeline").innerHTML = DATA.experience.map(x => `
  <div class="stage${x.now ? " now" : ""}"><h4>${esc(x.role)} <span>@ ${esc(x.company)}</span></h4>
  <div class="when mono">${esc(x.when)}${x.now ? " · running…" : " · passed"}</div>
  <ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("");

// awards
$("#awards-grid").innerHTML = DATA.awards.map(a => `<div class="award"><div class="ico">${a.icon}</div><h4>${esc(a.title)}</h4><small class="mono">${esc(a.by)}</small>${a.list ? `<ul>${a.list.map(l => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}${a.desc ? `<p>${esc(a.desc)}</p>` : ""}</div>`).join("");

// certs
$("#certs-grid").innerHTML = DATA.certs.map(c => `
  <div class="cert" data-img="${esc(c.img)}" data-t="${esc(c.title)}"><img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy">
  <div><h4>${esc(c.title)}</h4><small>${esc(c.issuer)}</small>${c.link ? `<br><a href="${esc(c.link)}" target="_blank" rel="noopener">Verify ↗</a>` : ""}</div></div>`).join("");
const lb = $("#lightbox");
$("#certs-grid").onclick = e => {
  if (e.target.closest("a")) return;
  const c = e.target.closest(".cert"); if (!c) return;
  $("img", lb).src = c.dataset.img; $("p", lb).textContent = c.dataset.t; lb.classList.add("open");
};
lb.onclick = e => { if (e.target !== $("img", lb)) lb.classList.remove("open"); };
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });

// testimonials
$("#slides").innerHTML = DATA.testimonials.map(t => `<div class="slide"><img src="${esc(t.img)}" alt="${esc(t.who)}"><q>${esc(t.quote)}</q><b>${esc(t.who)}</b><small>${esc(t.role)}</small></div>`).join("");
$("#dots").innerHTML = DATA.testimonials.map(() => "<i></i>").join("");
let cur = 0, timer;
function show(i) {
  cur = (i + DATA.testimonials.length) % DATA.testimonials.length;
  document.querySelectorAll(".slide").forEach((s, k) => s.classList.toggle("on", k === cur));
  document.querySelectorAll("#dots i").forEach((d, k) => d.classList.toggle("on", k === cur));
  clearInterval(timer); timer = setInterval(() => show(cur + 1), 6000);
}
$("#prev").onclick = () => show(cur - 1); $("#next").onclick = () => show(cur + 1);
$("#dots").onclick = e => { const k = [...$("#dots").children].indexOf(e.target); if (k > -1) show(k); };
show(0);

// socials
$("#socials").innerHTML = DATA.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}">${ICONS[s.icon] || ""}</a>`).join("");

drawProjects();

// typing roles
(function type() {
  const el = $("#typed"); let r = 0, c = 0, del = false;
  (function tick() {
    const w = DATA.roles[r];
    el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % DATA.roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 80);
  })();
})();

// fake terminal
(function term() {
  const lines = [
    "<b>$</b> git push origin main", "<em>→ pipeline #482 triggered</em>", "<b>$</b> terraform apply -auto-approve",
    "Apply complete! Resources: 12 added", "<b>$</b> kubectl rollout status deploy/app", "deployment \"app\" successfully rolled out ✔",
    "<b>$</b> echo $UPTIME", "99.99%"
  ];
  const out = $("#termBody"); let i = 0, shown = [];
  (function next() {
    shown.push(lines[i % lines.length]); if (shown.length > 8) shown.shift();
    out.innerHTML = shown.join("\n"); i++;
    setTimeout(next, i % 2 ? 900 : 1500);
  })();
})();

// reveal + counters + rings + scrollspy
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add("in"); io.unobserve(el);
  el.querySelectorAll?.("[data-n]").forEach(n => animateNum(n, +n.dataset.n, n.dataset.s));
}), { threshold: .2 });
function animateNum(el, to, suf = "") {
  const t0 = performance.now();
  (function f(t) { const k = Math.min(1, (t - t0) / 1500); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(f); })(t0);
}
document.querySelectorAll(".reveal,.stage,.award,.cert,.skill").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });

const links = [...document.querySelectorAll("#menu a")], secs = links.map(a => $(a.getAttribute("href")));
addEventListener("scroll", () => {
  const h = document.documentElement, y = h.scrollTop;
  $("#progress").style.width = (y / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  let on = 0; secs.forEach((s, i) => { if (s && s.offsetTop - 120 <= y) on = i; });
  links.forEach((a, i) => a.classList.toggle("on", i === on));
}, { passive: true });

// mobile menu
$("#burger").onclick = () => $("#menu").classList.toggle("open");
$("#menu").onclick = () => $("#menu").classList.remove("open");

// cursor glow
addEventListener("mousemove", e => { const g = $("#glow"); g.style.left = e.clientX + "px"; g.style.top = e.clientY + "px"; });

// particle network background
(function net() {
  const cv = $("#bg"), ctx = cv.getContext("2d"); let W, H, pts = [], mouse = { x: -999, y: -999 };
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; pts = Array.from({ length: Math.min(90, W * H / 15000 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 })); }
  addEventListener("resize", size); addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }); size();
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.fillStyle = "rgba(0,240,255,.7)"; ctx.fillRect(p.x, p.y, 2, 2);
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 130) { ctx.strokeStyle = `rgba(138,92,255,${.25 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      const m = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
      if (m < 160) { ctx.strokeStyle = `rgba(255,79,216,${.5 * (1 - m / 160)})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  })();
})();

// Konami easter egg
(function () {
  const k = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]; let i = 0;
  addEventListener("keydown", e => { i = (e.key === k[i] || e.key.toLowerCase() === k[i]) ? i + 1 : 0; if (i === k.length) { document.body.classList.toggle("party"); i = 0; } });
})();

