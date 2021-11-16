import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="dropArea">
          <div className="placeholderUploadImage">DROP YOUR IMAGE HERE.</div>
          <input className="uploadButton" type="file" accept="image/*" />
        </div>
      </div>
    </div>
  );
}

export default App;
