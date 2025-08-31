import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useBorrowerStore } from "../store/useBorrowerStore";

export default function BorrowerPipeline({ borrowers }) {
  const { setActiveBorrower } = useBorrowerStore();

  const renderList = (list) =>
    list.map((b) => (
      <div
        key={b.id}
        data-testid={`borrower-item-${b.id}`}
        onClick={() => setActiveBorrower(b)}
        className="cursor-pointer p-2 border rounded mb-2 hover:bg-gray-100 flex justify-between"
      >
        <div>
          <p className="text-[14px] font-semibold">{b.name} <span className="px-3 py-1 text-xs font-bold rounded-md bg-gray-100">{b.status}</span></p>
          <p className="text-[12px] text-gray-400">{b.loan_type}</p>
        </div>
        <div className="text-right">
          <p className="text-[14px] font-semibold">${b.amount.toLocaleString()}</p>
        </div>
      </div>
    ));

    

  return (
    <div className="bg-white shadow rounded shadow-lg p-4">
      <h2 className="text-[18px] font-bold mb-4">Borrower Pipeline</h2>
      <Tabs defaultValue="new">
        <TabsList className="flex justify-center gap-0 p-0 bg-gray-100 rounded-md">
          <TabsTrigger className="px-3 py-1 m-0 text-xs font-normal rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
           value="new">New</TabsTrigger>
          <TabsTrigger className="px-3 py-1 m-0 text-xs font-normal rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
           value="in_review">In Review</TabsTrigger>
          <TabsTrigger className="px-3 py-1 m-0 text-xs font-normal rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
           value="approved">Approved</TabsTrigger>
        </TabsList>
        <TabsContent className="p-0 m-0" value="new">{renderList(borrowers.new)}</TabsContent>
        <TabsContent className="p-0 m-0" value="in_review">{renderList(borrowers.in_review)}</TabsContent>
        <TabsContent className="p-0 m-0" value="approved">{renderList(borrowers.approved)}</TabsContent>
      </Tabs>
    </div>
  );
}
