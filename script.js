async function fetchAPI(){
    
    try{
       const response =  await fetch('https://api.adviceslip.com/advice');
       const data = await response.json();

       changeData(data.slip);
    }
    catch(e){
        console.log("Something got wrong : ", e);
    }
}

function changeData(data){
    const id = document.getElementById("advice-id");
    id.children[0].innerHTML = data.id ;

    const advice = document.getElementById("advice");
    advice.innerHTML = data.advice ;
}

document.getElementById("dice").addEventListener('click', ()=>{
    fetchAPI();
});

