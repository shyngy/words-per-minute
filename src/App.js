import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKey } from './redux/actions/keyboardAction';

function App() {
  const [words, setWords] = React.useState('');
  const api = ['hello', 'world'];
  const [value, setValue] = React.useState(0)

  const splapi = api[value]?.split('')
  let boolArr = []
  let splword = words.split('')
  console.log(splword, 'spl');
  console.log(api.length);
  
  if(splword.join() === splapi?.join()){
    setWords('')
    setValue((old) => old + 1)

  } 
  
  for (let index = 0; index < words.length; index++) {
    if(splword[index] === ' '){
      const delspace = words.replace(/\s/g, '');
      setTimeout(()=>{
        setWords(delspace)
      }, 1000)
    }
    if (splword[index] === splapi[index]) {
      boolArr[index] = true
    }else{
      boolArr[index] = false
    }
    
  }
  console.log(words);
  return (
    <div className="App">
      <div >
        {api.map((e) => {
          return (
            <span style={{ margin: "3px" }}>{e}</span>
          )
        })}
      </div>
      <input value={words} onChange={(e) => {
        setWords(e.target.value)
      }}>
      </input>
    </div>
  );
}

export default App;


// const dispatch = useDispatch();
//   const keys = useSelector(({ keyboard }) => keyboard)
//   React.useEffect(() => {
//     dispatch(fetchKey(key))
//   }, [key, dispatch])
//   const hello = ['hello', 'world']
//   let switchColor = ""
//   console.log(key);