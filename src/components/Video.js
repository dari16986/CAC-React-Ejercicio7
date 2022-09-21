import React, { Component } from "react";

export default class Video extends Component {
    render() {
        let src = this.props.src;
        return (
                <video className="Video" width="854" height="480" autoplay="true" muted loop>
                   <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               );
    }

}



