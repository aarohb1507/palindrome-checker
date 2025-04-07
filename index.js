const input = document.getElementById("input");



function reverse(str){
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value; 
  a = reverse(value);
  if(a == value ){
    alert("It is a Palindrome! ");
  }else{
    alert("Not a Palindrome!!");
  }
}
