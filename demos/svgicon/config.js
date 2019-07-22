export default async () => {
  const [html, css] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./style.css'),
  ]);

  return {
    html,
    css,
  };
};
