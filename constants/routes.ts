const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  SIGN_IN_WITH_OAUTH: "signin-with-oauth",
  EDIT_QUESTION: (id: string) => `/questions/${id}/edit`,
};

export default ROUTES;
