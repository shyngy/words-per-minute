import React, { Component } from 'react'
import './App.scss'

import WordsInput from './components/WordsInput'
import WordsSection from './components/WordsSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordsSection />
        <WordsInput />
      </div>
    )
  }
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
