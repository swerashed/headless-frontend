import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const SharedModal = ({modalTrigger, modalContent}) => {
  return (
    <div>
          <Dialog>
  <DialogTrigger>
 {modalTrigger}
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
   
      <DialogDescription as="div">
       {modalContent}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default SharedModal