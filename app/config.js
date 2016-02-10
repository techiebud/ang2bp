System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "system",
    "experimentalDecorators": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*",
    "app": "src"
  },

  packages: {
    "app": {
      "main": "app",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "typescript"
        }
      },
      "map": {
        "typescript": "npm:typescript@1.7.5"
      }
    }
  },

  map: {
    "typescript": "npm:typescript@1.7.5"
  }
});
