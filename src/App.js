import { useState } from 'react';
import './App.css';
import GoalMenu from './GoalMenu';
import GoalForm from './GoalForm';

function App() {
  const [displayMenu, setDisplayMenu] = useState(true);

  const [showNewGoalMenu, setShowNewGoalMenu] = useState(true);

  const newGoalButtonClick = () => {
    setShowNewGoalMenu(!showNewGoalMenu);
  }

  return (
    <div className="mainContainerWithMenu">
      <GoalMenu showMenu={displayMenu} openNewGoalForm={newGoalButtonClick} />
      <GoalForm showNewGoalForm={showNewGoalMenu} isMenuOpen={displayMenu} />
      <div className="calendar">
        <button  className="menuButton" onClick={() => { setDisplayMenu(!displayMenu) }}>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#a9a9a9"><g><rect fill="none" height="24" width="24"/><path d="M16,20H2V4h14V20z M18,8h4V4h-4V8z M18,20h4v-4h-4V20z M18,14h4v-4h-4V14z"/></g></svg>
        </button>
      </div>
    </div>
  );

}

export default App;