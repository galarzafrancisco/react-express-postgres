import './App.css';

// Utilities
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStateProvider from './store/GlobalStateProvider';
import { WebsocketStore } from './store/WebsocketStore';
import { StartupHandlers } from './utils/StartupHandlers';
import useWindowSize from './utils/useWindowSize';

// Mount components
import { Navbar } from './components/Navbar/Navbar';
import { ParallaxImage } from './components/ParallaxImage';
import { Body } from './components/Body';
import { WebsocketStatus } from './components/WebsocketStatus';
import { Login } from './components/Login/Login';
import { Signin } from './components/Login/Signin';

// App
function App() {
    const size = useWindowSize();
    return (
        <GlobalStateProvider>
            <StartupHandlers />
            <WebsocketStore />
            <Router>
                <Navbar />
                <Route path='/'>
                    <ParallaxImage />
                    <div style={{height: size.height}}>
                        <Body />
                        <WebsocketStatus />
                    </div>
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signin'>
                    <Signin />
                </Route>
            </Router>
        </GlobalStateProvider>
    );
}

export default App;
