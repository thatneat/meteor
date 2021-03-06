if (process.env.ROOT_URL &&
    typeof __meteor_runtime_config__ === "object") {
  __meteor_runtime_config__.ROOT_URL = process.env.ROOT_URL;
  if (__meteor_runtime_config__.ROOT_URL) {
    var parsedUrl = Npm.require('url').parse(__meteor_runtime_config__.ROOT_URL);
    // Sometimes users try to pass, eg, ROOT_URL=mydomain.com.
    if (!parsedUrl.host) {
      throw Error("$ROOT_URL, if specified, must be an URL");
    }
    var pathPrefix = parsedUrl.pathname;
    __meteor_runtime_config__.ROOT_URL_PATH_PREFIX = pathPrefix === "/" ? "" : pathPrefix;
  } else {
    __meteor_runtime_config__.ROOT_URL_PATH_PREFIX = "";
  }
}
