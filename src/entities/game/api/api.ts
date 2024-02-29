import config from "@/shared/lib/config";

export default async function loadGameConfig() {
  try {
    const response = await fetch(`${config.API_ENDPOINT}/mock-api/questions`);
    const questions = await response.json();

    return questions;
  } catch (error: any) {
    return { error: error.message };
  }
}
