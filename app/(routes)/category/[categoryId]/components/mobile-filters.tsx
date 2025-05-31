"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"

import { Color, Size } from "@/types"
import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Filter from "./filter"

interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {setOpen(true)}
    const onClose = () => {setOpen(false)}

    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20}/>
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className="fixed inset-0 bg-black/25" />

                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto w-full h-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>

                        <div className="p-4">
                            <Filter 
                                valueKey="sizeId"
                                name="Size"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Color"
                                data={colors} 
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters