import { useState } from 'react';
import Button from './components/Button.tsx'

const App = () => {
  const [disabled, setDisabled] = useState(false)
  const onClickHandler=()=>{
    alert('Hello');
  }
  return (
    <div>
      <Button label='Click Me1' onClick={onClickHandler} disabled={disabled}/>
      <Button label='Click Me2' onClick={onClickHandler} disabled={!disabled}/>
    </div>
  )
}
export default App