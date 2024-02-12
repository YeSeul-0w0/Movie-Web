import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
    return (
    <ChakraProvider>
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/movie/:id"> <Detail /> </Route>
                <Route path="/" > <Home /> </Route>
            </Switch>
        </Router>
    </ChakraProvider>
    );
}

export default App;
