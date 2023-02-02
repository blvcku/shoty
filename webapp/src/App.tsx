import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import NotFound from './pages/not-found/NotFound';
import LayoutTopBar from './components/layouts/LayoutTopBar';
import VideosList from './pages/videos-list/VideosList';
import Video from './pages/video/Video';
import Modal from './components/modal/Modal';
import UploadForm from './components/upload-form/UploadForm';

const App:React.FC = () => {

	const location = useLocation();

	/* Components in modal background - if the page is opened for the first time on modal route 
	it uses components from VideosList route otherwise from previous route */
	/* Before navigating to modal make sure to set location.state.background to current
	location - object taken from hook useLocation
		link example: 
			<Link to='/m/modalname/' state={{ background: location }} />
	 	function example(navigate taken from hook useNavigate):
			navigate('/m/modalname/', { state: { background: location } })
	*/
  	const background = (location.state && location.state.background) || {
		...location,
		pathname: location.pathname.startsWith('/m/') ? '/' : location.pathname,
	};

	return(
		<>
			{/* App routes */}
			{/* If modal is opened provide fake location to create background of modal */}
			<Routes location={background}>  
				{/* Routes with top-bar */}
				<Route path='/' element={<LayoutTopBar />}>
					<Route index element={<VideosList />} />
					<Route path='video/:id' element={<Video />} />
				</Route>
				{/* Not found route */}
				<Route path='*' element={<NotFound />} />
			</Routes>
			{/* Modal routes */}
			<Routes>
				{/* Routes with modal wrapper - modal portal */}
				<Route path='/m' element={<Modal />}>
					<Route path='upload' element={<UploadForm />} />
					{/* Not found modal */}
					<Route path='*' index element={<NotFound />} />
				</Route>
				{/* Route created to get rid of warning about missing routing paths */}
				<Route path='*' element={null} />
			</Routes>
			<GlobalStyle />
		</>	
	)
}

export default App;