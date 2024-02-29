import { rest } from "msw";
import { __serverDatabase } from "@/shared/lib/server";
import config from "@/shared/lib/config";

const gameHandler = [
  rest.get(
    `http://localhost:3000/mock-api/questions`,
    async (req, res, ctx) => {
      try {
        const questions = __serverDatabase.questions.getAll();

        const questionsResponse = await res(
          ctx.delay(config.API_DELAY),
          ctx.status(200),
          ctx.json(questions),
        );
        return questionsResponse;
      } catch (err) {
        const errorResponse = await res(ctx.status(500), ctx.json(err as any));

        return errorResponse;
      }
    },
  ),
];

export default gameHandler;
