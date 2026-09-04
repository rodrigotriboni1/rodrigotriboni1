"use client";

import { useEffect, useState } from "react";

interface Options {
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  pauseMs?: number;
}

/**
 * Cycles through `words`, typing and deleting each one. All state updates
 * happen inside setTimeout callbacks (never synchronously in the effect
 * body) so the animation plays out over time without cascading renders.
 *
 * Pass a React `key` at the call site (e.g. keyed by language) if `words`
 * changes identity and the animation should restart from scratch.
 */
export function useTypewriter(words: string[], opts?: Options) {
  const typeMs = opts?.typeMs ?? 55;
  const deleteMs = opts?.deleteMs ?? 30;
  const holdMs = opts?.holdMs ?? 1600;
  const pauseMs = opts?.pauseMs ?? 250;

  const [text, setText] = useState("");

  useEffect(() => {
    if (words.length === 0) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let wordIndex = 0;

    const schedule = (fn: () => void, ms: number) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const typeWord = () => {
      const word = words[wordIndex % words.length] ?? "";
      let i = 0;
      const typeChar = () => {
        i += 1;
        setText(word.slice(0, i));
        if (i < word.length) {
          schedule(typeChar, typeMs);
        } else {
          schedule(deleteWord, holdMs);
        }
      };
      schedule(typeChar, typeMs);
    };

    const deleteWord = () => {
      const word = words[wordIndex % words.length] ?? "";
      let i = word.length;
      const deleteChar = () => {
        i -= 1;
        setText(word.slice(0, i));
        if (i > 0) {
          schedule(deleteChar, deleteMs);
        } else {
          wordIndex += 1;
          schedule(typeWord, pauseMs);
        }
      };
      schedule(deleteChar, deleteMs);
    };

    schedule(typeWord, typeMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join("|"), typeMs, deleteMs, holdMs, pauseMs]);

  return text;
}
