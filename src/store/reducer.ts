import { getSettings, setSettings } from "api";
import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export type Action = ActionType<typeof actions>;

const initialState = {
	link: "",
	title: "",
	isLoading: true,
	hasInteracted: false,
	canPlay: true,
	isPlaying: false,
}


const pageReducer = (state = initialState, action: Action): typeof initialState => {
	
	switch (action.type) {
		case getType(actions.load):
		const link = process.env.GITHUB_LINK;
		const title = process.env.title;
		const settings = getSettings();
		
		return {
			...state,
			...settings,
			link,
			title,
			isLoading: false,
		}
		case getType(actions.setInteracted):
		
		return {
			...state,
			hasInteracted: true,
		}
		case getType(actions.setAudio):
		const canPlay = action.payload;
		setSettings({
			canPlay
		});

		return {
			...state,
			canPlay,
		}
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	page: pageReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;