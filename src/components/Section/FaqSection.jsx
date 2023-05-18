// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/c"

import AccordionComponent from "../Accordations/Accordion"

const FaqSection = () => {
    return (
        <div className="h-full max-w-full py-32">
            <div className="container w-full h-full mx-auto px-36">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-bnr-md font-bnr700">Frequently Asked Question</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="">
                        <AccordionComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection