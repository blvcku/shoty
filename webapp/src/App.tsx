import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import NotFound from './pages/not-found/NotFound';
import LayoutTopBar from './components/layouts/LayoutTopBar';
import VideosList from './pages/videos-list/VideosList';
import Video from './pages/video/Video';

const App:React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LayoutTopBar />}>
					<Route index element={<VideosList />} />
					<Route path='/video/:id' element={<Video />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<GlobalStyle />
		</BrowserRouter>
	)
}

export default App;