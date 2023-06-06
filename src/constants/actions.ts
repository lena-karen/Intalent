/** @format */

export const createActionConst = (name: string, schema: any = {}) => {
	const keys = Object.keys(schema);
  
	if (!keys.length) {
	  return {
		REQUEST: `${name}.REQUEST`,
		PROCESS: `${name}.PROCESS`,
		SUCCESS: `${name}.SUCCESS`,
		FAILURE: `${name}.FAILURE`,
	  };
	}
  
	return keys.reduce((actions: any = {}, key) => {
	  actions[key] = createActionConst(`${name}.${key}`, schema[key]);
	  return actions;
	}, {});
  };
  
  export const ACTION = createActionConst('ACTION', {
	APP: {
	  INIT: {},
	},
	AUTH: {
	  LOG_IN: {},
	  SIGN_UP: {},
	},
	SETTINGS: {
	  LOAD: {},
	  SAVE: {},
	  RESET: {},
	},
	LANGUAGES: {
	  GET_ALL: {},
	},
	TRANSLATE: {
	  CREATE: {},
	},
  });
  