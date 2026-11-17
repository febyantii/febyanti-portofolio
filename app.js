/* Logika render halaman - biasanya tidak perlu diubah */

const ok=u=>u&&!u.startsWith("[");
const L=(t,u)=>ok(u)?`<a class="lnk" href="${u}" target="_blank" rel="noopener">${t}</a>`:`<span class="lnk off" title="Link not added yet">${t}</span>`;
const B=(t,u,c="")=>ok(u)?`<a class="btn ${c}" href="${u}" ${u.startsWith("#")?"":'target="_blank" rel="noopener"'}>${t}</a>`:`<span class="btn off ${c}" title="Not added yet">${t}</span>`;
const mail=ok(CFG.email)?"mailto:"+CFG.email:"";
const tags=a=>a.map(x=>`<span class="tag">${x}</span>`).join("");
const sec=(id,lab,h,sub,body)=>`<section id="${id}"><div class="w"><p class="lab rv">${lab}</p><h2 class="rv">${h}</h2>${sub?`<p class="sub rv">${sub}</p>`:""}${body}</div></section>`;
const img=(s,t)=>`<img src="${s}" alt="${t}" loading="lazy" onerror="this.remove()"><div class="ph" style="z-index:-1">Add image:<br>${s}</div>`;
function card(p,one,i){return `<article class="card ${one?"one":""}" style="--d:${i*.08}s"><div class="th" style="position:relative;isolation:isolate">${img(p.img,p.title+" screenshot")}</div><div class="bd"><span class="num">PROJECT ${p.n}</span><h4>${p.title}</h4><p>${p.desc}</p><div>${tags(p.tech)}</div><div class="lk">${p.links.map(l=>L(l[0],l[1])).join("")}</div></div></article>`}
const cats=CATS.map(c=>({c,ps:PROJECTS.filter(p=>p.cat===c.id)})).filter(x=>x.ps.length);
const projects=`<div class="tabs rv" role="tablist" aria-label="Kategori proyek">
${cats.map((x,i)=>`
<button class="tab${i?"":" on"}"
role="tab"
id="tab-${x.c.id}"
aria-controls="pn-${x.c.id}"
aria-selected="${!i}"
tabindex="${i?-1:0}"
data-t="${x.c.id}">
${x.c.title}
</button>`).join("")}
</div>
${cats.map((x,i)=>{const k=x.ps.length,cl=k===1?"n1":k===2?"n2":k===3?"n3":"nm";return `<div class="panel${i?"":" active"}" role="tabpanel" id="pn-${x.c.id}" aria-labelledby="tab-${x.c.id}"><p class="pdesc">${x.c.desc}</p><div class="pg ${cl}">${x.ps.map((p,j)=>card(p,k===1,j)).join("")}</div></div>`}).join("")}`;
const tl=a=>`
<div class="tl">
    ${a.map((e,i)=>`
        <div class="item rv" style="--d:${i*.08}s">

            <div class="exp-layout">

                <!-- LEFT: EXPERIENCE DETAILS -->
                <div class="exp-content">

                    <h3>${e.role}</h3>

                    <div class="meta">
                        ${e.org} · ${e.type} · ${e.dur}
                    </div>

                    <p>${e.desc}</p>

                    <ul>
                        ${e.pts.map(x=>`<li>${x}</li>`).join("")}
                    </ul>

                    <div class="exp-skills">
                        ${tags(e.skills)}
                    </div>

                </div>

                <!-- RIGHT: EXPERIENCE PHOTO -->
                <div class="exp-photo">
                    ${img(e.img,e.role+" experience photo")}
                </div>

            </div>

        </div>
    `).join("")}
</div>
`;
const orgs=`<div class="pg n2">${ORGS.map((o,i)=>`<article class="card rv" style="--d:${i*.08}s"><div class="th" style="position:relative;isolation:isolate;aspect-ratio:16/7">${img(o.img,o.org)}</div><div class="bd"><h4>${o.role}</h4><div class="meta" style="margin:0">${o.org} · ${o.dur}</div><p>${o.desc}</p><ul style="margin:0;padding-left:18px;color:var(--mu);font-size:15px">${o.pts.map(x=>`<li>${x}</li>`).join("")}</ul></div></article>`).join("")}</div>`;
const social = `
    <div class="row" style="gap:20px; margin-top:12px;">
        ${L("GitHub", CFG.github)}
        ${L("LinkedIn", CFG.linkedin)}
        ${L("Email", mail)}
    </div>
`;

