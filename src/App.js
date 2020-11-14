import './App.css';
import React , {useState } from 'react';
import Teams from './All_Data/Componenets/Teams';
import Teamstats from './All_Data/Componenets/Teamstats';
import Instruction from './All_Data/Componenets/Instruction';
import Playerstats from './All_Data/Componenets/Playerstats';

//Importing Data Files
import teamstats from './All_Data/teamwise_home_and_away.json'
function App() {
  
  //Below State will contain team statatics.
  const [App_team_data, setApp_team_data] = useState(teamstats)

    const [count_of_set, setcount_of_set] = useState(0)
   //Fucntion for changing visibility of team statatics (Section - 2)
  function change_view(team_name)  {
    const temp_arr = App_team_data.map((team) =>{
        console.log(team_name)
        if(team.team === team_name)
        {
            team.check = !team.check
            if(team.check)
            {
              setcount_of_set(count_of_set+1)
            }
            else{
              setcount_of_set(count_of_set-1)
            }
        }
        return team
    })

    setApp_team_data(temp_arr)
}


  return (
    <div className="App">
     
     {/* Div for welcome text*/ }
    <div className="Welcome_text">Welcome To IPL Stats!!</div>

    {/* Div for logic of page */}
    <div className="ShortBox">

      {/* Component of Section - 1  */}
      <Teams on_checkbox_change = {change_view}/>
      {/* component of Section -2  */}
      <Teamstats updated_team_stats={App_team_data} count_of_set={count_of_set}/>
      {/* component of Section -3 */}
      <Playerstats/>
    </div>

    {/* final component for Instructions  */}
      <div>
        <Instruction/>
      </div>
    </div>
  );
}

export default App;
