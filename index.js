const emailReceiver = 'temantulus1@gmail.com'

function submitForm() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let select = document.getElementById('input-select').value;
    let message = document.getElementById('input-textarea').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(select);
    console.log(message);



   if (name == '' || email == '' || email == '') {
      alert('Anda Harus Mengisi Semua Form!')
   }


   let a = document.createElement('a');

   a.href = `mailto:${emailReceiver}?subject=${select}&body= Hi, My name ${name}, ${select}, ${message}`;
   a.click();


}