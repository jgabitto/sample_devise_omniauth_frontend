import React from 'react';

const App = () => {
    return (
        <div>
            <form action="https://sample-devise-omniauth.herokuapp.com/users/auth/github" method="POST">
                <input type="submit" value="Log in with Github" />
            </form>
        <form>
            <label htmlFor="email">email:</label>
            <br/>
            <input type="text" id="email" name="email" value="a@gmail.com" />
                <br />
            <label htmlFor="password">password:</label>
            <br />
            <input type="text" id="password" name="password" value="123456" />
            <br/>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default App;