import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './Components/Pages/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import Posts from './Components/Navbar';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/js/clean-blog';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),

	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<Home />
			</div>
		</ApolloProvider>
	);
}

export default App;
