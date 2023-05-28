"use client"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from "@chakra-ui/react"
import DrawerAccordionButton_1 from "./DrawerAccordionButton_1"

export default function DrawerAccordion_1({items=[]}) {

    return (
        <Accordion className="border-none space-y-1" allowToggle>

            {
                items.map((item, i) => (
                    <>
                    {
                        item.isSeparator
                        ?
                            <div className="w-full !mt-4"></div>
                        :
                            <AccordionItem key={i} className="border-none">
                                <AccordionButton className="bg-[#2d3035] hover:!bg-[#383a3e] group">
                                    <DrawerAccordionButton_1
                                        text={item.text}
                                        icon={item?.icon}
                                    />
                                    {
                                        item?.hasContent
                                        ?
                                            <AccordionIcon className="!text-white/70" />
                                        :
                                            null
                                    }
                                </AccordionButton>

                                <AccordionPanel className={`${item.hasContent?"space-y-1":"!p-0"}`}>
                                    {item?.content}
                                </AccordionPanel>
                            </AccordionItem>

                    }
                    </>
                ))
            }


        </Accordion>
    )

}