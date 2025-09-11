const refSpanArr = document.getElementsByTagName('span')
const refInput = document.getElementsByTagName('input')
const refbtn = document.getElementById('btn')
const reftextarea = document.getElementsByTagName('textarea')

gsap.from("#h4in",{
    y:100,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.15
})

setInterval(() => {
  const newDate = new Date();
  const timeVal = `${newDate.toLocaleDateString('en-GB')}, ${newDate.toLocaleTimeString()}`;
  refSpanArr[0].innerText = timeVal;
}, 1000);

const handleForm = (e) => {
    e.preventDefault()
    let idx = 0;
    let index = 1;
    for (index; index < refSpanArr.length - 1; index++) {
        refSpanArr[index].innerText = refInput[idx].value 
        refInput[idx].value = ''       
        idx++
    }
    refSpanArr[index] = reftextarea[0].value
    reftextarea[0].value = ''

}


refbtn.addEventListener('click',(e) => {
    handleForm(e)
})

