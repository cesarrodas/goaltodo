import "./GoalMenu.css";

function GoalMenu (props){

  const showMenu = props.showMenu ? "" : "hide";

  return (
    <div className={ "bg " + showMenu }>
      <button className="newGoalButton" onClick={props.openNewGoalForm}>
        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#a9a9a9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
      </button>
      <div className="goalsContainer">
        <ul>
          <li>Ones</li>
        </ul>
      </div>
    </div>
  )
}

export default GoalMenu;