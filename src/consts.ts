require('dotenv').config();
import { format } from 'util';

// grab the current environment
export const NODE_ENV = process.env.NODE_ENV || 'PROD';

// load env vars (or defaults if not found - aka PROD)
export const MAZE_SVC_HOST = process.env.MAZE_SVC_URL || 'localhost';
export const MAZE_SVC_PORT = process.env.MAZE_SVC_PORT || 8080;
export const SCORE_SVC_HOST = process.env.SCORE_SVC_URL || 'localhost';
export const SCORE_SVC_PORT = process.env.SCORE_SVC_PORT || 8081;
export const GAME_SVC_PORT = process.env.GAME_SVC_PORT || 8080;

// construct base URLs
export const MAZE_SVC_URL = format('%s:%s', MAZE_SVC_HOST, MAZE_SVC_PORT);
export const SCORE_SVC_URL = format('%s:%s', SCORE_SVC_HOST, SCORE_SVC_PORT);

// other stuff
export const REFRESH_TIMER = 5000; // milliseconds between cache refreshes (skipped in server.ts if no new activity detected)
export const GAME_SVC_NAME = 'game-server';