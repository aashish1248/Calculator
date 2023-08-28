let resultdisplay = '';
let result = document.getElementById('resultdisplay')
let buttons = document.querySelectorAll('.buttons');

buttons.forEach(btn => btn.addEventListener('click', function(button) {
    display(button.target.innerText)
}))

const display = (buttonvalue) => {
    if (resultdisplay.charAt(0) == '0') {
        resultdisplay = resultdisplay.substring(1)
    } else {
        if (buttonvalue == 'DEL') {
            resultdisplay = resultdisplay.slice(0, -1)
        } else if (buttonvalue == 'RESET') {
            resultdisplay = ''
        } else if (buttonvalue == '=') {
            calculation()
        } else {
            resultdisplay += buttonvalue
        }
        if (resultdisplay == '') {
            result.innerText = '0'
        } else {
            result.innerText = resultdisplay
        }
    }
}