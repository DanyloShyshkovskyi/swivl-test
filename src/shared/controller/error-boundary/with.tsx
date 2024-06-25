import React, { ReactNode } from 'react'

import { ErrorBoundary } from 'shared/controller'

export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorComponent?: ReactNode,
  optionalMessage?: string
) => {
  return (props: P) => (
    <ErrorBoundary
      errorComponent={errorComponent}
      optionalMessage={optionalMessage}
    >
      <WrappedComponent {...props} />
    </ErrorBoundary>
  )
}
