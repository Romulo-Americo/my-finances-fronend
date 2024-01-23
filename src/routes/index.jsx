import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../pages/home/Index'


export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exect element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}