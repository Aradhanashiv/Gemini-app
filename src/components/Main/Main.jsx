import './Main.css'
import { assets } from '../../assets/assets'
import { SlCompass } from "react-icons/sl";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { useContext } from 'react';
import { user_Context } from '../../context/context';
import { FcBusinessman } from "react-icons/fc";






const Main = () => {

    const {onsent , recentPrompt, showresult,  loading,  resultdata, input, setinput, } = useContext(user_Context);

    return (<>
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.ai} alt="" width={50}/>
        </div>
        <div className="main-container">
        {!showresult ? 
        <>
          <div className="greet">
                <p><span>Hello, Aradhana.</span></p>
                <p>How Can I help You Today?</p>
            </div>
        
        <div className="cards">
            <div className="card">
                <p>Lorem ipsum dolor sit, Quae, sint blanditiis minus dignissimos molestias cumque.</p>
                <span><SlCompass size={28}/></span>
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit, Quae, sint blanditiis minus dignissimos molestias cumque.</p>
                <span><AiOutlineBulb size={28}/></span>
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit, Quae, sint blanditiis minus dignissimos molestias cumque.</p>
                <span><FaRegMessage size={28}/></span>
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit, Quae, sint blanditiis minus dignissimos molestias cumque.</p>
                <span><IoCodeSlash size={28}/></span>
            </div>
        </div>
        </>
        :
        <div className="result">
             <div className="result-title">
             <span><FcBusinessman size={28}/></span>
            <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
            <img src={assets.ai} alt="" width={25}/>
            {loading ? <div className="loader">
            <hr />
            <hr />
            <hr /> 
            </div> :
            <>
            <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
           
            
            </>
            
            }
            </div>
        </div>
      
        }
 {/* <div className="main-container"> */}
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) =>{setinput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallary} alt="" width={28}/>
                    <img src={assets.mic} alt="" width={25}/>
                    {input ? <img onClick={()=>onsent()} src={assets.sent} alt="" width={25}/> : null}
                </div>
            </div>
            {/* <p className='bottom-info'></p> */}
        </div>
        </div>
       
       
    </div>
    
</>)

}

export default Main