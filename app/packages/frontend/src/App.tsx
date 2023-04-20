import { Layout } from 'antd';
import CurrencyPricesPage from './pages/CurrencyPricesPage';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="main">
      <Header>
        <img src="favicon.png" alt="" />
        <span style={{ marginLeft: 20 }}>Cloudbank</span>
      </Header>
      <Content>
        <CurrencyPricesPage />
      </Content>
      <Footer className="small">Cloudbank 2023</Footer>
    </Layout>
  );
}

export default App;
