import { createAction } from "typesafe-actions";

const loadAction = "load";
const setInteractedAction = "setInteracted";
const setAudioAction = "setAudio";

export const load = createAction(loadAction)();

export const setInteracted = createAction(setInteractedAction)();

export const setAudio = createAction(setAudioAction)<boolean>();