import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../actions';

type FormProps = {
    addArticle: (payload: IPayload) => IAction
}

type IPayload = {
    title: string
}

type IAction = {
    type: string;
    payload: IPayload;
}

type FormState = {
    [key: string]: string;
}

class ConnectedForm extends Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            title: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e: FormEvent<HTMLInputElement>) {
        this.setState({ [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value });
    }

    submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { title } = this.state;
        title && this.props.addArticle({ title });
        this.setState({ title: "" });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.changeHandler}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch: (arg0: { type: string; payload: IPayload; }) => IAction) {
    return {
        addArticle: (article: IPayload) => dispatch(addArticle(article))
    };
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;