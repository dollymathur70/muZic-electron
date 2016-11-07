import keys from '../keys/keyfile';

export default (state = {}, payload) => {
    switch (payload.type) {
        case (keys.REFRESH_LIBRARY): {
            return {
                ...state,
                tracks: {
                    library: {
                        all: [...payload.songs],
                        sub: [...payload.songs],
                    },
                    playlist: {
                        all: [],
                        sub: []
                    }
                }
            };
        }
        
        case (keys.REFRESH_CONFIG): {
            return { ...state };
        }
        
        default: {
            return state;
        }
    }
};
