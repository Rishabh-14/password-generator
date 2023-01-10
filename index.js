const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function rand(){
    return Math.floor(Math.random()*91)
}

function makeString(character){
    let string = ""
    for(let i=0 ; string.length < 15;i++){
        string += characters[rand()]
    }
    return string
}

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("password-1").innerHTML = makeString(characters)
    document.getElementById("password-2").innerHTML = makeString(characters)
})

console.log(characters.length)


