export interface IRootContext {
  theme?: string;
}

export interface ITxContext {
  createToken?: () => void;
}

export type MenuItem = {
  label: string;
  icon: any;
  link?: string;
  resource: any;
  disabled?: boolean;
  subMenu?: MenuItem[];
  onClick?: any;
};

export type CreateTokenType = {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  logoURL: string;
  website: string;
  telegram: string;
  discord: string;
  twitter: string;
  description: string;
  mintAuthority: string;
  freezeAuthority: string;
  updateAuthority: string;
};

export type PreSaleType = {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  price: number;
  startDate: number;
  endDate: number;
  minContribution: number;
  maxContribution: number;
  softCap: number;
  hardCap: number;
  logoURL: string;
  website: string;
  telegram: string;
  discord: string;
  twitter: string;
  description: string;
};
