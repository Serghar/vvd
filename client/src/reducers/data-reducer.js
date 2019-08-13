import ActionConstant from '../hooks/constants';

const defaultState = {
  data: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionConstant.FETCH_DATA: {
        return {
            ...state,
            data: action.res, 
        };
    }
    default: {
        return { ...state };
    }
  }
};
