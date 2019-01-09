function counter(currentState, action) {
    console.log('counter, currentState ' + currentState.count + ', action' + action.type);
    var newState = { count: currentState.count };
    switch(action.type) {
        case 'ADD':
            newState = { count: currentState.count + 1 };
            return newState;
        break;
        case 'MINUS':
            newState = { count: currentState.count - 1 };
            return newState;
        break;
        case 'RESET':
            newState = { count: 0 };
            return newState;
        break;
        default:
            return currentState;
    }
}

var state = { count: 0 };
var store = Redux.createStore(counter, state);

document.getElementById('add')
        .addEventListener('click', function(){
            var addAction = { type: "ADD" };
            console.log('ADD ' + addAction);
            store.dispatch(addAction);
        });

document.getElementById('minus')
        .addEventListener('click', function(){
            var minusAction = { type: "MINUS" };
            console.log('MINUS ' + minusAction);
            store.dispatch(minusAction);            
        });

document.getElementById('reset')
        .addEventListener('click', function(){
            var resetAction = { type: "RESET" };
            console.log('RESET ' + resetAction);
            store.dispatch(resetAction);            
        });

function updateView() {
    console.log('update view ' + store.getState().count);
    document.getElementById('counter')
            .innerHTML = store.getState().count.toString();
}

store.subscribe(updateView);