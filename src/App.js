import React from 'react'
import './App.css'
import WordsInput from './components/WordsInput'
import WordsSection from './components/WordsSection'

function App() {
  return (
    <div className="App">
      <WordsSection />
      <WordsInput />
    </div>
  )
}

export default App

// const dispatch = useDispatch();
//   const keys = useSelector(({ keyboard }) => keyboard)
//   React.useEffect(() => {
//     dispatch(fetchKey(key))
//   }, [key, dispatch])
//   const hello = ['hello', 'world']
//   let switchColor = ""
//   console.log(key);
