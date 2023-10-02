import React from 'react';
import { Page } from './page';
import { HeaderItem } from '../components/header';

const headerItems: HeaderItem[] = [{ name: 'About us', href: './about' }, { name: 'Routes', href: './routes' }, { name: 'Contact us', href: './contact' }];

const MainPage: React.FC<{}> = () => {
    return <Page headerItems={headerItems} title="Tour 4 everyone" />;
};

export default MainPage;