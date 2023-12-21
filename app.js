/*document.getElementById('show').addEventListener('change', function () {
    var pwdInput = document.getElementById('password');
    if (this.checked) {
        pwdInput.type = 'text';
    } else {
        pwdInput.type = 'password';
    }
});
*/
s=parseInt(document.getElementById('s').innerHTML);
h=parseInt(document.getElementById('h').innerHTML);
m=parseInt(document.getElementById('m').innerHTML);
let id=false;
let go;
document.getElementById("go").addEventListener('click',function(){

if(id==false){
    id=true;

   go= setInterval(function(){
        if(s<59){
            s=s+1;
        }
        else if(m<59){

            m=m+1;
            s=0;

          
        }
        else{
            h=h+1;
            s=0;
            m=0;
        }
        if(s<10){
        document.getElementById('s').innerText = "0"+s;
        }
        else{
            document.getElementById('s').innerText = s;
        }
        if(m<10){
            document.getElementById('m').innerText = "0"+m;
        }
        else{
            document.getElementById('m').innerText = m;
        }
        if(h<10){
            document.getElementById('h').innerText = "0"+h;
        }
        else{
            document.getElementById('h').innerText = h;
        }

    },1000);

}});
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(go);
    id=false;
})