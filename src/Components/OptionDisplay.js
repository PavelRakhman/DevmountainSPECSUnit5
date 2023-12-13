import React from "react";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { useSelector, useDispatch} from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    const dispatch = useDispatch()
    return <div className="stack">{currentPotentials.map((e,i)=>{
        return(
            <div className="stack">
            {currentPotentials.map((e,i)=>{
                return(
                    <h2 key={e.name.official} className="country-option" onClick={()=>{dispatch(setDisplayCountry(currentPotentials[i]))}}>
                    {e.name.common}
                    </h2>
                )
            })}
            </div>
        )
    })}</div>;
};

export default OptionDisplay;
