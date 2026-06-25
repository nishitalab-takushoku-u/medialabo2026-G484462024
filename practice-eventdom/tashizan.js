let c = document.querySelector("#calc");
c.addEventListener("click", greeting);
function greeting() {
    let l=document.querySelector('input[name="left"]');
    let r=document.querySelector('input[name="right"]');
    let anw=Number(l.value)+Number(r.value);
    let p=document.querySelector("#answer");
    p.textContent=anw;
}