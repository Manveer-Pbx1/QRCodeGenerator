import Qr from "./Components/QRLoader";
function App() {
  return (
    <div className="App">
    <marquee direction = "right" scrollamount = "3"
     style = 
     {{
       background: "white"
       }}>
      QR CODE GENERATOR</marquee>
    <Qr/>
    </div>
  );
}

export default App;
