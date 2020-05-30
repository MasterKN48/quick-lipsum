export default (config, env, helpers) => {
  config.output.publicPath = "/quick-lipsum/";

  // use the public path in your app as 'process.env.PUBLIC_PATH'
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(
        config.output.publicPath || "/quick-lipsum/"
      ),
    })
  );
};
