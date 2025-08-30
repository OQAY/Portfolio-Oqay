import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div style={{ paddingTop: '100px', textAlign: 'center' }}>
          <h1>Portfolio React Migration</h1>
          <p>Header component implemented - Testing visual compatibility</p>
        </div>
      </main>
    </div>
  );
}

export default App;
