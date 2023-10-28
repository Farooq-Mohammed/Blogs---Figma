export const setCookie = (field, data) => localStorage.setItem(field, data);

export const getCookie = (field) => localStorage.getItem(field);

export const removeCookie = (field) => localStorage.removeItem(field);
