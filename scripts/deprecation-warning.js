#!/usr/bin/env node

const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

const message = `
${RED}${BOLD}╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║   ⚠️  DEPRECATION WARNING                                         ║
║                                                                  ║
║   The "tailgrids" package has been deprecated.                   ║
║                                                                  ║
║   Please migrate to @tailgrids/cli                               ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝${RESET}

${YELLOW}To migrate:${RESET}

  ${CYAN}1.${RESET} Remove this package:
     ${BOLD}npm uninstall tailgrids${RESET}

  ${CYAN}2.${RESET} Initialize with the new CLI:
     ${BOLD}npx @tailgrids/cli@latest init${RESET}

  ${CYAN}3.${RESET} Add components as needed:
     ${BOLD}npx @tailgrids/cli@latest add <component-id>${RESET}

${YELLOW}More info:${RESET} ${CYAN}https://www.npmjs.com/package/@tailgrids/cli${RESET}
`;

console.warn(message);
