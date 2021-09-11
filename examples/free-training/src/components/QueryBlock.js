import React from "react";

import {StateUpdateType} from 'react-vocabulary-trainer'

class QueryBlock extends React.Component {

    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    render() {

        const{queryType, query} = this.props;

        return (
            <div className="exercise_query">
                {this.createQuery(queryType, query)}
            </div>
        )
    }

    componentDidUpdate = () => {
        if (this.props.queryType === StateUpdateType.QUERY_TYPE.SOUND) {
            this.audioRef.current.load()
            this.audioRef.current.play();
        }
    };

    playAudio = () => {
        this.audioRef.current.play();
    }

    createQuery = (queryType, query) => {
        if (queryType === StateUpdateType.QUERY_TYPE.SOUND) {
            return <div>
                <button onClick={this.playAudio} className="btn btn-success "><i className="fas fa-music" /></button>
                <audio ref={this.audioRef}>
                    <source src={query && query["ogg"]} type="audio/ogg" />
                    <source src={query && query["mp3"]} type="audio/mpeg" />
                </audio>
            </div>
        }
        return <span className="exercise_query_text">{query}</span>
    }
}

export default QueryBlock;