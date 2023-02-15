import {createSlice} from "@reduxjs/toolkit";
import  competitors from "../../assets/competitors.json"



const initialState = {
    competitors: JSON.parse (window.localStorage.getItem('competitors')) ||
     competitors,
    currentCompetitor: null,
    voteCount: 0
}

   const competitorSlice = createSlice({
    name: "competitor",
    initialState,

    reducers:{

        setCurrentCompetitor: ( state, action) =>{
            state.currentCompetitor = action.payload;
        },
        increaesVote: ( state) =>{
            state.voteCount =state.voteCount + 1;
    },

    dicreaesVote: ( state) =>{
        state.voteCount = state.voteCount - 1;
    },

    addVote: (state, action) =>{
        let comIndex = state.competitors.findIndex(comp => comp.Id === 
            action.payload)
            state.competitors[comIndex].NumberofVotes =
           Number(state.competitors[comIndex].NumberofVotes) +
           Number(state.voteCount)

           window.localStorage.setItem('competitors', JSON.stringify(state.competitors))
    },
    resetState: (state) =>{
        state.currentCompetitor = null;
        state.voteCount = 0;
 
    }
    
}

});

export default competitorSlice.reducer;
export const {setCurrentCompetitor, dicreaesVote, increaesVote, addVote, resetState} =competitorSlice.actions;