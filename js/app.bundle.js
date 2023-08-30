var update = function update() {
    var tex = document.querySelector("#text");
    var view = document.querySelector("#view");
    view.srcdoc = tex.value;
};