import './GoalForm.css';


const GoalForm = (props) => {

  const show = props.showNewGoalForm ? "show" : "hideForm";
  let formClasses = `goalForm ${show} `;
  if(!props.isMenuOpen && props.showNewGoalForm) {
    formClasses += "formHideMenu";
  }

  return (
    <form className={formClasses}>
      <h1>{props.isMenuOpen}</h1>
      <h3>Goal: </h3>
      <input></input>
      <button><b>Set</b></button>
    </form>
  )
}

export default GoalForm;