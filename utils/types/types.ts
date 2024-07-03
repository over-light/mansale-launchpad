export interface IRootContext {
    theme?: string;
}

export type MenuItem = {
    label: string;
    icon: any;
    link: string;
    resource: any;
    disabled?: boolean;
    subMenu?: MenuItem[];
  };