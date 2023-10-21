export const authSelector = state => state.auth.token;

export const userNameSelector = state => state.auth.user.name;

export const userEmailSelector = state => state.auth.user.email;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;