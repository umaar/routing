import { Evented } from '@dojo/core/Evented';
import { EventObject } from '@dojo/core/interfaces';

export { BrowserHistory } from './_alias-ambient-history';

/**
 * Event object that is emitted for the 'change' event.
 */
export interface HistoryChangeEvent extends EventObject<'change'> {
	target: History;
	/**
	 * The new (current) value of the history. This is a path string.
	 */
	value: string;
}

export interface HistoryEventMap {
	change: HistoryChangeEvent;
}

export interface History extends Evented<HistoryEventMap> {
	/**
	 * Get the current value. This is a path string.
	 *
	 * Implementations may ensure that the value always starts with a slash.
	 */
	readonly current: string;

	/**
	 * Prefixes the value in order to create a path that can be used with a browser.
	 */
	prefix(path: string): string;

	/**
	 * Set the current value. If used with a browser implementation causes a new history entry
	 * to be added. Fires the 'change' event.
	 */
	set(path: string): void;

	/**
	 * Replace the current value. If used with a browser implementation causes the current
	 * history entry to be replaced. Fires the 'change' event.
	 */
	replace(path: string): void;

	/**
	 * Function that will normalize the path for the history manager
	 */
	normalizePath(path: string): string;
}

export interface HistoryOptions {}
