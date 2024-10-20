import { Graph } from '@antv/x6'
import { useRef, useEffect } from 'react'

export default function Workspace() {
  const graph = useRef<Graph>()

  useEffect(() => {
    graph.current = new Graph({
      container: document.getElementById('x6-container')!,
      autoResize: true,
    })
    graph.current.addNode({
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: 'Hello',
    })
  }, [])

  return (
    <div className="flex-1 w-full h-full">
      <div id="x6-container" className="w-full h-full"></div>
    </div>
  )
}
