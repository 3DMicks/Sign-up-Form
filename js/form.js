

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
        let val = doesPasswordsMatch() ? "" : "Mismatched passwords.";
        fp.setCustomValidity(val);
        sp.setCustomValidity(val);
    });
});