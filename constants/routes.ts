const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAG: (id: string) => `/tags/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  SIGN_IN_WITH_OAUTH: "signin-with-oauth",
  EDIT_QUESTION: (id: string) => `/questions/${id}/edit`,
  COLLECTION: "/collections",
  COMMUNITY: "/community",
  TAGS: "/tags",
  JOBS: "/jobs",
};

export default ROUTES;
