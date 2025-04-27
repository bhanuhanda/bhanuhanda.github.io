const codesandboxTransformer = {
    name: "CodeSandbox",
    shouldTransform(url) {
        return url.includes("codesandbox.io/embed/");
    },
    getHTML(url) {
        const id = url.split("/").pop().split("?")[0];
        return `<iframe
      src="https://codesandbox.io/embed/${id}?view=preview+%2B+editor&hidenavigation=1"
      style="width:100%; height:500px; border:0; border-radius:4px; overflow:hidden;"
      title="CodeSandbox"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>`;
    },
};

export default codesandboxTransformer;
