
var i = 0;
var txt = 'Hey! I hope you are here to see my homework........';
function typingeffect() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingeffect, 100);
    }
    document.getElementById('link').style.visibility = "visible";
}
