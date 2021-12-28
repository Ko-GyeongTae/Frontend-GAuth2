import './Home.css';

function AuthHome() {

    return (
        <main className="App">
            <div className="header">
                <h1>Welcome to G-Auth!</h1>
                <p>Made with Golang!</p>
            </div>

            <div className="grid">
                <a className="sign-box" href="/signin/admin">
                    <h1>Login Page</h1>
                    <p>Login to G-Auth Project!</p>
                </a>
                <a className="sign-box" href="signup">
                    <h1>signup Page</h1>
                    <p>Join to G-Auth Project!</p>
                </a>
            </div>

        </main>
    );
}
export default AuthHome;