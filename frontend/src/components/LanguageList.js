import React from 'react';

// global.humanity = "A human";

function LanguageList(props) {
    return (
        <>
            <h2>List of Available Languages</h2>
            <h3>and examples!</h3> 
            <div class="flexcenter">
                <div class="centeredlist">

                    <div class="boxlistitem">
                        <h4>Binomial Name</h4>
                        <p>Blurb</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">A sample sentence, best suited to show off
                                the features of whatever language is on display.</div>
                                <div class="langbox">The same sample sentence, transformed into
                                its respective language.</div>
                            </div>
                        </div>
                    </div>

                    <div class="boxlistitem">
                        <h4>Pig Latin</h4>
                        <p>The most famous of all animalese languages, something something.</p>
                        <div class="titleandboxes">
                            <p>Example</p>
                            <div class="twoboxes">
                                <div class="langbox">A sample sentence, best suited to show off
                                the features of whatever language is on display.</div>
                                <div class="langbox">The same sample sentence, transformed into
                                its respective language.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LanguageList;
// export {humanity};