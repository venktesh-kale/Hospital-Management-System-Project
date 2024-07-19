
function userlogin(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "venky@gmail.com" && form.usrpsw.value == "1234")
  {
    window.open('index.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("your user name or password is wrong")/*displays error message*/
  }
}
