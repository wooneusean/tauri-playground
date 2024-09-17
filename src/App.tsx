import './App.css';
import WindowsTitlebar from './components/window/WindowsTitlebar';
import Sidebar from './sections/Sidebar';
import MainContent from './sections/MainContent';
import Toolbar from './sections/Toolbar';

function App() {
  return (
    <>
      <WindowsTitlebar />

      <div className="px-12 pt-16 flex">
        <Sidebar />
        <div className="flex-1">
          <Toolbar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
