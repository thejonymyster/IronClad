import React from 'react';
import LanguageWizard from '../components/RegexWizard.js';

// global.humanity = "A human";

function LanguageList(props) {
    return (
        <>
            <h2>List of Available Languages</h2>
            <h3>and examples!</h3> 
            <div class="flexcenter">
                <div class="centeredlist">

                    <div class="boxlistitem">
                        <h4>Pig Latin</h4>
                        <p>The most famous of all animalese languages, but oddly enough, one often used to obscure information.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">My good chum, I must say: What a fantastic day to play in a PUDDLE OF MUD!</div>
                                <div class="langbox">{LanguageWizard("My good chum, I must say: What a fantastic day to play in a PUDDLE OF MUD!","P")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Cat Meow</h4>
                        <p>A relaxed feline language of cute sounds and meows. Purrecious.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">I never wanna be a problem to ya, nah, I just wanna be your friend! :)</div>
                                <div class="langbox">{LanguageWizard("I never wanna be a problem to ya, nah, what I wanna be is your friend! :)","C")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Bat Banter</h4>
                        <p>The language of the upside-down, cave-dwelling, vampire bat! Or maybe just a normal bat.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">What is up, fellow bats? Today is a fine day for fly hunting!</div>
                                <div class="langbox">{LanguageWizard("What is up, fellow bats? Today is a fine day for fly hunting!","B")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Sloth Crawl</h4>
                        <p>A very... slow... language... yawn...</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">Greetings, everyone. I hope you will be patient with me.</div>
                                <div class="langbox">{LanguageWizard("Greetings, everyone. I hope you will be patient with me.","S")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Chicken Scratch</h4>
                        <p>The sporadic and hasty language of the chickens, often lacking in consistent spelling. Just like english!</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">The quick brown fox jumps over the lazy dog. Who would believe such an audacious lie?</div>
                                <div class="langbox">{LanguageWizard("The quick brown fox jumps over the lazy dog. Who would believe such an audacious lie?","K")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Llama Spit</h4>
                        <p>A disagreeable language. Some say speaking it is like spitting into a listeners ear.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">There is literally nothing I want to say to you. Buzz off</div>
                                <div class="langbox">{LanguageWizard("There is literally nothing I want to say to you. Buzz off","L")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Ferret Wheel</h4>
                        <p>A silly little language, for these playful creatures. Bigger words are often harder to translate by hand.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">Hey there, wanna go play chutes and ladders? Alternatively, we can go to the playground!</div>
                                <div class="langbox">{LanguageWizard("Hey buddy, wanna go play chutes and ladders? Alternatively, theres always the playground!","F")}</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Horse Code</h4>
                        <p>Horse language. No further comment.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">Of course, of course, you can talk like a horse. You don't even need a degree in horseology!</div>
                                <div class="langbox">{LanguageWizard("Of course, of course, you can talk like a horse. You don't even need a degree in horseology!","H")}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="spacer"></div>
            </div>
            
        </>
    );
}

export default LanguageList;
// export {humanity};