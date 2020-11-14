import React from 'react'
import { useState, useEffect } from 'react'
import { Checkbox } from '@material-ui/core'
import p_stats from '../most_runs_average_strikerate.json'
import '../ALL_CSS/player_stats.css'
function Playerstats() {


    //New Deatils of PLayer(static Data)
    const [new_p_details, setnew_p_details] = useState([])

    //Value Of Search Bar of Section - 3
    const [search_value, setsearch_value] = useState("")

    //Dynamic value According to Search_bar
    const [search_player, setsearch_player] = useState(new_p_details)

    //Creating new data from the use of Existing data (New_Data = new_p_details)
    useEffect(() => {
        let temp = []
        p_stats.map((player, index) => {
            let new_data = {
                batsman: player.batsman,
                total_runs: player.total_runs,
                out: player.out,
                numberofballs: player.numberofballs,
                average: Math.round(Number(player.average)),
                strikerate: Math.round(Number(player.strikerate)),
                check: false
            }
            temp.push(new_data)
        })
        setnew_p_details(temp)
        setsearch_player(temp)
    }, [])

    //Fucntion will call when there is any changes in any checkbox value 
    //And print & hide details according to the value of checkbox
    const action_event = (player_name) => {
        const temp_arr = new_p_details.map((player, index) => {
            if (player.batsman === player_name) {
                player.check = !player.check

            }
            return player;
        })
        setnew_p_details(temp_arr)
    }

    //As the value of player search bar changes this function will filter data accordingly
    const handle_change = (bar_value) => {

        setsearch_value(bar_value)

        const filter_output = new_p_details.filter((player) => player.batsman.toLowerCase().includes(search_value.toLowerCase()))
        setsearch_player(filter_output)
        if (bar_value.length < 1) {
            setsearch_player(new_p_details)
        }
    }

    //Renders the player details as per the current state of 'search_player' in section - 3
    return (
        <div className="for_div">
            <div className="div_search"><span className="text_box_text">Search Player :</span><input type="text" size="30" className="input_text" value={search_value} onChange={(e) => handle_change(e.target.value)} /></div>
            <div className="player_list">{
                search_player.map((player, index) =>
                    (
                        <div className="forall" key={index}>
                            <div>
                                <Checkbox
                                    checked={player.check}
                                    name={player.batsman}
                                    color="primary"
                                    onChange={(e) => { action_event(e.target.name); }}
                                />
                                <b>{player.batsman}</b>
                            </div>
                            <div>
                                {
                                    player.check ?
                                        (
                                            <h5>
                                                <b style={{ marginRight: "36px" }}>Name</b> <b>:</b> {player.batsman}<br></br>
                                                <b style={{ marginRight: "11px" }}>total_runs</b> <b>:</b> {player.total_runs}<br></br>
                                                <b style={{ marginRight: "50px" }}>Out</b> <b>:</b> {player.out}<br></br>
                                                <b style={{ marginRight: "23px" }}>Average</b> <b>:</b> {player.average}<br></br>
                                                <b style={{ marginRight: "5px" }}>Strike-Rate</b> <b>:</b> {player.strikerate}<br></br>
                                            </h5>
                                        ) :
                                        (null)
                                }
                            </div>
                        </div>
                    ))
            }
            </div>
        </div>
    )
}

export default Playerstats
