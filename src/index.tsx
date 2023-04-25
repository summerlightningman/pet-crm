import { createRoot } from 'react-dom/client'
import App from "./App"
import GlobalStyle from "@styled/app";

import "./i18n"

createRoot(document.getElementById('root') as HTMLDivElement).render(<>
        <GlobalStyle/>
        <App/>
    </>
)
