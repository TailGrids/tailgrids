import * as vscode from "vscode";

const PROVIDER_ID = "tailgrids.mcpServer";

export function activate(context: vscode.ExtensionContext): void {
  const provider = vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, {
    provideMcpServerDefinitions: async (
      _token: vscode.CancellationToken
    ): Promise<vscode.McpServerDefinition[]> => {
      return [
        new vscode.McpStdioServerDefinition("Tailgrids MCP", "npx", [
          "-y",
          "@tailgrids/mcp"
        ])
      ];
    },

    resolveMcpServerDefinition: async (
      server: vscode.McpServerDefinition,
      _token: vscode.CancellationToken
    ): Promise<vscode.McpServerDefinition | undefined> => {
      return server;
    }
  });

  context.subscriptions.push(provider);
}

export function deactivate(): void {
  // VS Code handles cleanup via context.subscriptions
}
