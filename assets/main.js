function TinhToan() {
    var txt = document.getElementById('txt')
    var btnResult = document.getElementById("result")
    var btn = document.querySelectorAll('.num')
    var operator = document.querySelectorAll('.ope')
    var Clear =document.querySelector('.clear')
    
    var DaTinh=false
    btn.forEach(e => {
        e.addEventListener('click', () => {
            if (!DaTinh) {
                txt.innerHTML += e.innerHTML
            }else{
                DaTinh=false
                txt.innerHTML=''
                txt.innerHTML+=e.innerHTML
            }
        })
    })
    operator.forEach(e => {
        e.addEventListener('click', () => {
            if (DaTinh) {
                DaTinh=false
                txt.innerHTML += e.innerHTML
            }else txt.innerHTML+=e.innerHTML
        })
    })
    btnResult.onclick = function () {
        try {
            tach(txt.innerHTML)
            DaTinh = true
        } catch (error) {
            txt.innerHTML='ERROR'
        }
    }
    Clear.onclick=()=>
    {
        txt.innerHTML=''
        DaTinh=false
    }

}
function tach(inputString) {
    console.log(inputString)
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    console.log(numbers)
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    var key = operators[0].toString();
    console.log(key)
    var a= parseFloat(numbers[0])
    var b= parseFloat(numbers[1])
    switch (key) {
        case '+':
            kq =  (a*10+b*10)/10
            break;
        case '-':
            kq =  (a*10-b*10)/10

            break;
        case "×":
            kq =  ((a*10)*(b*10))/100

            break;
        case '÷':
            kq =  ((a*10)/(b*10))

            break;
        default:
            break;
    }
    
    txt.innerHTML=kq
}
TinhToan()