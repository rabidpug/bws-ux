import Layout from '.';
import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withInfo, } from '@storybook/addon-info';
const { SideBar, Content, Header, } = Layout;

storiesOf( 'Layout', module ).add( 'default',
                                   withInfo()( () => (
                                     <Layout parent>
                                       <SideBar />
                                       <Layout>
                                         <Header />
                                         <Content />
                                       </Layout>
                                     </Layout>
                                   ) ) );
