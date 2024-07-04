import React from 'react'

const Product = () => {
  return (
    <div>
      <div className='container mt-3'>
        <center>
          <h3> Our Products</h3>
        </center>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className="col">
            <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Enterprise Resource Planning</h5>
                  <p className="card-text">It's a type of software that helps organizations automate and manage business processes. ERP can help with accounting, procurement, project management, risk management, compliance, and supply chain operations.</p>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Human Resources Management System</h5>
                  <p className="card-text">Human resources management system (HRMS) software is a suite of applications that help HR professionals manage human resources functions. HRMS software helps with every stage of the employment lifecycle, from recruitment to retirement.</p>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Customer Managed Relationship</h5>
                  <p className="card-text">CMR is about engagement wherever the consumer is in their buying journey. Whether they're… browsing in-store. chatting online with your company's help desk.</p>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Billing System</h5>
                  <p className="card-text">Billing system software is an accounting application that can automate and streamline invoice processing and payment services</p>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Apache Hadoop</h5>
                  <p className="card-text">Organizations can manage and analyze massive amounts of data quickly and effectively with the help of Apache Hadoop’s dynamic big data governance solutions.</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product