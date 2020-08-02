const voiceChannel = {
    cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
    cache: {},
    guild: {
        members: "[Circular]",
        channels: {
            cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
            cache: {},
            guild: "[Circular]"
        },
        roles: {
            cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
            cache: {},
            guild: "[Circular]"
        },
        presences: {
            cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
            cache: {}
        },
        voiceStates: {
            cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
            cache: {},
            guild: "[Circular]"
        },
        deleted: false,
        available: true,
        id: "710209763652403302",
        shardID: 0,
        name: "𝐒𝐞𝐯𝐲'𝐬 𝐒𝐭𝐫𝐚𝐧𝐠𝐞 𝐒𝐞𝐫𝐯𝐞𝐫",
        icon: "e42198741bf20c2cd468c7e5495f5f8b",
        splash: null,
        region: "europe",
        memberCount: 54,
        large: false,
        features: [],
        applicationID: null,
        afkTimeout: 900,
        afkChannelID: "710472160589905941",
        systemChannelID: "710462894449492048",
        embedEnabled: undefined,
        premiumTier: 0,
        premiumSubscriptionCount: 0,
        verificationLevel: "NONE",
        explicitContentFilter: "DISABLED",
        mfaLevel: 0,
        joinedTimestamp: 1596372326968,
        defaultMessageNotifications: "ALL",
        systemChannelFlags: {
            bitfield: 0
        },
        vanityURLCode: null,
        description: null,
        banner: null,
        rulesChannelID: null,
        publicUpdatesChannelID: null,
        ownerID: "211469390003044352",
        emojis: {
            cacheType: class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
},
            cache: {},
            guild: "[Circular]"
        }
    }
}