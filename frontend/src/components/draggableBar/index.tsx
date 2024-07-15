export const DraggableBar = (): JSX.Element => {
  return (
    <div
      style={
        {
          width: '100vw',
          height: 40,
          '--wails-draggable': 'drag',
          cursor: 'default',
          userSelect: 'none',
        } as any
      }
    />
  )
}
