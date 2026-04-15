#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerPrompts } from "./prompts/index.js";
import { registerComponentResources } from "./resources/components.js";
import { registerDocsResources } from "./resources/docs.js";
import { registerA11yTools } from "./tools/a11y.js";
import { registerCodeTools } from "./tools/code.js";
import { registerCompositionTools } from "./tools/composition.js";
import { registerDiscoveryTools } from "./tools/discovery.js";
import { registerPropsTools } from "./tools/props.js";
import { registerThemingTools } from "./tools/theming.js";

const server = new McpServer({
  name: "tailgrids-mcp",
  version: "1.0.0"
});

registerDiscoveryTools(server);
registerCodeTools(server);
registerPropsTools(server);
registerA11yTools(server);
registerThemingTools(server);
registerCompositionTools(server);
registerComponentResources(server);
registerDocsResources(server);
registerPrompts(server);

const transport = new StdioServerTransport();
await server.connect(transport);
