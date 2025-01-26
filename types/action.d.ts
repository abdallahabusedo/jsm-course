interface SignInWithOAuthParams {
  provider: "google" | "github";
  providerAccountId: string;
  user: {
    name: string;
    email: string;
    image: string;
    username: string;
  };
}

interface AuthCredentials {
  name: string;
  email: string;
  password: string;
  username: string;
}

interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}
