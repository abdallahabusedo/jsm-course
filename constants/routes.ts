const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
