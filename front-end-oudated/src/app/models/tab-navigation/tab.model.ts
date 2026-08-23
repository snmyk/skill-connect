export interface Tab {
  id: string;
  name: string;
  route: string;
  svgIconPaths: string[];
  fillRule?: string;
  clipRule?: string;
}
