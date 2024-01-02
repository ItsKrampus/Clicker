export default function Clicker({message, buttonText}){
    function handleClick(){
        alert(message)
    }
    
    return(
        <div style={{marginBottom:'20px'}}>
    <button onClick={handleClick}>{buttonText}  </button>
        </div>
    )
}