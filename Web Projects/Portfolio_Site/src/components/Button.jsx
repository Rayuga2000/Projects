
export default function Button({btn_color}){
    // const arr=Array.from(document.querySelectorAll('section'))
    // console.log(arr);
    return(
        <button onClick={()=>{         
            document.body.style.backgroundColor=btn_color
            // arr.map((element) => {
            //     console.log(element);
                
            //     element.style.backgroundColor="white"
            // });
            document.getElementById('contactButton').style.backgroundColor=btn_color
            document.getElementById('introButton').style.backgroundColor=btn_color
        }} 
        className="rounded-full p-3 border-4 border-white" 
        style={{backgroundColor: btn_color}}></button>
    )
}