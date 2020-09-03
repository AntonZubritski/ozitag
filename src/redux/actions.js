import {
  TOGLE_MENU,
  SWITCH_FALSE_NAV,
  TOGLE_UNDER_MENU,
  SWITCH_FALSE_UNDER_NAV,
} from './constants'

export const OpenMenu = (item) => {
  const obj = {
    ...item,
    active: !item.active,
  }
  return (dispatch) => {
    dispatch(FalseNav())
    dispatch(UpdateNav(obj))
  }
}
export const OpenUnderMenu = (item, menuId) => {
  const obj = {
    ...item,
    activeUnderMenu: !item.activeUnderMenu,
  }
  return (dispatch) => {
    dispatch(FalseUnderNav())
    dispatch(UpdateUnderNav(obj, menuId))
  }
}
export const UpdateNav = (body) => ({
  type: TOGLE_MENU,
  body,
})
export const UpdateUnderNav = (body, id) => ({
  type: TOGLE_UNDER_MENU,
  body,
  id,
})
export const FalseUnderNav = () => ({
  type: SWITCH_FALSE_UNDER_NAV,
})
export const FalseNav = () => ({
  type: SWITCH_FALSE_NAV,
})
