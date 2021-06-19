import "./Layout.css";
import {BrowserRouter} from "react-router-dom";

function Layout(): JSX.Element {
    return (
        <BrowserRouter>

            <div className="Layout">
                <header>
                    header
                </header>

                <main>

                </main>

                <footer>
                    footer
                </footer>
            </div>
        </BrowserRouter>

    );
}

export default Layout;
