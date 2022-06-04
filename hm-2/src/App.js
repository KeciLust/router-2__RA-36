
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import CreatePostPage from './components/CreatePostPage';
import ViewPostPage from './components/ViewPostPage';
import ChangePostPage from './components/ChangePostPage';


function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='new' element={<CreatePostPage />} />
        <Route path='post/:id' element={<ViewPostPage />} />
        <Route path='post/change/:id' element={<ChangePostPage />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
