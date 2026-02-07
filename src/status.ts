type Status = "pending" | "approved" | "rejected";

function updateStatus(status: Status): void {
  console.log("Status updated to:", status);
}

updateStatus("pending");
updateStatus("approved");
updateStatus("rejected");
