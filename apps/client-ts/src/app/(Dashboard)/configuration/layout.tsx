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
  }, {
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
      </div>
    </div>
  );
}