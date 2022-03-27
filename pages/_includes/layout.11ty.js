exports.render = (data) => {
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <link rel="stylesheet" href="https://cdn.skypack.dev/yama-normalize">
        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.5.0/highlight.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.5.0/styles/a11y-dark.min.css">
        <script type="module">hljs.initHighlightingOnLoad()</script>
        <style>img{height:auto}code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:calc(var(--rhythm)*3);}footer{padding: var(--y-rhythm-3);text-align: center;}</style>
      </head>
      <body>
        <main id="main">
          ${data.content}
        </main>
        <footer>
          <p>Copyright 2019, Okuto Oyama</p>
          <p>Source : <a href="https://github.com/yamanoku/vue-a11y-2019/" target="_blank" rel="noopener">yamanoku/vue-a11y-2019</a></p>
        </footer>
      </body>
    </html>
  `;
};
