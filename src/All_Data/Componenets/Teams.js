import React from 'react'
import { useState, useEffect } from 'react'
import team_data from '../teams.json'
import { Checkbox } from '@material-ui/core'
import '../ALL_CSS/teams.css'


function Teams(props) {

    //New Data for teams (static)
    const [updated_teams, setupdated_teams] = useState([])

    //This will gets updated as the value changes of search bar of team (section - 1)
    const [search_teams, setsearch_teams] = useState(updated_teams)

    //The team search bar value
    const [search_value, setsearch_value] = useState("")

    //Creating new data from the use of Existing data (New_Data = updated_teams)
    useEffect(() => {
        let temp = []
        team_data.map((teams, index) => {
            let new_team = {
                team_name: teams.team1,
                check: false
            }
            temp.push(new_team)
        })
        setupdated_teams(temp)
        setsearch_teams(temp)
    }, [])

    //Fucntion will call when there is any changes in any checkbox value 
    //And print & hide details in section - 2, according to the value of checkbox
    const handlechange = (team_name) => {

        const temp_arr = updated_teams.map((team, index) => {
            if (team.team_name === team_name) {
                team.check = !team.check
            }
            return team;
        })
        setupdated_teams(temp_arr)

    }

    //As the value of team search bar changes this function will filter data accordingly
    const handle_search = (bar_name) => {
        setsearch_value(bar_name)
        const filter_output = updated_teams.filter((team, index) => team.team_name.toLowerCase().includes(search_value.toLowerCase()))

        setsearch_teams(filter_output)
        if (bar_name.length < 1) {
            setsearch_teams(updated_teams)
        }
    }

    //Renders the team names with checkbox in section - 1
    return (
        <div className="teams">

            <div className="div_searchh"><span className="text_box_text">Search Team : </span><input type="text" size="30" className="input_text" value={search_value} onChange={(e) => handle_search(e.target.value)} /> </div>

            <div className="team_list">
                {
                    search_teams.map((team, index) => (
                        <div key={index} className="teams_eachteam">
                            <Checkbox
                                checked={team.check}
                                name={team.team_name}
                                color="primary"
                                onClick={(e) => props.on_checkbox_change(e.target.name)}
                                onChange={(e) => { handlechange(e.target.name); }}
                            />
                            <b>{team.team_name}</b>
                            <br></br>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Teams
