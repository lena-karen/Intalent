import { defaultSettings } from "./constants";
import { settingsTypes } from "../types";

const defaultState = {
  isLoading: true,
  data: defaultSettings,
  error: null,
};

export const settingsReducer = (state = defaultState, action: any) => {
  const { type } = action;

  switch (type) {
    case settingsTypes.LOAD_SETTINGS_SUCCESS:
      return { isLoading: false, data: action.content, error: null };

    case settingsTypes.SAVE_SETTINGS_SUCCESS:
      return { isLoading: false, data: action.content, error: null };

    default:
      return state;
  }
};
