import React from 'react';
import { Layout } from 'antd';
import './App.less';

const { Header, Footer, Content } = Layout;

const App: React.FunctionComponent = () => (
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;
