import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {StateUpdateType} from 'react-vocabulary-trainer'

class Menu extends React.Component {

    levelChosen = (level) => {
        this.props.setLevel(level);
    }

    render() {

        let classNames = "btn btn-secondary menu-button level-button";
        let levels = [];
        let currentClassNames;
        for (let i=0;i<3;++i) {
            currentClassNames = classNames;
            if (i === this.props.level) {
                currentClassNames += " active";
            }
            levels.push(<button key={i} onClick={() => this.levelChosen(i)} type="button" className={currentClassNames}>{i}</button>);
        }

        let queryTypeText = this.props.queryType === StateUpdateType.QUERY_TYPE.TEXT;
        let queryTypeSound = !queryTypeText;
        let optionInputChoice = this.props.optionInputType === StateUpdateType.INPUT_TYPES.OPTIONS;
        let optionInputTyping = !optionInputChoice;
        let optionsColumnSideLeft = this.props.optionsColumn === StateUpdateType.COLUMN_SIDE.LEFT;
        let optionsColumnSideRight = !optionsColumnSideLeft;
        let queryColumnSideLeft = this.props.queryColumn === StateUpdateType.COLUMN_SIDE.LEFT;
        let queryColumnSideRight = !queryColumnSideLeft;

        return (
            <div className="menu-container">
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setQueryType(StateUpdateType.QUERY_TYPE.TEXT), queryTypeText, "align-center")}
                    {this.createButton(() =>  this.props.setQueryType(StateUpdateType.QUERY_TYPE.SOUND), queryTypeSound, "music")}
                </div>
                {this.createNbspElement()}
                {this.props.optionInputType !== StateUpdateType.INPUT_TYPES.TYPING &&
                    <div className="btn-group btn-group-sm" role="group">
                        {levels}
                    </div>}
                {this.createNbspElement()}
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setQueryColumn(StateUpdateType.COLUMN_SIDE.LEFT), queryColumnSideLeft, "align-left", "Query column")}
                    {this.createButton(() => this.props.setQueryColumn(StateUpdateType.COLUMN_SIDE.RIGHT), queryColumnSideRight, "align-right", "Query column")}
                </div>
                {this.createNbspElement()}
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setOptionsColumn(StateUpdateType.COLUMN_SIDE.LEFT), optionsColumnSideLeft, "align-left", "Answer column")}
                    {this.createButton(() => this.props.setOptionsColumn(StateUpdateType.COLUMN_SIDE.RIGHT), optionsColumnSideRight, "align-right", "Answer column")}
                </div>
                {this.createNbspElement()}
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setInputType(StateUpdateType.INPUT_TYPES.OPTIONS), optionInputChoice, "list-ul", "Answer type")}
                    {this.createButton(() => this.props.setInputType(StateUpdateType.INPUT_TYPES.TYPING), optionInputTyping, "keyboard", "Answer type")}
                </div>
            </div>
        )
    }

    createNbspElement = () => {
        return <span> </span>
    }

    createButton = (clickHandler, active, iconClass, tooltipText) => {
        return <button onClick={clickHandler}
                title={tooltipText}
                type="button"
                className={
                    "btn btn-secondary menu-button menu-button-selectable" + (active ? " active": "")
                }>
            <FontAwesomeIcon icon={iconClass} />
        </button>
    }
}

export default Menu;