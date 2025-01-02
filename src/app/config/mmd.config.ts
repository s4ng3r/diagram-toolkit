export interface IMmdConfig {
  icons: IMmdNodeConfig;
}

export interface IMmdNodeConfig {
  database: Record<string, string>;
  tech: Record<string, string>;
  cloud?: Record<string, string>;
}

export const MMD_CONFIG: IMmdConfig = {
  icons: {
    tech: {
      '-kubernetes-': 'icon-[devicon--kubernetes]',
      '-spring-': 'icon-[devicon--spring]',
      '-node-': 'icon-[devicon--nodejs-wordmark]',
      '-angular-': 'icon-[devicon--angular]',
    },
    database: {
      '-mysql-': 'icon-[devicon--mysql-wordmark]',
      '-postgre-': 'icon-[devicon--postgresql]',
    },
    cloud: {
      '-google-': 'icon-[devicon--googlecloud]',
      '-azure-': 'icon-[devicon--azure]',
      '-aws-': 'icon-[devicon--amazonwebservices-wordmark]'
    }
  },
};

/* export interface IMmdConfig {
  database: IMmdConfigDetail[];
  tech: IMmdConfigDetail[];
}

export interface IMmdConfigDetail {
  node: string;
  icon: string | null;
}

export const MMD_CONFIG: IMmdConfig = {
  database: [
    {
      node: '-mysql-',
      icon: 'icon-[devicon--mysql-wordmark]',
    },
  ],
  tech: [
    {
      node: '-java-',
      icon: 'icon-[devicon--spring]',
    },
    {
      node: '-angular-',
      icon: 'icon-[devicon--angular]',
    },
  ],
};
 */

/* export interface IMmdConfig {
  nodes: Record<EDatabaseNodes | string, IMmdNodeData>;
}

export interface IMmdNodeData {
  icon: string;
}

export enum EDatabaseNodes {
  MY_SQL = '-mysql-',
  POSTGRE = '-postgre-',
}

export enum EFrameworkNodes {
  SPRING_BOOT = '-spring-',
  ANGULAR = '-angular-',
}

export const MMD_CONFIG: IMmdConfig = {
  nodes: {
    '-mysql-': {
      icon: 'icon-[devicon--mysql-wordmark]',
    },
  },
}; */