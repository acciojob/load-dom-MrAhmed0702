//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = '';
  let p = document.createElement("p");
  p.innerText = "DOM load success";
  document.body.appendChild(p);
})