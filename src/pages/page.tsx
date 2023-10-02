import React from 'react';
import Head from 'next/head';
import { Header, HeaderItem } from '../components/header';

export const Page: React.FC<{ title: string, headerItems: HeaderItem[] }> = ({ title, headerItems }: { title: string, headerItems: HeaderItem[] }) => {
    return (
        // <>
        //     <Head>
        //         <title>{title}</title>
        //     </Head>
        //     <body>
                <div>
                    <Header items={headerItems} />
                </div>
        //     </body>
        // </>
    );
};
