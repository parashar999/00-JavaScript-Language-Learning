const form =document.querySelector('form')
// here taking variables without submit button will store zero which is not good


form.addEventListener('submit', (e)=>
{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height ==='' || height <0 || isNaN(height) || weight==='' || weight<0  || isNaN(weight))
    {
        results.innerHTML="Please give valid weight and height"
    }
    else
    {
        results.innerHTML= (weight/((height*height)/10000).toFixed(2))
    }
}
)