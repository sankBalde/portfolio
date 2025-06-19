export const CONFIG = {
  dev: {
    domainName: "dev.abdoulaye.io",
    environment: "dev" as const,
  },
  prod: {
    domainName: "abdoulaye.io",
    environment: "prod" as const,
  },
  tags: {
    Project: "Portfolio",
    ManagedBy: "CDK",
    Owner: "Abdoulaye Baldé",
  },
};

export const getStackName = (stackType: string, env: string) =>
  `${env}-portfolio-${stackType}`;
