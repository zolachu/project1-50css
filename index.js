
const panels = [...document.getElementsByClassName('panel')];

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('panel')) {
        panels.forEach(panel => {
            if (panel !== e.target) {
                panel.classList.remove('active');
            } else {
                panel.classList.add('active');
            }
        })
    }
    
})

