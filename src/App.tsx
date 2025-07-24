import './App.css';
import DemoAdvancedComponents from './components/DemoAdvancedComponets';
import DemoTypeScriptContextAndRefHook from './components/DemoTypeScriptContextAndRefHook';
import DemoTypeScriptProps from './components/DemoTypeScriptProps';
import DemoTypeScriptStateHooks from './components/DemoTypeScriptStateHooks';

function App() {
    return <div className="App">
        <h1>React TypeScript Demo</h1>
        <DemoTypeScriptProps />
        <DemoTypeScriptStateHooks />
        <DemoTypeScriptContextAndRefHook />
        <DemoAdvancedComponents />
    </div>
}

export default App;
