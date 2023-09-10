import { css } from "@kuma-ui/core";

export default function Home() {
  return (
    <main
      className={css`
        flex: 1;
      `}
    >
      <p
        className={css`
          // CSS API の補完サポートはこれからとのこと（https://www.kuma-ui.com/docs/API/css）
          text-align: center;
          font-size: 5em;
          font-weight: bold;
        `}
      >
        Center Text
      </p>
    </main>
  );
}
