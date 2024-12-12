export default function Button({text = "Submit", onClick}){
    
    const btnStyle = {
        text: text
    }
    return(
        <button style={btnStyle} onClick={onClick}>{text}</button>
    )
}
