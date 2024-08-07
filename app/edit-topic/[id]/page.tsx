import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const page = (params:any) => {

  

  return (
    <div>
     <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full max-w-lg">
        <div className="flex justify-center items-center">
          <Input className="w-3/4" placeholder="Title" />
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className="flex-col w-2/3">
            <Textarea placeholder="Type your message here." />
            <div className="flex justify-center mt-4">
              <Button>Add Topic</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page