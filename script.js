document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab.active').forEach(activeTab => {
            activeTab.classList.remove('active');
        });

        e.currentTarget.classList.add('active');
    });
});

let nav = this.document.getElementById("navbar")
let logo = this.document.getElementById("logo")

window.addEventListener("scroll", function (e) {
    nav.classList = this.window.scrollY >= 450 ? "navbar fixed" : "navbar"
})