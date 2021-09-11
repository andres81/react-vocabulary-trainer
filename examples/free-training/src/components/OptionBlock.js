import React from 'react'
import PropTypes from 'prop-types';

class OptionBlock extends React.Component {

    render() {
        return (
            <div className="row exercise_options">
                {this.getTextOptions(this.props.optionTexts)}
            </div>
        )
    }

    optionClicked = (e) => {
        this.props.optionChosen(e.target.getAttribute('data-uid'));
    }

    getTextOptions = (optionTexts) => {
        let options = [];
        let index = 0;
        for (let entry of optionTexts) {
            options.push(this.createOption(index, entry[0], entry[1]));
            ++index;
        }
        return options;
    }

    createOption = (index, optionId, buttonText) =>  {
        return <div key={index} className={"col-sm-12"}>
            <div>
                <button onClick={this.optionClicked}
                        data-uid={optionId}
                        type="button"
                        className="btn btn-primary exercise_option_button">
                    {buttonText}
                </button>
            </div>
        </div>;
    }
}

OptionBlock.propTypes = {
    optionTexts: PropTypes.instanceOf(Map).isRequired
}

export default OptionBlock;