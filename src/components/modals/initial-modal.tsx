'use client'
import {useForm} from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
}  from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button'
import FileUpload from '../file-upload'

const formschema = z.object({
  name: z.string().min(1, {
    message: "Server name is required"
  }),
  imageUrl:z.string().min(1,{
    message: "Server image is required"
  })
})


const InitialModal = () => {
    const form = useForm({
      resolver: zodResolver(formschema),
        defaultValues:{
            name:"",
           imageUrl:"",
        }
    })

const isLoading = form.formState.isSubmitting;

const onSubmit = async (values: z.infer<typeof formschema>)=>{
  console.log(values);
}

    return ( 
        <Dialog open>
          <DialogContent className="bg-white text-black p-0 overflow-hidden max-h-[90vh] overflow-y-auto flex flex-row">
            <DialogHeader className="pt-8 px-6">
              <DialogTitle className="text-2xl text-center font-bold">
                Customize your server
              </DialogTitle>
              
              <DialogDescription className="text-center text-zinc-500">
                Give your server a personality with a name and an image. You can always change it later.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-8 px-6">
                    <FormField 
                    control={form.control} 
                    name="name" 
                    render={({field})=>(
                      <FormItem>
                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                          Server name 
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                            placeholder='Enter server name'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )} 
                  />
                   <DialogFooter className='bg-gray-100 px-6 py-4'>
                  <Button disabled={isLoading} type="submit" variant="primary">
                    Create
                  </Button>
                </DialogFooter>
                  <div className="flex items-center justify-center text-center">
                    <FormField 
                      control={form.control} 
                      name="imageUrl" 
                      render={({field})=>(
                        <FormItem className="w-full">
                          <FormControl >
                             <div
        className="fixed-dropzone-wrapper w-64 h-40 rounded-md overflow-hidden relative"
        style={{ width: 256, height: 160 }} // exact px ensures predictability
      >
 <FileUpload
                              endpoint="serverImage"
                              value={field.value}
                              onChange={field.onChange}
                                style={{ width: "100%", height: "100%", position: "relative" }}
                            />

      </div>
                           
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                
                </div>
                
               
              </form>
            </Form>
          </DialogContent>
        </Dialog>
     );
}
 
export default InitialModal;