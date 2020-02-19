

const form = document.querySelector("form");
form.addEventListener('submit', handleSubmit);
function handleSubmit(e)
{
e.preventDefault();
const name = document.querySelector("#name");
document.write(name.value)
alert(name.value)
}
