'use client'
import { EVENT_CONFIG } from "@/lib/constants"
import Image from "next/image"

function CloudInfoBanner() {
    return (
        <section className="bg-secondary-600 flex p-6 mx-auto justify-center item-center gap-4 md:gap-12 z-20">
            <Image
                src='/cloud-logo-white.svg'
                alt='Cloud Summit logo in all white. visualized as two swirls to make up a cloud shape with the words cloud summit under'
                width={100}
                height={100}
            />
            <h2 className="w-3/4 h-auto md:text-2xl my-auto">{EVENT_CONFIG.about}</h2>
        </section>
    )
}

export default CloudInfoBanner
