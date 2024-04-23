const env = process.env.NEXT_PUBLIC__ENV;

export const ApiUrl = {
  BASE_API_URL:
    env !== "local"
      ? process.env.NEXT_PUBLIC_BASE_API_URL
      : "http://localhost:3000",
};
