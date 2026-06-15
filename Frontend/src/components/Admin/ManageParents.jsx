import {useUserContext} from "../../Context/UserContext.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs.jsx";
import { Separator } from "../../components/ui/separator.jsx";
import {ScrollArea, ScrollBar} from "../../components/ui/scroll-area.jsx";
import ParentCreate from "@/components/Forms/ParentCreate.jsx";
import AdminParentList from "../Data-table/parent/AdminParentList.jsx";

//import ParentUpsertForm from "@/components/Forms/ParentUpsertForm.jsx";


export default function ManageParents() {
  const {user} = useUserContext()
  return <>
    <div className="relative overflow-x-auto">
      <div className="min-h-screen bg-background">
        <div className="">
          <div className="bg-background">
            <div className="grid">
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="parents_list" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="parents_list" className="relative">
                          Parents
                        </TabsTrigger>
                        <TabsTrigger value="add_parent">Add new parent</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="parents_list"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1 w-full">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All parents
                          </h2>
                          <AdminParentList /> 
                        </div>
                      </div>
                      <Separator className="my-4"/>
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                          </div>
                          <ScrollBar orientation="horizontal"/>
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="add_parent">
                       <div className="space-y-1">
                        {/*<ParentUpsertForm handleSubmit={(values) => ParentApi.create(values)}/>*/}
                      </div> 
                      <Separator className="my-4"/>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}