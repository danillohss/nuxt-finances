export default ({ redirect }) => {
    console.log('Auth middleware')
    //Verificamos se o usuario está logado, aqui simulamos que ele está, ou seja loggedIn recebe true, depois fazemos a verificação com um IF
    const loggedIn = true;
    
    if (!loggedIn) {
        return redirect('/')
        console.log('Auth middleware')
    }

}