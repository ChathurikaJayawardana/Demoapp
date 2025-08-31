import data from "./sample-response.json";

export function getBorrowerPipeline() {
  return Promise.resolve(data.endpoints.find(e => e.name === "Get Borrower Pipeline").response);
}

export function getBorrowerDetail(id) {
  return Promise.resolve(data.endpoints.find(e => e.name === "Get Borrower Detail").response[id-1]);
}

export function getBrokerInfo() {
  return Promise.resolve(data.endpoints.find(e => e.name === "Get Broker Info").response);
}

export function getOnboardingWorkflow() {
  return Promise.resolve(data.endpoints.find(e => e.name === "Get Onboarding Workflow").response);
}
