function Projects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Professional Projects</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>📘 Accounts Receivable Manual Process</h2>
        <img
          src="/src/assets/accounts_receivable.jpg"
          alt="Accounts Receivable"
          style={{ width: '250px', marginBottom: '1rem' }}
        />
        <p>
          Implemented a structured manual Accounts Receivable system for a mid-sized company. Designed Excel-based templates and standardized procedures for invoicing, tracking, and follow-ups. Improved cash flow visibility and streamlined customer payment processing.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>🏥 Auto-Purchase System for Pharmacy Warehouse</h2>
        <img
          src="/src/assets/pharmacy_auto.jpg"
          alt="Pharmacy Auto Purchase"
          style={{ width: '250px', marginBottom: '1rem' }}
        />
        <p>
          Led the implementation of an auto-purchase inventory system for a pharmaceutical warehouse. Collaborated with IT and procurement teams to automate stock reordering based on usage thresholds. This reduced manual errors and ensured consistent medicine availability.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>📙 Accounts Payable Manual Process</h2>
        <img
          src="/src/assets/accounts_payable.jpg"
          alt="Accounts Payable"
          style={{ width: '250px', marginBottom: '1rem' }}
        />
        <p>
          Developed a manual Accounts Payable system to manage supplier invoices and payment scheduling. Created documentation and trained staff in invoice processing, approvals, and tracking. Helped the company maintain vendor relationships and avoid late penalties.
        </p>
      </div>
    </div>
  );
}

export default Projects;