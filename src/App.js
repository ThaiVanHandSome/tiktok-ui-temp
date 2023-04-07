import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import GlobalStyle from '~/components/GlobalStyle';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
    return (
        <div className="App">
            <GlobalStyle>
                <Router>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Router>
            </GlobalStyle>
        </div>
    );
}

export default App;
