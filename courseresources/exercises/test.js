let test = document.querySelector("#test");
test.innerHTML = `
<p>Your current browser setup supports cross origin requests, so you should be able to run the exercises just fine!</p>
`;
test.classList.remove("fail")
test.classList.add("success")