const todonav = document.getElementById('todonav');
todonav.addEventListener(`click`, ()=>{
    window.alert(`Please select the Start Your To-do button on the home page below`);
    console.log('success');
});


// The toggle
const menuToggle = document.querySelector(".menu-toggle");
const menunavlinks = document.querySelector(".navlinks");

menuToggle.addEventListener("click", () => {
    menunavlinks.classList.toggle("active");
});

    
