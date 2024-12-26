import { assets } from '../../assets/assets'
import { FaPlus } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import './Sidebar.css'
import { useState } from 'react';
import { useContext } from 'react';
import { user_Context } from '../../context/context';

const Sidebar = () => {

    const [extended , setextended] = useState(true);
     const {onsent , prevPrompts, setrecentPrompt , newchat} = useContext(user_Context);
 
     const loadprompt = async(prompt) =>{
      setrecentPrompt(prompt);
        await onsent(prompt);
     }

    return (<>
    
    <div className="sidebar">
        <div className="top">
        <MdOutlineMenu size={42} onClick={()=>{setextended(prev=>!prev)}}/>
        <br></br>
        <div onClick={()=>newchat()} className="new-chat">
            <FaPlus size={28}/>
            {extended ? <p> New Chat</p> : null}
          </div>
          {extended ?
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item,index)=>{
                 return(
                  <div onClick={()=>loadprompt(item)} className="recent-entry">
                  <p><MdOutlineMessage size={28}/>{item.slice(0,18)}...</p>
                </div>
                 )    
            })}
          

          </div>:null}
        </div>
        <div className="bottom">
      <div className="bottom-item">
      <FaQuestion size={28}/>
      {extended ? <p>Help</p> : null}
      </div>
      <div className="bottom-item">
      <FaHistory size={28}/>
      {extended ? <p>History</p> : null}
      </div>
      <div className="bottom-item ">
      <IoSettingsOutline size={28}/>
      {extended ? <p>Setting</p> : null}
      </div>
        </div>
    </div>
    </>)
}

export default Sidebar