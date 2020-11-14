import React from 'react'
function Instruction() {
    return (
        <div>
            <div style={{ color:"red"}}><b>Instructions :</b> </div>
              <div style={{
                  textAlign:"left",
                  fontSize:"15px"
              }}>Section 1 : 1)All the teams are mentioned with their name and checkbox associated with it.</div>

              <div style={{
                  textAlign:"left",
                  fontSize:"15px"
              }}>Section 2 : 1) As you mark any team checkbox from section 1, respected team details will be print in Section - 2;</div>

              <div style={{
                  textAlign:"left",
                  fontSize:"15px"
              }}>Section 3 : 1)Given player names and checkbox associated with it.
                          <div style={{
                              marginLeft:"73px",
                              fontSize:"15px"
                          }}>2) as you mark any check box the details of respected player will be shown below it.</div>
                </div>
                         
        </div>
    )
}

export default Instruction
