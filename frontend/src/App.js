import './App.css';

// Utilities
import GlobalStateProvider from './store/GlobalStateProvider';
import { WebsocketStore } from './store/WebsocketStore';
import useWindowSize from './utils/useWindowSize';

// Mount components
import { Navbar } from './components/Navbar/Navbar';
import { ParallaxImage } from './components/ParallaxImage';
import { Body } from './components/Body';
import { WebsocketStatus } from './components/WebsocketStatus';

// App
function App() {
    const size = useWindowSize();
    return (
        <GlobalStateProvider>
            <WebsocketStore />
            <Navbar />
            <ParallaxImage />
            <div style={{height: size.height}}>
                <Body />
                <WebsocketStatus />
            </div>
        </GlobalStateProvider>
    );
}

export default App;
