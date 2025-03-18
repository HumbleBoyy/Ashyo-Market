import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
const LangConfig = () => {
  return (
    <Popover placement="right">
    <PopoverTrigger>
      Hello
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  </Popover>
  )
}

export default LangConfig
