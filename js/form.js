

function doesPasswordsMatch() {
    let fp = document.querySelector("#first_password").value;
    let sp = document.querySelector("#second_password").value;
    if (fp.length > 0 && sp.length > 0) {
        return fp == sp;
    } else {
        return false;
    }
}

document.querySelectorAll("input[type=password]").forEach((pass) => {
    let fp = document.querySelector("#first_password");
    let sp = document.querySelector("#second_password");
    pass.addEventListener("input", (event) => {
        if (!doesPasswordsMatch()) {
            fp.classList.add("invalid");
            sp.classList.add("invalid");
        } else {
            fp.classList.remove("invalid");
            sp.classList.remove("invalid");
        }
    });
});