import './App.css';

// Utilities
import GlobalStateProvider from './store/GlobalStateProvider';
import { WebsocketStore } from './store/WebsocketStore';

// Mount components
import { Navbar } from './components/Navbar/Navbar';
import { ParallaxImage } from './components/ParallaxImage';
import { Body } from './components/Body';
import { WebsocketStatus } from './components/WebsocketStatus';

// App
function App() {
    return (
        <GlobalStateProvider>
            <WebsocketStore />
            <Navbar />
            <ParallaxImage />
            <div style={{height: window.innerHeight}}>
                <Body />
                <WebsocketStatus />
            </div>
        </GlobalStateProvider>
    );
}

export default App;
