//#region AUTH
export const AUTH = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh-token',
    VERIFY: '/auth/verify',
    LOGOUT: '/auth/logout',
    GOOGLE_LOGIN: '/auth/google-login',
}
//#endregion

//#region USERS
export const USERS = {
    GET_ALL: '/users',
    GET_BY_ID: (id) => `/users/${id}`,
    PUT: (id) => `/users/${id}`,
}
//#endregion

//#region GROUPS
export const GROUPS = {
    GET_ALL: '/groups',
    GET_BY_ID: (id) => `/groups/${id}`,
    CREATE: '/groups/create',
    PROMOTE: (id) => `/groups/${id}/promote`,
    DEMOTE: (id) => `/groups/${id}/demote`,
    KICK_OUT: (id) => `/groups/${id}/kick-out`,
    SET_OWNER: (id) => `/groups/${id}/set-owner`,
    INVITE: (id) => `/groups/${id}/invite`,
    INVITE_MAIL: (id) => `/groups/${id}/invite-email`,
    SEND_INVITAION_MAIL: (id) => `/groups/${id}/send-email`,
    GENERATE_INVITE_CODE: (id) => `/groups/${id}/generate-invite-code`,
}
//#endregion

//#region PRESENTATIONS
export const PRESENTATIONS = {
    GET_ALL_BY_HOST_ID: '/presentations',
    GET_ALL_SLIDES_BY_ID: (presentationId) => `/presentations/${presentationId}/slides`,
    DELETE_PRESENTATION: (presentationId) => `/presentations/${presentationId}`,
    GET_PRESENTATION_BY_ID: (presentationId) => `/presentations/${presentationId}`,
    POST_CHECK_CODE: '/presentations/checkCode',
    POST_ADD: '/presentations/add',
    UPDATE_PRESENTATION_NAME: '/presentations/updateName',
    POST_NEW_CODE: (presentationId) => `/presentations/createCode/${presentationId}`,
}

//#region SLIDES
export const SLIDES = {
    GET_ALL: '/slides',
    GET_FIRST: '/slides/first-slide',
    GET_LAST: '/slides/last-slide',
    GET_BY_ID: (id) => `/slides/${id}`,
    ADD: '/slides/add',
    UPDATE: (id) => `/slides/${id}`,
    REMOVE: (id) => `/slides/${id}`,
    GET_FOR_HOST: (id) => `/slides/${id}/host`,
    GET_FOR_GUEST: (id) => `/slides/${id}/guest`,
}
//#endregion

//#region CHOICES
export const CHOICES = {
    GET_ALL: '/choices',
    GET_BY_ID: (id) => `/choices/${id}`,
    ADD: '/choices/add',
    UPDATE: (id) => `/choices/${id}`,
    REMOVE: (id) => `/choices/${id}`,
}
//#endregion
