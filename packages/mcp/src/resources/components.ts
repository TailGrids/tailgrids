import {
    McpServer,
    ResourceTemplate,
} from '@modelcontextprotocol/sdk/server/mcp.js';
import {
    getComponentByName,
    listComponents,
    getComponentSource,
} from '../registry/queries.js';
import type { ComponentCategory } from '../registry/types.js';

export function registerComponentResources(server: McpServer): void {
    // Full component spec
    server.resource(
        'component-spec',
        new ResourceTemplate('component://{name}', { list: undefined }),
        { description: 'Full specification for a TailGrids component including props, variants, examples, and accessibility notes.' },
        async (uri, { name }) => {
            const c = getComponentByName(String(name));
            if (!c)
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: `Component "${name}" not found.`,
                        },
                    ],
                };
            return {
                contents: [
                    {
                        uri: uri.href,
                        text: JSON.stringify(c, null, 2),
                        mimeType: 'application/json',
                    },
                ],
            };
        },
    );

    // Raw TSX source
    server.resource(
        'component-source',
        new ResourceTemplate('component://{name}/source', { list: undefined }),
        { description: 'Raw TSX source code for a TailGrids component.' },
        async (uri, { name }) => {
            const c = getComponentByName(String(name));
            if (!c)
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: `Component "${name}" not found.`,
                        },
                    ],
                };
            try {
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: getComponentSource(c),
                            mimeType: 'text/plain',
                        },
                    ],
                };
            } catch (e) {
                return { contents: [{ uri: uri.href, text: String(e) }] };
            }
        },
    );

    // Examples only
    server.resource(
        'component-examples',
        new ResourceTemplate('component://{name}/examples', {
            list: undefined,
        }),
        { description: 'All usage examples for a TailGrids component.' },
        async (uri, { name }) => {
            const c = getComponentByName(String(name));
            if (!c)
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: `Component "${name}" not found.`,
                        },
                    ],
                };
            const text = c.examples
                .map((ex) => `### ${ex.title}\n\n\`\`\`tsx\n${ex.code}\n\`\`\``)
                .join('\n\n');
            return { contents: [{ uri: uri.href, text }] };
        },
    );

    // All components in a category
    server.resource(
        'category',
        new ResourceTemplate('category://{name}', { list: undefined }),
        { description: 'List all TailGrids components in a given category.' },
        async (uri, { name }) => {
            const components = listComponents({
                category: String(name) as ComponentCategory,
            });
            if (components.length === 0)
                return {
                    contents: [
                        {
                            uri: uri.href,
                            text: `No components found in category "${name}".`,
                        },
                    ],
                };
            const text = components
                .map(
                    (c) =>
                        `## ${c.displayName}\n${c.description}\nInstall: \`${c.installCommand}\``,
                )
                .join('\n\n');
            return { contents: [{ uri: uri.href, text }] };
        },
    );
}
