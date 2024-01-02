export default function Clicker({message, buttonText}){
    function handleClick(){
        alert(JSON.stringify(message))
    }
    
    return(
        <div style={{marginBottom:'20px'}}>
    <button onClick={handleClick}>{buttonText}  </button>
        </div>
    )
}