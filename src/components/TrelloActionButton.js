import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Textarea from 'react-textarea-autosize';
class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: "",

    };
    openForm = () => {
        this.setState({
            formOpen: true
        })
    };
    closerForm = () => {
        this.setState({
            formOpen: false
        })
    };
    handelInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list " : "Add another card ";
        const buttonOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";


        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter list..." : "Enter a title for catd ...";
        const buttonTitle = list ? "Add list" : "Add card";

        return (
            <div>
                <Card style ={{
                    overflow :"visible",
                    minHeight :60,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closerForm}
                        value={this.state.text}
                        onChange={this.handelInputChange}
                        style ={{
                            resize:"none",
                            width: "100%",
                            overflow : "hidden",
                            outline :"none",
                            border :"none"
                        }}
                    />
                </Card>
                <div style ={styles.formButtonGroup}>
                    <Button variant ="contained" style ={{color:"white",backgroundColor:"#5aac44"}}>
                        {buttonTitle}{""}
                    </Button>
                    <Icon style ={{marginLeft:8, cursor:"pointer"}}>close</Icon>
                </div>
            </div>
        )
    }
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 273,
        paddingLeft: 10
    },
    formButtonGroup:{
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default TrelloActionButton;