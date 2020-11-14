import React from 'react'
import '../ALL_CSS/team_stats.css'


function Teamstats(props) {

    //Props will set the data in 'teamStates' as per the changes in any checkbox of section - 1
    //const [teamStates, setTeamStates] = useState(props.updated_team_stats)

    //Renders the 'teamStates' with deatils in section - 2
    return (
        <>
            
            <div className="forAll">
            <div className="selected_team">Seleted Teams</div>
                {
                    !props.count_of_set ?
                        <div style={{
                            marginTop: "126px",
                            color: "orangered",
                            fontWeight: "500"
                        }}>No Teams Selected From Left Side Panel</div> : <div className="wrapper"> {props.updated_team_stats.map((team, index) =>


                            team.check &&
                            (
                                <div key={index}>
                                    <h1 className="for_name">{team.team}</h1>
                                    <div className="for_details">
                                        <h5><b style={{ marginRight: "66px" }}>Home Wins</b>           <b>:</b> {team.home_wins}<br></br>
                                            <b style={{ marginRight: "70px" }}>Away Wins </b>          <b>:</b> {team.away_wins}<br></br>
                                            <b style={{ marginRight: "46px" }}>Home matches</b>        <b>:</b> {team.home_matches}<br></br>
                                            <b style={{ marginRight: "49px" }}>Away matches</b>        <b>:</b> {team.away_matches}<br></br>
                                            <b style={{ marginRight: "-1px" }}>Home Win Percentage</b> <b>:</b> {Math.round(team.home_win_percentage)}<br></br>
                                            <b style={{ marginRight: "3px" }}>Away Win Percentage</b> <b>:</b> {Math.round(team.away_win_percentage)}</h5>
                                    </div>
                                </div>
                            ))}</div>
                }
            </div>
        </>
    )
}

export default Teamstats