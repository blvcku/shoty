import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/top-bar/TopBar';

const App:React.FC = () => {
	return(
		<BrowserRouter>
			<TopBar />
			<GlobalStyle />
		</BrowserRouter>
	)
}

export default App;