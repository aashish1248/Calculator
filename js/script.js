let resultdisplay = ''
let result = document.getElementById('resultdisplay')
const buttons = document.querySelectorAll('.buttons')

buttons.forEach(btn => btn.addEventListener('click', function(button) {
    display(button.target.innerText)
}))

const display = (buttonvalue) => {
    if (resultdisplay.charAt(0) == '0' && resultdisplay.charAt(1) != '.') {
        resultdisplay = resultdisplay.substring(1)
    } else {
        if (buttonvalue == '=') {
            if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

            } else {
                result.innerText = eval(resultdisplay)
                resultdisplay = String(eval(resultdisplay))
            }
        }
        else {
            if (buttonvalue == 'DEL') {
                resultdisplay = resultdisplay.slice(0, -1)
            } else if (buttonvalue == 'X') {
                if (resultdisplay == '0' || resultdisplay == '') {

                } else if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

                }
                else {
                    resultdisplay += '*'
                }
            } else if (buttonvalue == '/') {
                if (resultdisplay == '0' || resultdisplay == '') {

                } else if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

                }
                else {
                    resultdisplay += '/'
                }
            } else if (buttonvalue == '.') {
                test = resultdisplay.split(/[+\-/*]/)
                if (resultdisplay == '0' || resultdisplay == '') {
                    resultdisplay = '0.'
                } else if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

                } else if (((test[test.length-1]).split('.')).length > 1) {

                } else {
                    resultdisplay += '.'
                }
            } else if (buttonvalue == '+') {
                if (resultdisplay == '0' || resultdisplay == '') {

                } else if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

                }
                else {
                    resultdisplay += '+'
                }
            } else if (buttonvalue == '-') {
                if (resultdisplay == '0' || resultdisplay == '') {

                } else if (resultdisplay.charAt(resultdisplay.length - 1) == '*' || resultdisplay.charAt(resultdisplay.length - 1) ==  '/' || resultdisplay.charAt(resultdisplay.length - 1) ==  '+' || resultdisplay.charAt(resultdisplay.length - 1) == '-' || resultdisplay.charAt(resultdisplay.length - 1) == '.') {

                }
                else {
                    resultdisplay += '-'
                }
            } else if (buttonvalue == 'RESET') {
                resultdisplay = ''
            }  else {
                resultdisplay += buttonvalue
            }
            if (resultdisplay == '') {
                result.innerText = '0'
            } else {
                result.innerText = resultdisplay
            }
        }
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key == '.' || key == '+' || key == '-' || key == '/') {
        display(key)
    } else if (key == '*' || key == 'X') {
        display('X')
    } else if (key == 'Backspace') {
        display('DEL')
    } else if (key == '=' || key == 'Enter') {
        display('=')
    }
})


const body = document.body
const container = document.querySelector('.container')
const theme = document.getElementById('theme')
theme.addEventListener('click', function() {
    if (theme.checked) {
        body.style.backgroundColor = '#F8F0E5'
        container.style.backgroundColor = '#EADBC8'
        result.style.backgroundColor = '#DAC0A3'
        buttons.forEach(button => {
            button.style.backgroundColor = '#DAC0A3'
        })
    }
    else {
        body.style.backgroundColor = '#352F44'
        container.style.backgroundColor = '#5C5470'
        result.style.backgroundColor = '#B9B4C7'
        buttons.forEach(button => {
            button.style.backgroundColor = '#B9B4C7'
        })

    }
})