document.getElementById("app").innerHTML =

`<section id="home" style="padding:0">

    <div class="w hero">

        <!-- LEFT SIDE: TEXT CONTENT -->
        <div>

            <h1 class="rv">
                Hi, I'm Febyanti.
                <br>
                <em>I build things with technology</em>.
            </h1>

            <p class="rv">
                An Information Technology student interested in software development,
                machine learning, and data-driven solutions. I enjoy turning ideas
                into practical applications, solving problems, and exploring how
                technology can make a meaningful difference.
            </p>

            <div class="row rv">
                <a class="btn" href="#projects">Explore My Work</a>
                ${B("Download My CV", CFG.cv, "o")}
            </div>

            <div class="rv">

                <div class="row" style="gap:20px; margin-bottom:8px;">

                    <span>
                        <i class="dot"></i>
                        Open to Internship Opportunities
                    </span>

                    <span style="color:var(--mu)">
                        ${CFG.location}
                    </span>

                </div>

                ${social}

            </div>

        </div>

        <!-- RIGHT SIDE: PROFILE PHOTO -->
        <div class="photo rv">
            ${img(CFG.photo, "Portrait of Febyanti")}
        </div>

    </div>

</section>` +

sec("about","About Me","A little about me.","",`<div class="grid2 about">
<div class="rv">
<p>I'm a fifth-semester Information Technology student with an interest in building practical technology solutions. My experience spans application development, database management, and exploring machine learning and data analytics.</p>
<p>Beyond technical projects, I enjoy collaborating with others, sharing knowledge, and learning through different experiences. My involvement in academic projects, laboratory assistance, and teaching has helped me develop both technical and interpersonal skills.</p>
</div>
<dl class="rv">
<div><dt>Education</dt><dd>Universitas Multimedia Nusantara</dd></div>
<div><dt>Major</dt><dd>Information Technology</dd></div>
<div><dt>Location</dt><dd>${CFG.location}</dd></div>
<div><dt>Cummulative GPA</dt><dd>3.98/4.00</dd></div>
<div><dt>Main Interests</dt><dd>Software Development, Machine Learning, Data Science</dd></div>
</dl>
</div>`)+

sec("experience","Work Experience","Experience beyond the classroom.","Opportunities that helped me develop technical, communication, and collaboration skills.",tl(EXPERIENCE))+

sec("leadership","Leadership","Growing through collaboration.","Experiences that shaped how I communicate, collaborate, and contribute to a team.",orgs)+

sec("projects","Projects","Things I've worked on.","A collection of projects where I explore ideas, develop practical solutions, and put technology into practice.",projects)+


sec("skills","Skills","Tools I work with.","Technologies, frameworks, and tools I've explored through academic projects, personal development, and practical experience.",`
<div class="sk">

    <div class="skill-card rv">
        <h4>Programming Languages</h4>
        <div class="skill-tags">
            ${tags(["Python","Kotlin","Java","JavaScript","C#","SQL"])}
        </div>
    </div>

    <div class="skill-card rv">
        <h4>Frontend Development</h4>
        <div class="skill-tags">
            ${tags(["HTML5","CSS3","React","Tailwind CSS","Responsive Web Design"])}
        </div>
    </div>

    <div class="skill-card rv">
        <h4>Backend & Database</h4>
        <div class="skill-tags">
            ${tags(["Node.js","Express.js","PostgreSQL","Supabase","Room Database","JSON"])}
        </div>
    </div>

    <div class="skill-card rv">
        <h4>Mobile & Game Development</h4>
        <div class="skill-tags">
            ${tags(["Android Development","Jetpack Compose","Material Design 3","Navigation Compose","Unity","2D Game Development"])}
        </div>
    </div>

    <div class="skill-card rv">
        <h4>Data Science & Machine Learning</h4>
        <div class="skill-tags">
            ${tags(["Python","Pandas","NumPy","Scikit-learn","Data Analysis","Data Visualization"])}
        </div>
    </div>

    <div class="skill-card rv">
        <h4>Cloud, Design & Developer Tools</h4>
        <div class="skill-tags">
            ${tags(["AWS","Git","GitHub","Android Studio","Visual Studio Code","Figma","UI/UX Design"])}
        </div>
    </div>

</div>
`)+

