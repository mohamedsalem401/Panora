"use client"
import FieldMappingsTable from "@/components/Configuration/FieldMappings/FieldMappingsTable"
import { Button } from "@/components/ui/button"
import { Button as Button2 } from "@/components/ui/button2"
import { CardHeader, CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import useFieldMappings from "@/hooks/get/useFieldMappings"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@radix-ui/react-popover"
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@radix-ui/react-tooltip"
import { HelpCircle } from "lucide-react"

const FieldMapping = () => {
    const { data: mappings, isLoading: isFieldMappingsLoading, error: isFieldMappingsError } = useFieldMappings();
    const mappingTs = mappings?.map((mapping) => ({
        standard_object: mapping.ressource_owner_type,
        source_app: mapping.source,
        status: mapping.status,
        category: mapping.ressource_owner_type.split('.')[0],
        source_field: mapping.remote_id,
        destination_field: mapping.slug,
        data_type: mapping.data_type,
    }))

    return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        <Card className="col-span-12">
            <CardHeader>
                <CardTitle className="text-left flex items-center">
                    <span>Your Fields Mappings</span>
                    <TooltipProvider>
                        <Tooltip>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <TooltipTrigger asChild>
                                        <Button variant={"link"} size="icon">
                                            <HelpCircle className="h-4 w-4" />
                                            <span className="sr-only">Help</span>
                                        </Button>
                                    </TooltipTrigger>
                                </PopoverTrigger>
                                <PopoverContent className="flex w-[420px] p-0">
                                    <div className="flex flex-col gap-2 px-2 py-4">
                                        <div className="grid min-w-[250px] gap-1 gap-y-2 ">
                                            <p className="font-bold text-md">What are field mappings ? </p>
                                            <p className="text-sm">
                                                By default, our unified models are predefined as you can see in the API reference. <br />
                                            </p>
                                            <p className="text-sm">Now with field mappings, you have the option to map your custom fields (that may exist in your end-customer&apos;s tools) to our unified model !</p>
                                            <p className="text-sm">
                                                It is done in 2 steps. First you must define your custom field so it is recognized by Panora. Lastly, you must map this field to your remote field that exist in a 3rd party.
                                            </p>
                                            <p className="text-sm">
                                                <br />That way, Panora can retrieve the newly created custom field directly within the unified model.
                                            </p>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <TooltipContent>Help</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardTitle>
                <CardDescription className="text-left flex flex-row items-center">
                    You built {mappings ? mappings.length : <LoadingSpinner className="w-4 mr-1" />} fields mappings.
                    <Button2 variant="linkHover2">
                        <a href="https://docs.panora.dev/core-concepts/custom-fields" className="font-bold" target="_blank" rel="noopener noreferrer"> Learn more about custom field mappings in our docs !</a>
                    </Button2>
                </CardDescription>
            </CardHeader>
            <Separator className="mb-7" />
            <CardContent>
                <FieldMappingsTable mappings={mappingTs} isLoading={isFieldMappingsLoading} />
            </CardContent>
        </Card>
    </div>
}

export default FieldMapping