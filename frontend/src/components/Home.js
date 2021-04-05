import React from 'react';
import img1 from '../img/tutorial/1.png';
import img2 from '../img/tutorial/2.png';
import img3 from '../img/tutorial/3.png';
import img4 from '../img/tutorial/4.png';
import allimg from '../img/tutorial/all.png';
import loginimg from '../img/tutorial/login.png';
import sendimg from '../img/tutorial/send.png';
import profileimg from '../img/tutorial/profile.png';
import languagesimg from '../img/tutorial/languages.png';

// global.humanity = "A human";

function Home(props) {
    return (
        <>
            <h2>Welcome to Zooble Translate</h2>
            {/* <p>You are: {humanity}</p> */}
            <p>This is a website that allows you to post messages in a variety of animal languages.</p>
            <div class="centerprofile">
                <div class="tutorial">
                    <h3>How to use our site:</h3>
                    <div class="spacer"></div>

                    <p>First, make sure to log in with the "Log in" button</p>
                    <img src={loginimg} alt="Log in button"/>
                    <div class="spacer"></div>

                    <p>Navigate to "Send a Message"</p>
                    <img src={sendimg} alt="Send a Message button"/>
                    <div class="spacer"></div>

                    <p>Type the message you wish to send into the text box</p>
                    <img src={img1} alt="Text being entered in the message box"/>
                    <div class="spacer"></div>

                    <p>Click on the drop down menu to select the language you wish to translate your message into</p>
                    <img src={img2} alt="Drop down menu"/>
                    <div class="spacer"></div>

                    <p>(To view a list of languages and examples, visit the "Languages" page)</p>
                    <img src={languagesimg} alt="Languages button"/>
                    <div class="spacer"></div>

                    <p>View the preview below to see your message translated! If you are satisfied with how this looks, you may hit the submit button to post your message online!</p>
                    <img src={img3} alt="Translated message"/>
                    <div class="spacer"></div>

                    <p>You will then be navigated to the "All Messages" page, where you can see all of the most recent posts</p>
                    <img src={img4} alt="Messages on the All Messages page"/>
                    <div class="spacer"></div>

                    <p>You can navigate back there any time with the "All Messages" button</p>
                    <img src={allimg} alt="All Messages button"/>
                    <div class="spacer"></div>

                    <p>Or, you can view your own posts by clicking the "Profile" button</p>
                    <img src={profileimg} alt="Profile button"/>
                    <div class="spacer"></div>
                </div>
            </div>
            <div class="spacer"></div>
        </>
    );
}

export default Home;
// export {humanity};