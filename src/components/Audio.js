import React, { Component } from "react";

export default class Audio extends Component {
    render() {
        let src = this.props.src;
        return (
            <audio controls>
                <source src={src} type="audio/mpeg"></source>
                Your browser does not support the audio element.
            </audio>
            );
    }

}