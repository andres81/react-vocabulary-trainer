import React from "react";

import QueryBlock from "./QueryBlock";
import OptionBlock from "./OptionBlock"
import Menu from "./Menu";

import {StateUpdateType, getOptionTexts, getInitialState, updateState} from "react-vocabulary-trainer"

class VocTrainerImpl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vocabularyState: getInitialState()
        }
    }

    render() {

        const {level, optionsColumn, optionInputType, queryIndex, queryColumn, queryType, loadedVocabulary} =
            this.state.vocabularyState;

        let pairs = loadedVocabulary.pairs;
        let optionTexts = getOptionTexts(this.state.vocabularyState);
        let query = pairs[queryIndex][queryColumn][queryType];

        return (
            <div className="col align-self-center exercise-container">
                <Menu setLevel={(payload) => this.updateState(StateUpdateType.SET_LEVEL, payload)}
                    level={level}
                    queryColumn={queryColumn}
                    optionsColumn={optionsColumn}
                    queryType={queryType}
                    optionInputType={optionInputType}
                    switchColumnSides={(payload) => this.updateState(StateUpdateType.SWITCH_COLUMNS, payload)}
                    setQueryType={(payload) => this.updateState(StateUpdateType.SET_QUERY_TYPE, payload)}
                    setOptionsColumn={(payload) => this.updateState(StateUpdateType.SET_OPTIONS_COLUMN, payload)}
                    setQueryColumn={(payload) => this.updateState(StateUpdateType.SET_QUERY_COLUMN, payload)}
                    setInputType={(payload) => this.updateState(StateUpdateType.SET_INPUT_TYPE, payload)} />

                <QueryBlock queryType={queryType} query={query} />


                {optionInputType === StateUpdateType.INPUT_TYPES.OPTIONS &&
                    <OptionBlock optionChosen={(payload) => this.updateState(StateUpdateType.OPTION_CHOSEN, payload)}
                        optionTexts={optionTexts} />
                }
            </div>
        );
    }

    updateState = (updateType, payload) => {
        let newState = updateState(this.state.vocabularyState, updateType, payload);
        this.setState({vocabularyState: newState});
    }
}

export default VocTrainerImpl;