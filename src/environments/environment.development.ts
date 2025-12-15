export const environment = {
  production: false,
  app: {
    name: 'Log Chaos Visualizer (Dev)',
    description: 'Visualize and analyse logs from various formats in development.',
    version: '0.0.2-dev',
    repositoryUrl: 'https://github.com/md-mostafa-niloy/log-chaos-visualizer',
  },
  storage: {
    userPreferencesKey: 'log-chaos-preferences-dev',
  },
  featureFlags: {
    experimentalAnalysis: true,
    debugParsing: true,
  },
} as const;
