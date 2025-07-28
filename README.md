# Express.js API, MCP Server, and Vue.js Client Noop Template

This repository contains a minimal foundation for an Express.js API, an MCP server and a Vue.js client. This application also utilizes Amazon DynamoDB for record storage and Amazon S3 for image upload storage.

The purpose of the repository is to act as a starting point for new application development on the Noop platform. To convert an existing application to use the Noop platform, [the guide on creating this template](https://noop.dev/blog/launch-nodejs-vue-monorepo/) can be used as a reference.

## Get Started

To create and run an instance of this template [install Workshop](https://noop.dev/docs/installation/) and select the "NodeJS Backend with Vue Frontend" template. The template creation process in Workshop will automate bootstrapping and running the application.

## Testing It Out

Once your application is deployed (locally in Workshop or in Cloud), visit the associated endpoint to interact with the example todo list app.

## Using with Claude Desktop

To use Claude Desktop to interface with the applications's MCP Server service component, add the following to your Claude Desktop’s configuration file. This file will be located at either `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac or `%APPDATA%\Claude\claude_desktop_config.json` on Windows. Please note, the URL listed below will need to be adjusted if your application is exposed at a different endpoint. Thereafter, you will need to open or restart Claude Desktop for the configuration changes to take effect.

```json
{
  "mcpServers": {
    "noop-todo-app-mcp-server": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://nodejs-vue-template-todo-app.local.noop.app/mcp"
      ]
    }
  }
}
```

---

This repo uses:

| Software | Version |
| -------- | ------- |
| Node     | v22.x.x |
| Express  | v5.x.x  |
| Vue      | v3.x.x  |
