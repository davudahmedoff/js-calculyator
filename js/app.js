const keyboard=[1,2,3,4,5,6,7,8,9,0,"+","-","*","/","=","SQRT","POW","C"];
const key=document.getElementById("key");
const text= document.getElementById("text");
 for(let i=0;i<keyboard.length;i++){
    const btn=`<button >${keyboard[i]}</button>`;
    key.innerHTML+=btn;
}
   const btnAll=document.querySelectorAll("#key button");
   for(let i=0;i<btnAll.length;i++){
    const btn=btnAll[i];
    btn.addEventListener("click",function(){
        const val=btn.innerText;

        switch (val) {
            case "=": {
                text.value=eval(text.value);
                break;
               }
               case "C": {
                text.value="";
                break;
               }
               case "SQRT": {
                text.value=Math.sqrt(+text.value);
                break;
               }
               case "POW": {
                text.value=Math.pow((+text.value),2);
                break;
               }  
        
            default:{
                text.value+=val;
            }
                break;
        }
        // if(val!=="="){
        //     text.value+=val;
        // }else{
        //       text.value=eval(text.value);
        // }
      
    })
   }

   