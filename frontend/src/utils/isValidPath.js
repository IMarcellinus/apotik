export function isValidPath(base = "", path = "") {
    let basePath = "/";
    if (!base.endsWith("/")) {
      basePath += base;
    }
    if (basePath === "/") {
      return false;
    }
    return path.startsWith(basePath);
  }
  