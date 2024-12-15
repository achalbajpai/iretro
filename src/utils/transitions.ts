export const transitions = {
  fast: 'transition-all duration-150',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  bounce: 'transition-all duration-300 ease-in-out',
  spring: 'transition-all duration-500 ease-spring'
} as const;

export type TransitionType = keyof typeof transitions;