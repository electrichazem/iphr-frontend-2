import React from "react";

const LoginPage = () => {
    return (<main>
        <h1>Login Page</h1>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </main>)
}

export default LoginPage;