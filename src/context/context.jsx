import { createContext, useState } from "react";
import run from "../config/gemini";


export const user_Context = createContext();


const Contextprovider = ({children}) =>{

    const [input,setinput] = useState("");
    const [recentPrompt,setrecentPrompt] = useState("");
    const [prevPrompts,setprevPrompts] = useState([]);
    const [showresult,setshowresult] = useState(false);
    const [loading,setloading] = useState(false);
    const [resultdata,setresultdata] = useState("");

    const delaypara = (index,nextword) =>{
          setTimeout(()=>{
            setresultdata(prev=>prev+nextword)
          },75*index)
    }

    const newchat = () =>{
        setloading(false)
        setshowresult(false)
    }


    const onsent = async (prompt) =>{
        setresultdata("");
        setloading(true);
        setshowresult(true);
        let response ;
        if(prompt !== undefined){
             response =  await run(prompt);
             setrecentPrompt(prompt);
        }
        else{
            setprevPrompts(prev=>[...prev,input]);
            setrecentPrompt(input);
            response = await run(input)
        }
        
       
        const responsearray = response.split("**");
        let newresponse  = "";
        for(let i =0 ; i< responsearray.length ; i++){
            if( (i == 0) || (i%2 !== 1)){
                newresponse += responsearray[i];
            }
            else{
                newresponse += "<b>"+responsearray[i]+"</b>"
            }
        }
        let newresponse2 = newresponse.split("*").join("</br>")
        let newresponsearray = newresponse2.split(' ');
        for(let i =0 ; i< newresponsearray.length ; i++){
            const nextword = newresponsearray[i];
            delaypara(i,nextword+" ");
        }
        // setresultdata(newresponse2);
        setloading(false);
        setinput("");
    }

    

    const contextvalue = {
        prevPrompts,
        setprevPrompts,
        onsent,
        setrecentPrompt,
        recentPrompt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,  
        newchat,      
    }

    return <user_Context.Provider value={contextvalue}>
        {children}
    </user_Context.Provider>
}

export default Contextprovider