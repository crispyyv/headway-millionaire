import db from "./server-db";
import questionsMocks from "./__mocks__/questions.json";

export default function startDatabaseMigration() {
  const questions = db.questions.getAll();
  if (questions.length > 0) return;

  // Temp fix type issue
  questionsMocks.forEach((q) => db.questions.create(q as any));
}
