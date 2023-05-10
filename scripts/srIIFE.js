(async function () {
	const script = document.createElement("script");
	script.type = "module";
	script.textContent = `
      const tagName = "wz-sr";
          if (typeof customElements !== "undefined") {
              import("https://sr.webeyez.dev/module/WZSR.mjs").then((module) => {
                  if (!customElements.get("wz-sr")) {
                      customElements.define(tagName, module.default);
                  }
              });
          }
      `;
	document.head.appendChild(script);
})();
