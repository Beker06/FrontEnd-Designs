let portal = document.getElementById('portal');

for(let i = 0; i < 360; i++){
    let chispa = document.createElement("div");
    chispa.className = "chispa";
    chispa.style.rotate = i * 2+ 'deg';
    let chispaTranslation = Math.random() * (120-100)+100;

    chispa.style.transform = 'translate('+chispaTranslation+'px)';

    portal.appendChild(chispa);
}