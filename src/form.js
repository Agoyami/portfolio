
async function recupfunc() {
    const form = document.getElementById('formulaire');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const mail = document.getElementById('mail').value;
        const name = document.getElementById('name').value;
        const msg = document.getElementById('message').value;

        





        document.getElementById('mail').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';


    })
}