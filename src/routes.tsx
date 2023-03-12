import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Post } from './pages/Post'

import { Header } from './components/Header'
import {defaultTheme} from './styles/themes'

export function Routes(){
    return(
        <Router>
            <ThemeProvider theme={defaultTheme}>
                <Header/>
                <Switch>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/post/:postNumber' element={ <Post/> } />
                </Switch>

                <GlobalStyles />
                
            </ThemeProvider>
        </Router>
    )
}