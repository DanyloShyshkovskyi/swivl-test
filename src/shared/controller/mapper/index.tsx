import { ReactNode } from 'react'

interface WithClassNameProps {
  className?: string
  children: ReactNode
}

const WithClassName = ({ className, children }: WithClassNameProps) =>
  className ? <div className={className}>{children}</div> : <>{children}</>

function arrayTransform<T>(
  array: { items: T[] } | T[] | undefined
): T[] | undefined {
  if (!array) return undefined

  if ('items' in array) return (array as { items: T[] }).items

  return array as T[]
}

interface MapperProps<T> {
  array: { items: T[] } | T[] | undefined
  children: (item: T, index: number) => ReactNode
  communicate?: ReactNode
  className?: string
}

function Mapper<T>({
  array,
  children,
  communicate = null,
  className,
}: MapperProps<T>) {
  const tArray = arrayTransform(array)

  if (!tArray || !tArray.length) return <>{communicate}</>

  return (
    <WithClassName className={className}>
      {tArray.map((item, index) => children(item, index))}
    </WithClassName>
  )
}

export default Mapper
