import { Answer } from "@/shared/types";
import { factory, primaryKey } from "@mswjs/data";
import { NestedModelDefinition } from "@mswjs/data/lib/glossary";

/**
 * Its database, which using only in @mswjs "server" handlers
 * This handlers run in the browser (client side) and emulate
 * work with real API and database
 */

const db = factory({
  questions: {
    id: primaryKey(Number),
    question: String,
    sum: Number,
    // TODO: refactor this by `manyOf` method
    answers: [] as Answer[] as unknown as NestedModelDefinition,
  },
});

export default db;
