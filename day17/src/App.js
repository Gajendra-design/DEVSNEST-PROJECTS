import './App.css';


function App() {

  return (
    <div className="container">
  <h1>Read Only Calory Container</h1> 
  <div className="inner">
  <Card title="burger" calory="150"/>
  <Card title="pizza" calory="250"/>
  <Card title="panipuri" calory="350"/>
  <Card title="rice" calory="50"/>
  <Card title="chapati" calory="450"/>
  <Card title="chaumin" calory="650"/>
  <Card title="ice-crim" calory="550"/>
  <Card title="noodals" calory="450"/>
  <Card title="kachori" calory="10"/>
  <Card title="pasta" calory="15"/>
  <Card title="samosa" calory="750"/>
  <Card title="pastri" calory="850"/>
  </div>
  </div>
  );
  }
  const Card=({title,calory})=>{
    return(
    <div className="info">
        <h2>{title}</h2>
        <p>you will gained {calory} from this food</p>
    </div>
    
    )
  }
  export default App;