export const types = {
    authLogin: '[auth] START_LOGIN',
    authLogout: '[auth] LOGOUT',
    authCheck: '[auth] CHECK_STATE',

    destinationList: '[destination] GET_LIST',
    destinationActive: '[destination] GET_Active',
    destinationAdd: '[destination] ADD',
    destinationUpdate: '[destination] UPDATE',
    destinationDelete: '[destination] DELETE',

    commentList: '[comment] GET_LIST',
    commentActive: '[comment] SET_ACTIVE',
    commentAdd: '[comment] ADD',
    commentUpdate: '[comment] UPDATE',
    commentDelete: '[comment] DELETE',

    clearDestination: '[destination] CLEAR',

    reportList: '[report] GET_LIST',
    reportActive: '[report] GET_Active',
    reportAdd: '[report] ADD',

    clearReport: '[report] CLEAR',
}