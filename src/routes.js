import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GithubPage from './pages/GithubPage';
import ProjectsPage from './pages/ProjectsPage';
import SettingsPage from './pages/SettingsPage';

const AllRoutes = (props) => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomeLayout />} >
                    <Route index element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/articles" element={<ArticlesPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    <Route exact path="/github" element={<GithubPage />} />
                    <Route exact path="/projects" element={<ProjectsPage />} />
                    <Route exact path="/settings" element={<SettingsPage />} />
                </Route>
                {/* <Route exact path="*" element={<PageNotFound />} /> */}
            </Routes>
        </Fragment>
    )
}

export default AllRoutes


