import React from 'react';

const App = () => {
    const handleSubmit = async () => {
        const data = await fetch("https://sample-devise-omniauth.herokuapp.com/users/auth/github", {
            method: 'POST'
        });
        const res = data.json();
        console.log(res);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="hidden" name="authenticity_token" value="csrfToken" /> */}
                <input type="submit" value="Log in with Github" />
            </form>
            <a href="https://sample-devise-omniauth.herokuapp.com/users/auth/github">GET Log in with Github</a>
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