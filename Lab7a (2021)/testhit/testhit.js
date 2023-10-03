window.addEventListener('load', () => {
    if (localStorage.hits) {
        localStorage.hits = parseInt(localStorage.hits) + 1;
    } else {
        localStorage.hits = 1;
    }
    if (sessionStorage.hits) {
        sessionStorage.hits = parseInt(sessionStorage.hits) + 1;
    } else {
        sessionStorage.hits = 1;
    }
    alert("Number of hits this browser: " + localStorage.hits + "\n\n" +
        "Number of hits this session: " + sessionStorage.hits)
    });