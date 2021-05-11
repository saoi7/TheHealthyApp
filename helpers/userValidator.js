export async function userValidator(email, password) {
   var check = fetchData( email,password);
   console.log(check);
  if (check) return ""; 
    //if (email=="s.123@gmail.com" && password== "123456") return ""
    //if (password.length < 5) return 'Password must be at least 5 characters long.'
    return 'User Not Found'
  }
  async function fetchData(email, password){
      var res =  await fetch('http://192.168.0.29:1348/login/'+email+"&"+password)
    return await res.body;
    
  }