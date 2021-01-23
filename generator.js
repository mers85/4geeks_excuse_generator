
function sampleFromArray(array){
    return array[Math.floor(Math.random() *  array.length)];
}


function excuseGenerator(){
    let who_elements = ['The dog', 'His turtle', 'My Grandma', 'My bird'];
    let action_elements = ['ate', 'peed', 'crushed', 'broke'];
    let what_elements = ['my homework', 'the keys', 'the car'];
    let when_elements = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let who =  sampleFromArray(who_elements);
    let action =  sampleFromArray(action_elements);
    let what =  sampleFromArray(what_elements);
    let when =  sampleFromArray( when_elements);
    
    let excuse = who + ' ' + action + ' ' + what + ' ' + when + '.'

    return excuse;
}
    

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
});
