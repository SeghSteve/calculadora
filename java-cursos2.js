var lista = document.getElementById('lista');
var texto = '<span></span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArray.push(this.value);
            lista.innerHTML = texto + listArray.join(', ');
        }else{
            listArray = listArray.filter(e => e !== this.value);
            lista.innerHTML = texto + listArray.join(', ');
        }
    })
}