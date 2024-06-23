export const ErrorCommunicate = ({
  message = 'Error occurred while fetching data. Please try again later.',
}: {
  message?: string
}) => <div className='py-20 text-center font-bold text-gray-600'>{message}</div>
