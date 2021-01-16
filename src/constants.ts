import { FontFamily } from "./element/types";

export const APP_NAME = "Excalidraw";

export const DRAGGING_THRESHOLD = 10;
export const LINE_CONFIRM_THRESHOLD = 10;
export const ELEMENT_SHIFT_TRANSLATE_AMOUNT = 5;
export const ELEMENT_TRANSLATE_AMOUNT = 1;
export const TEXT_TO_CENTER_SNAP_THRESHOLD = 30;
export const SHIFT_LOCKING_ANGLE = Math.PI / 12;
export const CURSOR_TYPE = {
  AUTO: "",
  CROSSHAIR: "crosshair",
  GRABBING: "grabbing",
  MOVE: "move",
  POINTER: "pointer",
  TEXT: "text",
};
export const POINTER_BUTTON = {
  MAIN: 0,
  SECONDARY: 2,
  TOUCH: -1,
  WHEEL: 1,
};

export enum EVENT {
  BEFORE_UNLOAD = "beforeunload",
  BLUR = "blur",
  COPY = "copy",
  CUT = "cut",
  DRAG_OVER = "dragover",
  DROP = "drop",
  GESTURE_CHANGE = "gesturechange",
  GESTURE_END = "gestureend",
  GESTURE_START = "gesturestart",
  HASHCHANGE = "hashchange",
  KEYDOWN = "keydown",
  KEYUP = "keyup",
  MOUSE_MOVE = "mousemove",
  PASTE = "paste",
  POINTER_MOVE = "pointermove",
  POINTER_UP = "pointerup",
  RESIZE = "resize",
  STATE_CHANGE = "statechange",
  TOUCH_END = "touchend",
  TOUCH_START = "touchstart",
  UNLOAD = "unload",
  WHEEL = "wheel",
}

export const ENV = {
  TEST: "test",
  DEVELOPMENT: "development",
};

export const CLASSES = {
  SHAPE_ACTIONS_MENU: "App-menu__left",
};

// 1-based in case we ever do `if(element.fontFamily)`
export const FONT_FAMILY = {
  1: "Virgil",
  2: "Helvetica",
  3: "Cascadia",
} as const;

export const WINDOWS_EMOJI_FALLBACK_FONT = "Segoe UI Emoji";

export const DEFAULT_FONT_FAMILY: FontFamily = 1;
export const DEFAULT_FONT_SIZE = 20;
export const DEFAULT_TEXT_ALIGN = "left";
export const DEFAULT_VERSION = "{version}";
export const DEFAULT_VERTICAL_ALIGN = "top";

export const CANVAS_ONLY_ACTIONS = ["selectAll"];

export const GRID_SIZE = 20; // TODO make it configurable?

export const MIME_TYPES = {
  excalidraw: "application/vnd.excalidraw+json",
  excalidrawlib: "application/vnd.excalidrawlib+json",
};

export const STORAGE_KEYS = {
  LOCAL_STORAGE_LIBRARY: "excalidraw-library",
};

// Time in milliseconds
export const TAP_TWICE_TIMEOUT = 300;
export const TITLE_TIMEOUT = 10000;
export const TOAST_TIMEOUT = 5000;
export const TOUCH_CTX_MENU_TIMEOUT = 500;
export const VERSION_TIMEOUT = 15000;
