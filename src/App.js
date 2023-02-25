import SignIn from "./pages/signin/SignIn";
import connectWallet from "./utils/wallet";

function App() {
  async function attemptConnectWallet() {
    console.log('Tryna connect Wallet...');
    await connectWallet();
    console.log('Voila');
  }
  return (
    <div>
      <button onClick={ async () => attemptConnectWallet()}>Connect Wallet</button>
    </div>
  );
}

export default App;
