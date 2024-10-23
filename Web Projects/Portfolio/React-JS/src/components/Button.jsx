
export default function Button({btn_color}){
    return(
        <button onClick={()=>{         
            document.body.style.backgroundColor=btn_color
            document.getElementById('contactButton').style.backgroundColor=btn_color
            document.getElementById('introButton').style.backgroundColor=btn_color
            console.log("Clicked")
        }} 
        className="rounded-full p-3 border-4 border-white" 
        style={{backgroundColor: btn_color}}></button>
    )
}