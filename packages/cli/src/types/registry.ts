export type Registry = {
  id: string;
  name: string;
  description: string;
  type: 'component' | 'block';
  files: {
    type: 'block' | 'ui' | 'charts';
    path: string;
    targetPath?: string;
  }[];
  dependencies?: string[];
  devDependencies?: string[];
  /**
   * IDs of other components that are required by this component
   */
  requires?: string[];
};
