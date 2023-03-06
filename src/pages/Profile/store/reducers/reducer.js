const initialState = {
    profile: [
        {
            id: 1,
            title: 'Nama',
            completed: false
        },
        {
            id: 1,
            title: 'Umur',
            completed: false
        },
    ]
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return {
                ...state
            }
    }
}

export default reducer;