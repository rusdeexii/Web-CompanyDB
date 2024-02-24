import './App.css';
import Layout from 'antd/es/layout/layout';
import AppHeader from './components/Header';
import Home from './pages/Home';
import AppAbout from './pages/About';
import AppServices from './pages/Services';
import AppFaq from './pages/Faq';
import AppFooter from './components/Footer';
import AppContact from './pages/Contact';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
        <AppAbout/>
        <AppServices/>
        <AppFaq />
        <AppContact/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
