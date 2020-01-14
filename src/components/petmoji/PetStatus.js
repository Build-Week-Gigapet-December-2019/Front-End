import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";


function PetStatus(props) {

    const [status, setStatus] = useState('TBD');
    const [foodData, setFoodData] = useState([]);
     
    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/parents/entries/${props.childId}/month`)
        .then (res => {
            setFoodData(res.data);
        })
        .catch(error => console.log(error, "ERROR"))
    }, [])
      

    const dailyAverages = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let totalAverage = null;


    // CHANGE FOODDATA ARRAY TO DYNAMIC DATA

    const getScore = foodData.map((object)=>{

        // REMOVES NULL VALUES FROM ENTRY FORM SUBMISIONS
        const nullRemover = (prop) => {
            
            Object.keys(prop).forEach(function (item) {
                return prop[item] === null ? prop[item] = 0
                    :   prop[item];
            });
        }
        nullRemover(object);

        // AVERAGES OUT THE FOOD DATA SERVINGS OBJECTS TO ONE NUMBER
        const average = (object.dairy+object.fruits+object.grains+object.proteins+object.vegetables+object.treats) / 6;           
        dailyAverages.push(average);
        const reduced = dailyAverages.reduce(reducer);
        const divider = dailyAverages.length;
        totalAverage = reduced / divider;

        totalAverage = Math.round(totalAverage);

        return  totalAverage;
    })    
    

    useEffect(() => {
        const getStatus = (prop) => {

            return prop > 5 ? setStatus('Excelent!')
                 : prop === 5 ? setStatus('Great!')
                 : prop >= 4 ? setStatus('Above Average!')
                 : prop >= 3 ? setStatus('Average')
                 : prop >= 2 ? setStatus('Poor')
                 : prop >= 1 ? setStatus('Weak')
                 : setStatus('Very Weak');
        }

        getStatus(totalAverage);
      }, );      

    return( 
        <div>
            <p>Health is: {status}</p>
        </div>
    );
}

export default PetStatus;