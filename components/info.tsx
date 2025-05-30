"use client"

import { ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import Currency from "@/components/ui/currency"
import Button from "@/components/ui/button"

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-950">{data.name}</h1>
        <div className="mt-4 flex items-end justify-between">
            <p className="text-2xl text-gray-900">
                <Currency value={data.price}/>
            </p>
        </div>
        <hr className="my-4 border-[#e5e7eb]"/>
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div className="h-6 w-6 rounded-full border-gray-500" style={{
                    backgroundColor: data?.color?.value
                }}/>
            </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2">
                Add to Cart
                <ShoppingCart/>    
            </Button> 
        </div>
    </div>
  )
}

export default Info