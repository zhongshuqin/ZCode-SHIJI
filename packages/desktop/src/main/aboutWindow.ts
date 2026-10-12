interface CustomAboutDialogHtmlInput {
  applicationName: string;
  appVersion: string;
  copyright: string;
  optimizationLine: string;
  versionLabel: string;
  okButtonLabel: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function createCustomAboutDialogHtml(input: CustomAboutDialogHtmlInput): string {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'"
    />
    <title>${escapeHtml(input.applicationName)}</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
        --startup-page-bg: #f4f4f5;
        --about-primary: #0a0a0a;
        --about-primary-foreground: #fafafa;
        --about-primary-active: color-mix(in oklab, var(--about-primary) 80%, transparent);
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: var(--startup-page-bg);
      }

      body {
        display: grid;
        place-items: center;
        padding: 0;
        user-select: none;
      }

      .about-window {
        width: 100%;
        max-width: 256px;
        height: 280px;
        display: grid;
        place-items: stretch;
        padding: 0;
        background: transparent;
      }

      .about-card {
        width: 100%;
        height: 100%;
        padding: 22px 15px 14px;
        display: flex;
        flex-direction: column;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #1d1d1f;
        box-shadow: none;
        -webkit-app-region: drag;
      }

      .content {
        width: 100%;
        max-width: 222px;
        margin: 0 auto;
        flex: 1;
        min-height: 0;
      }

      .app-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        background: linear-gradient(180deg, #000000 0%, #151718 100%);
        color: #ffffff;
        box-shadow: 0 10px 13px -3px rgb(0 0 0 / 0.2), 0 4px 5px -3px rgb(0 0 0 / 0.2);
      }

      .app-logo {
        width: 30px;
        height: auto;
        display: block;
      }

      .title {
        margin: 20px 0 0;
        font-size: 13.5px;
        line-height: 1.18;
        font-weight: 700;
        letter-spacing: 0;
      }

      .meta {
        margin-top: 28px;
        display: flex;
        flex-direction: column;
        gap: 17px;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 0;
        color: #303033;
      }


      .ok-button {
        width: 100%;
        height: 36px;
        border: 0;
        border-radius: 18px;
        background: var(--about-primary);
        color: var(--about-primary-foreground);
        font: inherit;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0;
        outline: none;
        cursor: default;
        -webkit-app-region: no-drag;
      }

      .ok-button:active {
        background: var(--about-primary-active);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --startup-page-bg: #171717;
          --about-primary: #fafafa;
          --about-primary-foreground: #0a0a0a;
          --about-primary-active: color-mix(in oklab, var(--about-primary) 80%, transparent);
        }

        .about-card {
          color: #e8e8e8;
        }

        .meta {
          color: #e2e2e2;
        }
      }
    </style>
  </head>
  <body>
    <main class="about-window" aria-label="${escapeHtml(input.applicationName)} About Window">
      <section class="about-card" role="dialog" aria-modal="true" aria-labelledby="about-title">
        <div class="content">
          <div class="app-icon" aria-hidden="true">
            <img
              src="data:image/png;base64,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"
              class="app-logo"
              alt=""
              draggable="false"
            >
          </div>
          <h1 id="about-title" class="title">
            ${escapeHtml(input.applicationName)}<br />
            ${escapeHtml(input.versionLabel)} ${escapeHtml(input.appVersion)}
          </h1>
          <div class="meta">
            ${input.optimizationLine ? `<div>${escapeHtml(input.optimizationLine)}</div>` : ""}
            <div>${escapeHtml(input.copyright)}</div>
          </div>
        </div>
        <div class="spacer"></div>
        <button class="ok-button" type="button" autofocus>${escapeHtml(input.okButtonLabel)}</button>
      </section>
    </main>
    <script>
      const closeWindow = () => window.close();
      document.querySelector(".ok-button")?.addEventListener("click", closeWindow);
      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.key === "Enter") {
          closeWindow();
        }
      });
    </script>
  </body>
</html>`;
}
