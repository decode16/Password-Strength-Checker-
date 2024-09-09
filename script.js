const inputBar = document.getElementById("inputbar");
const suggestionBar = document.getElementById("suggestion");

inputBar.addEventListener("input", () => {
    console.log(inputBar.value);
    let password = inputBar.value;

    if (password.length < 8) {
        suggestionBar.innerText =
            "password is too short.🙏 Please keep the password is greater then 8 lettes.😘";
          suggestionBar.style.color = "white"

    } else {
        if (password.search(/[a-z]/) == -1) {
            suggestionBar.innerText = 'Password is missing a lowercase letter.😓';
        } else if (password.search(/[A-Z]/) == -1) {
            suggestionBar.innerText = 'Password is missing a Uppercase letter.😓';
        } else if (password.search(/[0-9]/) == -1) {
            suggestionBar.innerText = 'Password is missing a Numeric letter.😓';
        } else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1) {
            suggestionBar.innerText = 'Password is missing a Special Character letter.😓';
        }
        else {
            suggestionBar.innerText = 'Passward is long enough😊 & Password is strong. 👍';
            suggestionBar.style.color = '#000000';
        }

    }
});
