import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL} from "../constants/constants"
import { ICountry, IState } from "../types/interfaces";


const initialState:IState={
    loading:false,
    error:"",
    country:<ICountry>{},
    countryName:""
  
}


export const getCountry = createAsyncThunk(
    "country/getCountry",async(countryName:any)=>{
        console.log("deneme",countryName)
        return fetch(`${BASE_URL}${countryName}`)
                .then(res=>{
                    return res.json() 
                })
    }
)

const countrySlice=createSlice({
    name:"country",
    initialState,
    reducers:{
    },
        extraReducers(builder:any){
                    builder.addCase(getCountry.pending, (state: IState) => {
                        state.loading = true;
                      })
                    builder.addCase(getCountry.fulfilled,(state:IState,action:PayloadAction<any>)=>{
                        state.loading=false;
                        state.country=action.payload[0];
                        state.countryName=action.payload[0]?.name.common
                        // console.log("payload",action.payload)
                    })
                    builder.addCase(getCountry.rejected,(state:IState)=>{
                        state.loading=false;
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        state.error="An Error Occured"
                    })

}})


// export const {next,previous,addToFavourites}=pokemonSlice.actions
export default countrySlice.reducer


















