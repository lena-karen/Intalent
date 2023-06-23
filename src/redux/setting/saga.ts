import {
  saveSettingsRequestAction,
  loadSettingsSuccessAction,
} from "./actions";
import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { defaultSettings } from "./constants";
import { settingsTypes } from "../types";
function* loadSettingsSaga() {
  const currentUser = localStorage.getItem("user");

  if (currentUser) {
    const user = JSON.parse(currentUser);
    yield put(loadSettingsSuccessAction(user));
  } else {
    yield put(loadSettingsSuccessAction(defaultSettings));
  }
}

function* saveSettingsSaga({
  newSettings,
}: ReturnType<typeof saveSettingsRequestAction>): Generator {
  if (newSettings) {
    localStorage.setItem("user", JSON.stringify(newSettings));
  } else {
    localStorage.setItem("user", JSON.stringify(defaultSettings));
  }
  yield put({
    type: settingsTypes.SAVE_SETTINGS_SUCCESS,
    content: newSettings || defaultSettings,
  });
}

export function* settingsSaga() {
  yield takeEvery(settingsTypes.LOAD_SETTINGS_REQUEST, loadSettingsSaga);
  yield takeEvery(settingsTypes.SAVE_SETTINGS_REQUEST, saveSettingsSaga);
}
