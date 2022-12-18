import React, { ReactNode } from 'react';
import {
    DocumentTable,
    Footer,
    Search,
} from './components';
import cls from './app.module.css';

function App() {
    return (
        <div className={cls.App}>
            <Search />
            <DocumentTable />
            <Footer />
        </div>
    );
}

export default App;
