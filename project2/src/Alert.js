const Alert=({type,msg,list})=>{
    return(
        <>
<p className={`alert alert-${type}`}>{msg}</p>        </>
    )
}
export default Alert;