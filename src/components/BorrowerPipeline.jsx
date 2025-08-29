import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useBorrowerStore } from "../store/useBorrowerStore";

export default function BorrowerPipeline({ borrowers }) {
  const { setActiveBorrower } = useBorrowerStore();

  const renderList = (list) =>
    list.map((b) => (
      <div
        key={b.id}
        onClick={() => setActiveBorrower(b)}
        className="cursor-pointer p-2 border rounded mb-2 hover:bg-gray-100 flex justify-between"
      >
        <div>
          <p className="font-semibold">{b.name}</p>
          <p className="text-sm text-gray-500">{b.loan_type}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">${b.amount.toLocaleString()}</p>
          <span className="text-xs bg-gray-200 rounded px-2">{b.status}</span>
        </div>
      </div>
    ));

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-4">Borrower Pipeline</h2>
      <Tabs defaultValue="new">
        <TabsList>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="in_review">In Review</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
        </TabsList>
        <TabsContent value="new">{renderList(borrowers.new)}</TabsContent>
        <TabsContent value="in_review">{renderList(borrowers.in_review)}</TabsContent>
        <TabsContent value="approved">{renderList(borrowers.approved)}</TabsContent>
      </Tabs>
    </div>
  );
}
