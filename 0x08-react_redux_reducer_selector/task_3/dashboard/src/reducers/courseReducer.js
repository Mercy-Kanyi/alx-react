import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../action/courseActionTypes'

export function courseReducer(state=[], action={type: null}) {
    switch(action.type) {
      case FETCH_COURSE_SUCCESS:
        return action.data.map((item) => ({...item, isSelected: false}));
  
      case SELECT_COURSE:
        return state.map((item) => item.id == action.index ? {...item, isSelected: true} : {...item});
  
      case UNSELECT_COURSE:
        return state.map((item) => item.id == action.index ? {...item, isSelected: false} : {...item});
    
      default:
        return state;
    }
  }
  