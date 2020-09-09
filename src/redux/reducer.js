import * as constants from './constants'
import initialStateNav from './initialState'

const navReducer = (state = initialStateNav, action) => {
  switch (action.type) {
    case constants.TOGGLE_MENU:
      return {
        ...state,
        navItem: state.navItem.map((el) =>
          el.id === action.body.id ? action.body : el
        ),
      }
    case constants.TOGGLE_UNDER_MENU:
      return {
        ...state,
        navItem: state.navItem.map((el) =>
          el.id === action.id
            ? {
                ...state.navItem[el.id],
                menu: state.navItem[el.id].menu.map((underel) =>
                  underel.title === action.body.title ? action.body : underel
                ),
              }
            : el
        ),
      }
    case constants.SWITCH_FALSE_UNDER_NAV:
      return {
        ...state,
        navItem: state.navItem.map((el, key) => {
          return {
            ...state.navItem[key],
            menu: state.navItem[key].menu.map((underel) => {
              return { ...underel, activeUnderMenu: false }
            }),
          }
        }),
      }
    case constants.SWITCH_FALSE_NAV:
      return { ...initialStateNav }
    default:
      return state
  }
}

export default navReducer 
