function counter(currentState, action) {
    console.log('currentState ' + currentState.fibbonaci + ', action' + action.type);
    var newState = { fibbonaci: currentState.fibbonaci, index: currentState.index };
    switch(action.type) {
        case 'NEXT':
            newState = { fibbonaci: getFibbonaci(currentState.index + 1), index: currentState.index + 1 };
            return newState;
        break;
        case 'RESET':
            newState = { fibbonaci: 0, index: 0 };
            return newState;
        break;
        default:
            return currentState;
    }
}

var state = { fibbonaci: 0, index: 0 };
var store = Redux.createStore(counter, state);

document.getElementById('next')
        .addEventListener('click', function(){
            var addAction = { type: "NEXT" };
            console.log(addAction.type);
            store.dispatch(addAction);
        });

document.getElementById('reset')
        .addEventListener('click', function(){
            var resetAction = { type: "RESET" };
            console.log(resetAction.type);
            store.dispatch(resetAction);            
        });

function updateView() {
    console.log(store.getState().fibbonaci);
    document.getElementById('fibbonaci')
            .innerHTML = store.getState().fibbonaci.toString();
}

store.subscribe(updateView);

function getFibbonaci(index) {
    if (index === 0) {
        return 0;
    } else if (index === 1) {
        return 1;
    }        

    let first = 0;
    let second = 1;
    let sum = 1;

    for(let i=2; i<=index; ++i) {
        sum = first + second;
        first = second;
        second = sum;
    }

    return sum;
}