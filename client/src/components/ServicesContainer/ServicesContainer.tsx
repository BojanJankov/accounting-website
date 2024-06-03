import "./ServicesContainer.css";

function ServicesContainer() {
  return (
    <div className="services-container">
      <h1 className="services-h1">What we offer?</h1>
      <div className="cards-services-div">
        <div className="services-card">
          <h2 className="card-heading">Accounting services</h2>
          <div className="card-text">
            <p>
              As accounting comapny, we offer best, complete, precise timely
              recording of events in accordance with the adopted IAS and IFRS in
              North Macedonia. We work on that part, for you remains to focus on
              company success.
            </p>
            <button className="read-more-btn">Read more...</button>
          </div>
        </div>
        <div className="services-card">
          <h2 className="card-heading">Calculation of salaries</h2>
          <div className="card-text">
            <p>
              You will receive a complete, accurate and timely calculation from
              the PRO, sent to you! The spreadsheet that you will hand over to
              your employees must include basic salary data, salary supplements
              , work bonuses, performance, deductions.
            </p>
            <button className="read-more-btn">Read more...</button>
          </div>
        </div>
        <div className="services-card">
          <h2 className="card-heading">Tax advice and tax reports</h2>
          <div className="card-text">
            <p>
              As a Responsible Company for Your Company's Operations You
              certainly do not have time to follow all the changes in the tax
              field. So, we are here to help you with that part and send you
              up-to-date and timely notifications of important tax law changes.
            </p>
            <button className="read-more-btn">Read more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
