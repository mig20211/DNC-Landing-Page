var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var Larrow = window.document.getElementById("L-arrow")
var Rarrow = window.document.getElementById("R-arrow")

function RollRight() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    Larrow.style = "display:flex; margin-top:60px"
    Rarrow.style = "display:none"

}
function RollLeft() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    Rarrow.style = "display:flex; margin-top:60px"
    Larrow.style = "display:none"
}
