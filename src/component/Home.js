import Style from './Style.css'
import img from './image/img.png'
import mission from './image/mission.png'
import vision from './image/vision.png'
export default function Home() {
    return (
        <>
    
            <div className='card'>
                <div className='left-card center'>
                    <h2>SkyStarter CEO transforms recruitment, connecting talent for empowered career growth. </h2>
                    <p>SkyStarter is a dynamic and innovative platform dedicated to bridging the gap between talented job seekers and forward-thinking recruiters. As the Founder and CEO, I am proud to lead a team committed to revolutionizing the recruitment landscape by fostering meaningful connections and empowering individuals to achieve their career goals.   summarize this paragraph</p>
                </div>
                <div className='right-card'>
                    <img src={img} className='card-image'></img>
                </div>
            </div>
            <div className='reverse'>
                <div className='left-card'>
                    <img src={mission} className='card-image'></img>
                </div>
                <div className='right-card center'>
                    <h1>Our Mission</h1>
                    <p>
                        At SkyStarter, our mission is clear—to be the catalyst for transformative career journeys. We strive to provide a seamless and effective job consultancy service, connecting employers with top-tier talent while assisting job seekers in realizing their professional aspirations.
                    </p>
                </div>
            </div>
            <div className='card'>
                <div className='left-card center'>
                    <h1>Our Vision</h1>
                    <p>
                        At SkyStarter, we envision a future where every individual's career aspirations are realized through seamless connections. Our dynamic platform is dedicated to transforming the recruitment landscape, creating a world where talented job seekers and forward-thinking recruiters collaborate effortlessly. We strive to empower individuals, fostering meaningful connections that propel them towards fulfilling their career goals. Our vision is to be the driving force behind a global community where every career journey is marked by innovation, empowerment, and unparalleled success.
                    </p>
                </div>
                <div className='right-card'>
                    <img src={vision} className='card-image'></img>
                </div>
            </div>
            <form className='chat-window' id='chat-window'>
                 <button className='top-right' onClick={()=>{document.getElementById('chat-window').style.display='none';
            document.getElementById('chat-button').style.display='block'}}><i className='fa fa-times'></i></button>
                 <input  type='text' className='chat-input'  placeholder='Type your query....'></input>
                 <button type='submit' className='chat-submit'><i className='fa fa-arrow-circle-right'></i></button>
            </form>
            <div className='chat-button' id='chat-button'  onClick={()=>{document.getElementById('chat-window').style.display='block';
            document.getElementById('chat-button').style.display='none'}}>
                <p><i className='fa fa-comment'></i> Chat with us</p>
            </div>
        </>

    );
}