sec("beyond","Beyond Tech","More than just technical skills.","Skills I continue to develop through teaching, teamwork, academic projects, and collaborative experiences.",`<div class="soft rv">${SOFT.map((s,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span>${s}</div>`).join("")}</div>`)+


sec(
    "education",
    "Education",
    "Education & Certifications",
    "My academic background and professional certification.",
    `
    <div class="edu-cert-grid">

        <!-- EDUCATION CARD -->
        <article class="edu-cert-card rv">
            <div class="edu-cert-label">ACADEMIC BACKGROUND</div>

            <div class="edu-cert-icon"></div>

            <h3>${EDU.degree}</h3>

            <p class="edu-cert-org">${EDU.uni}</p>

            <div class="edu-cert-details">
                <div>
                    <span>Academic Status</span>
                    <strong>${EDU.status}</strong>
                </div>

                <div>
                    <span>Study Period</span>
                    <strong>${EDU.period}</strong>
                </div>
            </div>
        </article>

        <!-- CERTIFICATION CARD -->
        ${CERTS.map(c => `
            <article class="edu-cert-card rv">
                <div class="edu-cert-label">PROFESSIONAL CERTIFICATION</div>

                <div class="edu-cert-icon"></div>

                <h3>${c.name}</h3>

                <p class="edu-cert-org">${c.org}</p>

                <div class="edu-cert-details">
                    <div>
                        <span>Issue Date</span>
                        <strong>${c.date}</strong>
                    </div>

                    <div>
                        <span>Expiration Date</span>
                        <strong>${c.expiration}</strong>
                    </div>

                    <div>
                        <span>Validation Number</span>
                        <strong class="validation-number">${c.validationNumber}</strong>
                    </div>
                </div>

                <div class="edu-cert-action">
                    ${L("Verify Credential", c.url)}
                </div>
            </article>
        `).join("")}

    </div>
    `
)+

sec("contact","Get in Touch","Let's build something meaningful.","I'm currently open to internship opportunities, collaborative projects, and connecting with people in the tech industry.",`<div class="cta rv">
<p class="big">Have an opportunity in mind? Let's talk.</p>
<div class="row">${B("Get in Touch",mail)}${B("Download CV",CFG.cv,"o")}</div>
<div class="row" style="gap:20px">${social}</div>
</div>`);
document.getElementById("nl").innerHTML=[["home","Home"],["about","About"],["experience","Experience"],["projects","Projects"],["skills","Skills"],["contact","Contact"]].map(a=>`<a href="#${a[0]}" data-s="${a[0]}">${a[1]}</a>`).join("")+B("Download CV",CFG.cv);
document.getElementById("fl").innerHTML=social;
document.getElementById("yr").textContent=new Date().getFullYear();
const nl=document.getElementById("nl"),mb=document.getElementById("mb");
mb.onclick=()=>{const o=nl.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nl.addEventListener("click",e=>{if(e.target.tagName==="A")nl.classList.remove("open")});
addEventListener("scroll",()=>document.querySelector("nav").classList.toggle("s",scrollY>10),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("[data-s]").forEach(a=>a.classList.toggle("on",a.dataset.s===e.target.id||(e.target.id==="leadership"&&a.dataset.s==="experience")||(e.target.id==="beyond"&&a.dataset.s==="skills")||(e.target.id==="education"&&a.dataset.s==="skills")))}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("section[id]").forEach(s=>so.observe(s));

/* Tab kategori proyek */
(function(){const tabs=[...document.querySelectorAll(".tab")],panels=[...document.querySelectorAll(".panel")];
function show(t,focus){tabs.forEach(b=>{const on=b===t;b.classList.toggle("on",on);b.setAttribute("aria-selected",on);b.tabIndex=on?0:-1});
panels.forEach(p=>p.classList.toggle("active",p.id==="pn-"+t.dataset.t));if(focus)t.focus()}
tabs.forEach((b,i)=>{b.onclick=()=>show(b);b.onkeydown=e=>{const d={ArrowRight:1,ArrowLeft:-1}[e.key];if(d){e.preventDefault();show(tabs[(i+d+tabs.length)%tabs.length],true)}}})})();
