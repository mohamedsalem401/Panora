'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LinkedUsersPage } from "@/components/Configuration/LinkedUsers/LinkedUsersPage";
import { Separator } from "@/components/ui/separator";
import FieldMappingsTable from "@/components/Configuration/FieldMappings/FieldMappingsTable";
import AddLinkedAccount from "@/components/Configuration/LinkedUsers/AddLinkedAccount";
import useLinkedUsers from "@/hooks/get/useLinkedUsers";
import useFieldMappings from "@/hooks/get/useFieldMappings";
import { ReactNode, useState } from "react";
import AddWebhook from "@/components/Configuration/Webhooks/AddWebhook";
import { WebhooksPage } from "@/components/Configuration/Webhooks/WebhooksPage";
import useWebhooks from "@/hooks/get/useWebhooks";
import useConnectionStrategies from "@/hooks/get/useConnectionStrategies";
import { Heading } from "@/components/ui/heading";
import CustomConnectorPage from "@/components/Configuration/Connector/CustomConnectorPage";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { CatalogWidget } from "@/components/Configuration/Catalog/CatalogWidget";
import { CopySnippet } from "@/components/Configuration/Catalog/CopySnippet";
import { Button as Button2 } from "@/components/ui/button2"
import { useRouter } from "next/navigation";

export default function Page({ children }: { children: ReactNode }) {

  const { data: linkedUsers, isLoading, error } = useLinkedUsers();
  const { data: webhooks, isLoading: isWebhooksLoading, error: isWebhooksError } = useWebhooks();
  const { data: connectionStrategies, isLoading: isConnectionStrategiesLoading, error: isConnectionStategiesError } = useConnectionStrategies()
  const { data: mappings, isLoading: isFieldMappingsLoading, error: isFieldMappingsError } = useFieldMappings();

  const [open, setOpen] = useState(false);

  if (error) {
    console.log("error linked users..");
  }

  if (isFieldMappingsLoading) {
    console.log("loading FieldMappingsLoading..");
  }

  if (isFieldMappingsError) {
    console.log("error isFieldMappingsError..");
  }

  if (isWebhooksLoading) {
    console.log("loading webhooks..");
  }

  if (isWebhooksError) {
    console.log("error fetching webhooks..");
  }

  if (isConnectionStrategiesLoading) {
    console.log("loading Connection Strategies...");
  }

  if (isConnectionStategiesError) {
    console.log("error Fetching connection Strategies!")
  }

  const router = useRouter()
  const handleTabClick = (item: string) => {
    router.push(`configuration/${item}`);
  }
  const tabs = [{
    name: "Linked Accounts",
    value: "linked-accounts"
  },{
    name: "Field Mapping",
    value: "field-mapping"
  }, {
    name: "Webhooks",
    value: "webhooks"
  }, {
    name: "Manage Catalog Widget",
    value: "catalog-widget"
  }, {
    name: "Manage Connectors",
    value: "connectors"
  }]

  return (

    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <Heading
            title="Configuration"
            description=""
          />
        </div>
        <div className="w-full">
          {tabs.map(item => {
            return <Button key={item.value} variant={"outline"} onClick={() => {
              handleTabClick(item.value)
            }} >{item.name}</Button>
          })}
        </div>
        {children}
        <Tabs defaultValue="linked-accounts" className="space-y-4">
          <TabsContent value="linked-accounts" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <AddLinkedAccount />
              <Card className="col-span-12">
                <CardHeader>
                  <CardTitle className="text-left flex items-center">
                    <span>Your Linked Accounts</span>
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
                              <div className="grid min-w-[250px] gap-1 gap-y-2">
                                <p className="font-bold text-md">What are linked accounts ? </p>
                                <p className="text-sm">The linked-user object represents your end-user entity inside our system.</p>
                                <p className="text-sm">It is a mirror of the end-user that exist in your backend. It helps Panora have the same source of truth about your user’s information. </p>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                        <TooltipContent>Help</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                  <CardDescription className="text-left flex flex-row items-center">
                    You connected {linkedUsers ? linkedUsers.length : <LoadingSpinner className="w-4 mr-2" />} linked accounts.
                  </CardDescription>
                </CardHeader>
                <Separator className="mb-10" />
                <CardContent>
                  <LinkedUsersPage linkedUsers={linkedUsers} isLoading={isLoading} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="field-mappings" className="space-y-4">
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <AddWebhook />
              <Card className="col-span-12">
                <CardHeader>
                  <CardTitle className="text-left">Your Webhooks</CardTitle>
                  <CardDescription className="text-left flex flex-row items-center">
                    You enabled {webhooks ? webhooks.length : <LoadingSpinner className="w-4 mr-1" />} webhooks.
                    <Button2 variant="linkHover2">
                      <a href="https://docs.panora.dev/webhooks/overview" target="_blank" rel="noopener noreferrer"><strong> Read more about webhooks from our documentation</strong></a>
                    </Button2>
                  </CardDescription>
                </CardHeader>
                <Separator className="mb-10" />
                <CardContent>
                  <WebhooksPage webhooks={webhooks} isLoading={isWebhooksLoading} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <CustomConnectorPage />
          </TabsContent>

          <TabsContent value="catalog" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <CopySnippet />
              <Card className="col-span-12">
                <CardHeader>
                  <CardTitle className="text-left">Customize Your Embedded Widget</CardTitle>
                  <CardDescription className="text-left flex flex-row items-center">
                    Select connectors you would like to have in the UI widget catalog. By default, they are all displayed.
                  </CardDescription>
                </CardHeader>
                <Separator className="mb-[15px]" />
                <CardContent>
                  <CatalogWidget />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}