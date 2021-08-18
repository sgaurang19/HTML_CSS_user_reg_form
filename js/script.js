const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//show error
function showError(input, msg){
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control error";
    const small = formCtrl.querySelector("small");
    small.innerText = msg;
}
//show sucess
function showSucess(input){
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control success";
    const small = formCtrl.querySelector("small");
    if(small.value != ''){
    small.style.display="none"}
}

// check required
// const checkInput =(inputArr) =>{

//     inputArr.forEach(input => {
//         if(input.value.trim() === ''){
//             showError(input, `${input.id} is required`);
//         }
//         else{
//             showSucess(input);
//         }
        
//     });
// }
//for username
function checkUsername(username){
    if(username.value.trim()!= ''){
        var regexName = /^[A-Z ][a-z]{2,30}$/;
        var result = regexName.test(username.value);
        if(result == 1){
            showSucess(username);
        
        }else{
            showError(username, "required only characters (First letter should be capital) and length of 2 to 30");
        }
    }
    else{
        showError(username, 'Username is required');

    }
}
//for email validation
function checkEmail(email){
    var regexEmail = /^([a-zA-Z0-9._]+)(@)([a-zA-Z0-9]+)(.)([a-zA-Z]+)([.]+?)([a-zA-Z]+?)$/;
    var result = regexEmail.test(email.value);
    if(result == 1){
       showSucess(email)
    }else{
        showError(email,"Please Enter Valid Email");
    }
}
//for password
function checkPassword(pass){
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var result = regexPass.test(pass.value);

    if(result == 1){
        showSucess(pass);
    }else{
        showError(pass, "Please Enter at least 1 Upper or number Case charachters");
    }
}
//match password
function checkPass(pass, pass2){
    if(pass.value.trim()!='' && pass2.value.trim()!=''){
        checkPassword(pass)
        checkPassword(pass2)
        if (pass.value == pass2.value){
            showSucess(pass)
            showSucess(pass2)
        }
        else{
            showError(pass, "")
            showError(pass2, "Password must match");
        }
    }
    else{
            showError(pass, "password is required")
            showError(pass2, "password is required");

    }
}

// for validation
const validation = () =>{
    // event.preventDefault();
    //  checkInput([username, email,password,password2]);
    // for case 1: length
    checkUsername(username);

    
    //for case 2: email
    
    checkEmail(email);

    // checkPassword(password);
    // checkPassword(password2);
    //checkPass(password,password2);

}