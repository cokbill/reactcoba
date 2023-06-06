import './App.css';
import MyButton from './myButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css'
import Header from './header';


function App() {
  return (
    <div className='App'>
          <Header/>
          <MyButton/>
          <button className={MyStyles.normal}> Normal Button </button>
          <button className={MyStyles2.normal}> Normal Button </button>
   </div>
  );
}

export default App;
