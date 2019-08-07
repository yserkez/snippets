import React, { Component } from 'react'
import Client from './Client'
import Editor from './Editor'
import TagsInput from './TagsInput'
import Placement from './Placement'

export default class UpdateSnippet extends Component {
    constructor(props){
        super(props)
        this.state = {
            objid: this.props.data._id,
            id: this.props.data.id,
            title: this.props.data.title,
            description: this.props.data.description,
            tags: this.props.data.tags,
            jscode: this.props.data.jscode,
            csscode: this.props.data.csscode,
            placement: this.props.data.placement,
            author: this.props.data.author, 
        };
        this.updateCode = this.updateCode.bind(this);
        this.updateTags = this.updateTags.bind(this);

    }
    updateCode = (code, update) => {
        this.setState({[code] : update})
    }
    updateTags = (tags) => {
        this.setState({tags: tags})
    }
    submit = (snip) => {
        Client.updateSnippet({
            objid: snip.objid,
            title: snip.title,
            description: snip.description,
            tags: snip.tags,
            jscode: snip.jscode,
            csscode: snip.csscode,
            placement: snip.placement,
            author: snip.author 
        });
        this.props.edit()
    }

    render() {
        return (
        <div className="updateSnippet" style={{ padding: '10px', border: '2px solid' }}>
            <h2>Update Snippet</h2>
            <span>Title</span>
            <input
                    type="text"
                    onChange={(e) => this.setState({ title: e.target.value })}
                    defaultValue={this.props.data.title} 
                    style={{ width: '200px' }}
                />
                <span>Description</span>
            <input
                type="text"
                onChange={(e) => this.setState({ description: e.target.value })}
                defaultValue={this.props.data.description} 
                style={{ width: '200px' }}
            /> 
            <span>Tags</span>
            <TagsInput update={this.updateTags} tags={this.state.tags}/>
            <div className="editors" style={{ width:'100%', display: 'inline-flex'}}>
                <Editor 
                    update={this.updateCode}
                    mode='javascript'
                    readOnly={false}
                    value={this.props.data.jscode}
                />
                <Editor 
                    update={this.updateCode}
                    mode='css'
                    readOnly={false}
                    value={this.props.data.csscode}
                />
            </div>
            <span>Placement</span>
            <Placement value={this.props.data.placement} handleChange={(e) => this.setState({ placement: e })} />
            <span>Author</span>
            <input
                type="text"
                onChange={(e) => this.setState({ author: e.target.value })}
                defaultValue={this.props.data.author}
                style={{ width: '200px' }}
            /> 
            <button onClick={() => this.props.edit()}>
                CANCEL
            </button>                  
            <button onClick={() => this.submit(this.state)}>
                UPDATE
            </button>
        </div>
        )
    }
}

const style = {
    border: '2px solid'
}