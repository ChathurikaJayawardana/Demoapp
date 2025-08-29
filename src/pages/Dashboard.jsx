import { useEffect } from "react";
import { useBorrowerStore } from "../store/useBorrowerStore";
import { getBorrowerPipeline } from "../api/mockApi";

import Layout from "../components/Layout";
import BorrowerPipeline from "../components/BorrowerPipeline";
import BorrowerDetail from "../components/BorrowerDetail";
import BrokerOverview from "../components/BrokerOverview";

export default function Dashboard() {
  const { borrowers, setBorrowers } = useBorrowerStore();

  useEffect(() => {
    getBorrowerPipeline().then(setBorrowers);
  }, [setBorrowers]);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BorrowerPipeline borrowers={borrowers} />
        <BorrowerDetail />
        <BrokerOverview />
      </div>
    </Layout>
  );
}
