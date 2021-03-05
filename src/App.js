import React from 'react';

const App = () => {
    const handleSubmit = async () => {
        // e.preventDefault();
        const data = await fetch(`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`, {
            mode: 'cors'
        });
        const res = await data.json();
        console.log(res);
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
                {/* <input type="hidden" name="authenticity_token" value="csrfToken" /> */}
                <button type="button" onClick={handleSubmit}>Login with Github</button>
            {/* </form> */}
            <a href="https://sample-devise-omniauth.herokuapp.com/users/auth/github">GET Log in with Github</a>
            <br/>
            <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}`}>Working Log in with Github</a>
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