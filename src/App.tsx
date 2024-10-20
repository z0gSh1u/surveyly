import Workspace from './components/Workspace'
import './App.less'
import Header from './components/Header'
import WidgetPanel from './components/WidgetPanel'

export default function App() {
  return (
    <div className="w-full h-full p-3 box-border">
      <Header />
      <div className="flex flex-col">
        <WidgetPanel />
        <Workspace />
      </div>
    </div>
  )
}
