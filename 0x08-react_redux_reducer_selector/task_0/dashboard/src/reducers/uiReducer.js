import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE
} from "../action/uiActionTypes";
const initalState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export function uiReducer(state=initialState, action={type: null}) {
    switch(action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: true
        };
  
      case HIDE_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: false
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          isUserLoggedIn: true
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          isUserLoggedIn: false
        };
      
      case LOGOUT:
        return {
          ...state,
          isUserLoggedIn: false
        };
      
      default:
        return state;
    }
  }