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
 * @property {boolean} [small]
*/

/**
 * @typedef Emote Emote object with URLs
 * @type {Object}
 * @property {string} name Emote name
 * @property {Object} src URLs
 * @property {string} src.animated Animated emote URL
 * @property {string} src.static Static emote URL
 */

/**
 * @typedef BoardBlock Board block
 * @type {Object}
 * @property {number} index
 * @property {string} participantId
 * @property {number} tally
 * @property {string} text
 * @property {boolean} free
 * @property {boolean} win
 */

/**
 * @typedef GameBoard Game board
 * @type {BoardBlock[]}
 */

/**
 * @typedef GameStateStore Game state store
 * @type {Object}
 * @property {CoreTypes.RemovableRef<boolean>} ready
 * @property {boolean} readyToShow
 * @property {string} [streamName]
 * @property {string} [freeBlockImage]
 * @property {CoreTypes.RemovableRef<number>} seed
 * @property {Object.<string, Types.Character>} participants
 * @property {CoreTypes.RemovableRef<GameBoard>} board
 * @property {CoreTypes.RemovableRef<Array>} bingo
 * @property {CoreTypes.RemovableRef<number>} previousWin
 */

/**
 * @typedef GameSettingsStore Game settings store
 * @type {Object}
 * @property {CoreTypes.RemovableRef<boolean>} removeFont
 * @property {CoreTypes.RemovableRef<boolean>} disableSound
 * @property {CoreTypes.RemovableRef<boolean>} hideTally
 * @property {CoreTypes.RemovableRef<("animated"|"static"|"text")>} emotes
 * @property {CoreTypes.RemovableRef<number>} volume
 * @property {string} [streamName]
 */

/**
 * @typedef StreamMenuData Upcoming stream data
 * @type {Object}
 * @property {string} to
 * @property {string} text
 * @property {string} [color]
 * @property {string} [date]
 */

/**
 * @typedef CharacterMenuData Character menu data
 * @type {Object}
 * @property {string} id
 * @property {string} characterName
 * @property {Object[]} streams
 * @property {string} streams.name
 * @property {StreamMenuData[]} streams.entries
 */

/**
 * @typedef IndexMenu Index menu structure
 * @type {Object[]}
 * @property {CharacterMenuData} neuro
 * @property {CharacterMenuData} evil
 * @property {CharacterMenuData} vedal
 */

export {}
