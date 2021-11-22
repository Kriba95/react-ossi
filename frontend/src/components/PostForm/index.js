import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title = "",
            body = ""             
        }
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }


    render() {
        const {  title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    <button type="submit">submit</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
 