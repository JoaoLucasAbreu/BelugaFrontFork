import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from '@/components/ui/file-button'

export const VideoUploaderModal = ({ open, setOpen }) => {
  return (
    <>
      <DialogRoot
        class="m-8"
        size="lg"
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <DialogContent>
          <DialogHeader className="p-5">
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <></>
          <DialogBody className="m-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <FileUploadRoot maxFiles={1} maxW="xl" alignItems="stretch">
              <FileUploadDropzone
                label="Drag and drop here to upload"
                description=".png, .jpg up to 5MB"
              />
              <FileUploadList />
            </FileUploadRoot>
          </DialogBody>

          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button>Save</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  )
}
