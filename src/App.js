import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKey, fetchWords } from './redux/actions/keyboardAction';

function App() {
  const dispatch = useDispatch();
  const [userTypedLetter, setUserTypedLetter] = React.useState('')
  const onChangeUserInput = (e) => {
    setUserTypedLetter(e.target.value)
  }
  React.useEffect(() => {
    dispatch(fetchWords())
  }, [dispatch])

  React.useEffect(() => {
    dispatch({type: "ADD_LETTER", payload:userTypedLetter })
    dispatch( {type: "keyboad/KEYBOARD_EVENT"})
  }, [dispatch, userTypedLetter])
  const api = useSelector(({ keyboard }) => keyboard.apiWords)
  const words = useSelector(({keyboard})=> keyboard.userTypedLetter)
  // const [words, setWords] = React.useState('');
  // const api = ['hello', 'world'];
  // const [value, setValue] = React.useState(0)

  // const splapi = api[value]?.split('')
  // let boolArr = []
  // let splword = words.split('')
  // console.log(splword, 'spl');
  // console.log(api.length);

  // if (splword.join() === splapi?.join()) {
  //   setWords('')
  //   setValue((old) => old + 1)

  // }

  // for (let index = 0; index < words.length; index++) {
  //   if (splword[index] === ' ') {
  //     setWords('')
  //     setValue((old) => old + 1)
  //     const delspace = words.replace(words, '');

  //     setTimeout(() => {
  //       setWords(delspace)
  //     }, 500)
  //   }
  //   if (splword[index] === splapi[index]) {
  //     boolArr[index] = true
  //   } else {
  //     boolArr[index] = false
  //   }

  // }

  return (
    <div className="App">

      <strong></strong>
      <div style={{ margin: 10 }}>
        {api.map((item) => {
          return (
            <span style={{ margin: 5 }}>
              {item}
            </span>
          )
        })}
      </div>
      <input value={words} onChange={onChangeUserInput} />
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