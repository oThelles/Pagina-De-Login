function login(){
    const emailUsuario = document.getElementById('email').value;
    const senhaUusario = document.getElementById('password').value;
    if (emailUsuario === '' || senhaUusario === ''){
        alert('Preencha todos os campos');
    }
    else{
        alert('Seja Bem Vindo');
    }
}