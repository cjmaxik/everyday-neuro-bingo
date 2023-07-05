/**
 * @typedef ParticipantData
 * @type {Object}
 * @property {string} participantId
 * @property {string[]} prompts
 */

/**
 * @typedef Prompt
 * @type {Object}
 * @property {string} id
 * @property {string} text
 */

/**
 * @typedef Character
 * @type {Object}
 * @property {string} id
 * @property {string} name
 * @property {string} color
 * @property {string} assetsFolder
 * @property {string} image
 * @property {string[]} sounds
 * @property {string[]} prompts
 */

/**
 * @typedef StreamData
 * @type {Object}
 * @property {string} image
 * @property {string} name
 * @property {Character[]} participants
 * @property {?boolean} random
*/

/**
 * @typedef Emote Emote object with URLs
 * @type {Object}
 * @property {string} name Emote name
 * @property {Object} src URLs
 * @property {string} src.animated Animated emote URL
 * @property {string} src.static Static emote URL
 */

export {}
