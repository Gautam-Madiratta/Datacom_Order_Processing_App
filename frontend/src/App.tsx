import OrderForm from './components/OrderForm/OrderForm';
import OrdersList from './components/OrdersList/OrdersList'

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>📦 Order Processing Interface</h1>
      <OrderForm />
      <hr style={{ margin: '2rem 0' }} />
      <OrdersList />
    </div>
  );
}

export default App;