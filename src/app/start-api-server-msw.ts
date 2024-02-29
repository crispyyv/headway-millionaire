import { setupServer } from "msw/node";
import { gameHandler } from "@/entities/game";
import { __serverStartDatabaseMigration } from "@/shared/lib/server";

const serverMockWorker = setupServer(...gameHandler);

__serverStartDatabaseMigration();

export default function startApiServerMockWorker() {
  serverMockWorker.listen({
    onUnhandledRequest(req, print) {
      if (
        /\.(png|jpg|svg|tsx?|css|jsx?|woff|_next|.*\..*).*$/.test(
          req.url.pathname,
        )
      ) {
        return;
      }

      print.warning();
    },
  });
  serverMockWorker.printHandlers();
}
