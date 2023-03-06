import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed,  SearchFeed, ChannelDetail } from './components';
import VideoDetail from './components/VideoDetail';

 
const App = () => (
   <BrowserRouter>
     <Box sx={{ backgroundColor: '#000'}}>
        <Navbar  />
        <Routes>

        <Route path='/' exact element={<Feed />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
     </Box>

   </BrowserRouter>

);
export default App