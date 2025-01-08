import Chart from '@/components/Student/Marks/Chart'
import MarksTable from '@/components/Student/Marks/Marks-table'
import React from 'react'
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";

const Marks = () => {
  return (
    <ScrollArea className="h-[95vh]">
        <Chart />
        <MarksTable />
    </ScrollArea>
  )
}

export default Marks