module.exports = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    OWNER_ID: process.env.OWNER_ID,
    PREFIX: process.env.PREFIX || ",",

    LAVALINK: {
        HOSTS: process.env.LAVALINK_HOSTS,
        PORTS: process.env.LAVALINK_PORTS,
        PASSWORDS: process.env.LAVALINK_PASSWORDS,
        SECURES: process.env.LAVALINK_SECURES
    },

    MUSIC: {
        DEFAULT_PLATFORM: process.env.DEFAULT_PLATFORM || 'ytsearch',
        AUTOCOMPLETE_LIMIT: 5,
        PLAYLIST_LIMIT: 3,
        ARTWORK_STYLE: process.env.ARTWORK_STYLE || 'MusicCard'
    },

    GENIUS: {
        API_KEY: process.env.GENIUS_API_KEY
    }
};
