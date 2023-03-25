
const usersSlice = createSlice({
    name: "users",
    initialState: {
        loading: 'idle',
        users: []
    },
    reducers: {
        usersLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if(state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        usersReceived(state, action) {
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.users = action.payload
            }
        }
    }
})

const {usersLoading, usersReceived} = usersSlice.actions;

const fetchUsers = () => async dispatch => {
    dispatch(usersLoading());
    const response = await usersAPI.fetchAll()
    dispatch(usersReceived(response.data));

}
