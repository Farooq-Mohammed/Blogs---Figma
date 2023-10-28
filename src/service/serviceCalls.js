export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: {
    url: "/file/upload",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  },
};
