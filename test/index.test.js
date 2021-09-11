import {StateUpdateType, getOptionTexts, getInitialState, updateState} from "../index"

test('Test player at level 0', () => {
    let vocabularyState = getInitialState();
    for (let i=0;i<100;++i) {
        let queryIndex = vocabularyState.queryIndex;
        vocabularyState = updateState(vocabularyState, StateUpdateType.OPTION_CHOSEN, queryIndex);
        expect(vocabularyState.queryIndex).not.toEqual(queryIndex);
    }
});

test('Test player at level 1', () => {
    let vocabularyState = getInitialState();
    vocabularyState.level = 1;
    for (let i=0;i<100;++i) {
        let queryIndex = vocabularyState.queryIndex;
        vocabularyState = updateState(vocabularyState, StateUpdateType.OPTION_CHOSEN, queryIndex);
        expect(vocabularyState.queryIndex).not.toEqual(queryIndex);
    }
});

test('Test player at level 2', () => {
    let vocabularyState = getInitialState();
    vocabularyState.level = 2;
    for (let i=0;i<100;++i) {
        let queryIndex = vocabularyState.queryIndex;
        vocabularyState = updateState(vocabularyState, StateUpdateType.OPTION_CHOSEN, queryIndex);
        expect(vocabularyState.queryIndex).not.toEqual(queryIndex);
    }
});