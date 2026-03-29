import Button from "@/components/button/button"
import { cn } from "@/utils/helpers"
interface  IProps{
    tabs:{
        title:string,num:number
    }[],
    handleChangeTab:(t:number)=>void,
    children:React.ReactNode,
    activeTab:number
}
const Tab = ({tabs,handleChangeTab,children,activeTab}:IProps) => {
  return (
       <div className="space-y-2">
      <header>
        <h1 className="text-2xl bold">Profile</h1>
      </header>
      <div className="flex gap-2">
        {tabs.map((t) => (
          <Button
            key={t.num}
            variant={"soft"}
            onClick={() => handleChangeTab(t.num)}
            className={cn(activeTab === t.num ? "bg-primary-400" : "")}
          >
            {t.title}
          </Button>
        ))}
      </div>
       <main className="p-2  border-2 border-gray-400">
        {children}
       </main>
    </div>
  )
}

export default Tab