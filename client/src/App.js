import './App.css';
import fileIcon from './assets/file-icon.jpg';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="dropArea">
          <div className="upload">
            <form>
              <div className="fileIcon">
                <img src={fileIcon} alt="" />
              </div>
              <div className="placeholderUploadImage">
                DROP YOUR IMAGE HERE.
              </div>
              <div className="upload">
                <input type="button" className="uploadButton" value="Browse" />
                <input
                  type="file"
                  name="upload"
                  accept="image/*"
                  id="fileUpload"
                />
                <span className="fileName">Select file..</span>
              </div>
              <input
                type="button"
                className="uploadButton"
                value="Upload File"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
