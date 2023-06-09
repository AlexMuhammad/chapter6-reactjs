import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@teovilla/shadcn-ui-react-accordion"

const AccordionComponent = () => {
    return (
        <Accordion type="single" collapsible className="w-[700px] space-y-4">
            <AccordionItem value="item-1" >
                <AccordionTrigger className="w-full px-6 py-4 border rounded-sm border-bnr-dark-gray">Apa saja syarat yang dibutuhkan?</AccordionTrigger>
                <AccordionContent className="px-6 py-4 border border-bnr-dark-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi explicabo esse cum voluptatibus animi blanditiis doloribus repudiandae debitis quisquam.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="w-full px-6 py-4 border rounded-sm border-bnr-dark-gray">Berapa hari minimal sewa mobil lepas kunci?</AccordionTrigger>
                <AccordionContent className="px-6 py-4 border border-bnr-dark-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi explicabo esse cum voluptatibus animi blanditiis doloribus repudiandae debitis quisquam.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="w-full px-6 py-4 border rounded-sm border-bnr-dark-gray">Berapa hari sebelumnya sabaiknya booking sewa mobil?</AccordionTrigger>
                <AccordionContent className="px-6 py-4 border border-bnr-dark-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi explicabo esse cum voluptatibus animi blanditiis doloribus repudiandae debitis quisquam.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="w-full px-6 py-4 border rounded-sm border-bnr-dark-gray">Apakah Ada biaya antar-jemput?</AccordionTrigger>
                <AccordionContent className="px-6 py-4 border border-bnr-dark-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi explicabo esse cum voluptatibus animi blanditiis doloribus repudiandae debitis quisquam.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="w-full px-6 py-4 border rounded-sm border-bnr-dark-gray">Bagaimana jika terjadi kecelakaan</AccordionTrigger>
                <AccordionContent className="px-6 py-4 border border-bnr-dark-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi explicabo esse cum voluptatibus animi blanditiis doloribus repudiandae debitis quisquam.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionComponent