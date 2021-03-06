import React, {useState, setState} from 'react'
import ReactDOM from 'react-dom'
import actions from '../api'
import LanguageWizard from '../components/RegexWizard.js'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';



class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Language: 'P',
            Message: ''
        }
        
        this.handleDropChange = this.handleDropChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDropChange(event) {
        this.setState({Language: event.target.value}) 
    }

    handleInputChange(event) {
        this.setState({Message: event.target.value})
        if (this.state.Message.length > 200){alert("Message is too long!")}
    }

    handleSubmit(event) {
        if(!this.state.Message.replace(/ /g,"")){
            alert("Please, don't leave the message box empty! ^_^;")
            return
        }

        if(this.state.Message.length > 200){
            alert("Message is too long! No one wants to read your novel ;)")
            return
        }

        event.preventDefault()

        actions.addPost(this.state.Language + LanguageWizard(this.state.Message,this.state.Language))
            .then(newPost => {
                console.log('new post!', newPost)
                //Redirect to all-posts page
                this.props.history.push(`all-posts`)
            }).catch(console.error)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={event => this.handleDropChange(event)}>
                        <option value = "P">Pig Latin</option>
                        <option value = "C">Cat Meow</option>
                        <option value = "B">Bat Banter</option>
                        <option value = "S">Sloth Crawl</option>
                        <option value = "K">Chicken Scratch</option>
                        <option value = "L">Llama Spit</option>
                        <option value = "F">Ferret Wheel</option>
                        <option value = "H">Horse Code</option>
                    </select>
                    <input onChange={event => this.handleInputChange(event)}></input>
                    <button>Submit!</button>

                    <p>Preview:</p><p>{LanguageWizard(this.state.Message,this.state.Language)}</p>
                    <div class="spacer"></div>
                </label>
            </form>
        )
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('root')
)

export default withRouter(Test);