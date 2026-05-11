export default function LogoutView({loginviewmodel}){
    console.log(loginviewmodel)
    loginviewmodel.closeSession()
    window.location.href = "/"    
    return (<div></div>)
}