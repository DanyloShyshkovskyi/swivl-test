import { IRelationField, useGetRelatedDetails } from 'shared/api/user'
import { withErrorBoundary } from 'shared/controller'
import { Button } from 'shared/ui/button'

import { Grid } from './grid'

export const RelatedUsers = withErrorBoundary(
  ({
    title,
    ...props
  }: {
    login: string
    count: number
    title: string
    path: IRelationField
  }) => {
    const queryProps = useGetRelatedDetails(props)

    const { fetchNextPage, hasNextPage } = queryProps

    return (
      <div className='relative my-10 rounded-lg bg-gray-50 p-5 shadow-md'>
        <h2 className='mb-10 text-2xl font-bold'>{title}:</h2>

        <Grid {...queryProps} count={props.count} title={title} />

        {hasNextPage && props.count !== 0 && (
          <Button
            className='absolute -bottom-4 left-1/2 -translate-x-1/2 transform'
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        )}
      </div>
    )
  }
)
