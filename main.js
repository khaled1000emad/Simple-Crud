const nameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const numberInput = document.querySelector('#number')
const list = document.querySelector('.users')
const error = document.querySelector('.Error')
const idInput = document.querySelector('#id')


const btn = document.querySelector("#button")
const btn_2 = document.querySelector('#button_2')
btn.addEventListener('click' ,(e) =>
{
   if(nameInput.value === '' || passwordInput.value === '' || numberInput.value === '' || idInput.value === '' )
   {
      alert('Please Enter All Fields')
   }
   else{
    
    const li = document.createElement('li')
    li.appendChild(document.createTextNode('Username: ' + nameInput.value + '  -- Password: ' + passwordInput.value + '  -- Mobile: ' + numberInput.value))
    list.appendChild(li)
    localStorage.setItem(list)
    idInput.value = ''
    nameInput.value = ''
    passwordInput.value = ''
    numberInput.value = ''
   }
})

btn_2.addEventListener('click' , (e) =>{
    if(nameInput.value === '' || passwordInput.value === '' || numberInput.value === '' || idInput.value === '' )
   {
      alert('Please Enter All Fields')
   }
    else{
        list.children[idInput.value-1].remove()
    idInput.value = ''
    nameInput.value = ''
    passwordInput.value = ''
    numberInput.value = ''
    }
})