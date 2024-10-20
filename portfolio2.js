let fwelcome=document.getElementById('fwelcome');
let fabout=document.getElementById('fabout');
let fproj=document.getElementById('fproj');
let fexp=document.getElementById('fexp');
let fskills=document.getElementById('fskills');
let fcerti=document.getElementById('fcerti');
let fec=document.getElementById('fec');
let fcontacts=document.getElementById('fcontacts');
//footers done
let nwel=document.getElementById('nwel');
let nproj=document.getElementById('nproj');
let ncontact=document.getElementById('ncontact');
//navbar done
let welcome=document.getElementById('welcome');
let about=document.getElementById('about');
let projects=document.getElementById('projects');
let experience=document.getElementById('experience');
let certification=document.getElementById('certification');
let skills=document.getElementById('skills');
let extracurr=document.getElementById('extracurr');
let contact=document.getElementById('contact');
//footer and navbar done connected
function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
    fwelcome.addEventListener('click', () => scrollToSection(welcome));
    fabout.addEventListener('click', () => scrollToSection(about));
    fproj.addEventListener('click', () => scrollToSection(projects));
    fexp.addEventListener('click', () => scrollToSection(experience));
    fskills.addEventListener('click', () => scrollToSection(skills));
    fcerti.addEventListener('click', () => scrollToSection(certification));
    fec.addEventListener('click', () => scrollToSection(extracurr));
    fcontacts.addEventListener('click', () => scrollToSection(contact));
    nwel.addEventListener('click', () => scrollToSection(welcome));
    nproj.addEventListener('click', () => scrollToSection(projects));
    ncontact.addEventListener('click', () => scrollToSection(contact));
});
//scrolling has been done for footer
function inview(section){
    section.classList.remove('footertext');
    section.classList.add('footertextactive');
}
function updateFooterClass() {
    const sections = {
        welcome: fwelcome,
        about: fabout,
        projects: fproj,
        experience: fexp,
        skills: fskills,
        certification: fcerti,  // Updated from "achievements"
        extracurr: fec,     // This remains correct
        contact: fcontacts        // Ensure this ID is correctly set in the HTML as well
    };


    // Reset all footer classes first
    for (const key in sections) {
        sections[key].classList.remove('footertextactive');
        sections[key].classList.add('footertext');
    }

    // Check visibility of each section
    for (const sectionKey in sections) {
        const section = document.getElementById(sectionKey);
        if (section && checkVisibility(section)) {
            sections[sectionKey].classList.remove('footertext');
            sections[sectionKey].classList.add('footertextactive');
        }
    }
}

// Check visibility function
function checkVisibility(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    
    return visibleHeight > (elementHeight / 2);
}


// Attach the scroll event listener
window.addEventListener('scroll', updateFooterClass);

function updateNavClass() {
    // Reset all nav elements to default state (remove shadow)
    const navElements = [nwel, nproj, ncontact];
    navElements.forEach(nav => {
        nav.style.boxShadow = 'none'; // Remove shadow
    });

    // Check visibility of each section and set shadow accordingly
    if (checkVisibility(welcome)) {
        nwel.style.boxShadow = '0px 0px 100px rgba(255, 255, 255, 1)'; // Add shadow
    } else if (checkVisibility(projects)) {
        nproj.style.boxShadow = '0px 0px 100px rgba(255, 255, 255, 1)'; // Add shadow
    } else if (checkVisibility(contact)) {
        ncontact.style.boxShadow = '0px 0px 100px rgba(255, 255, 255, 1)'; // Add shadow
    }
}

// Call updateNavClass in the scroll event listener
window.addEventListener('scroll', () => {
    updateFooterClass(); // Existing function
    updateNavClass();    // New function for nav elements
});


