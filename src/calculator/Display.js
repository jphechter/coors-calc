import './Display.css';

function Display(props) {

  return (
    <div
      className="display"
      onClick={() => props.clear()}
    >
      
      <span>{props.input}</span>% ABV
    </div>
  )
}

export default Display;