import { errorTransformer } from 'shared/utils'

export const ErrorCommunicate = ({ error }: { error?: unknown | Error }) => (
  <div className='py-20 text-center font-bold text-gray-600'>
    {errorTransformer(error)}
  </div>
)
