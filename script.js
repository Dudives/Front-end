
function tabuada(){
    let num = Number(document.getElementById("txtnum").value)
    let tab = document.getElementById('seltab')
    
    if(num == 0){
        window.alert("Por favor, digite um número!")
    }else{
        tab.innerHTML=''
        //for
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            tab.appendChild(item)
        }

    }
}