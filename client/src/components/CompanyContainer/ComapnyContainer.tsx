import "./CompanyContainer.css";

function CompanyContainer() {
  return (
    <div id="about">
      <h1 className="company-container-heading">Our work and our clients</h1>
      <div className="company-container-div">
        <div className="image-comapny-card">
          <img
            src="../../../../src/assets/types-uk-company.jpg"
            alt="company image"
            width="650px"
          />
        </div>
        <div className="info-company-card">
          <div>
            <h3 className="company-h3">
              <span>01</span> Number one comany
            </h3>
            <p className="company-p">
              Our company is number one leader in accounting business in contry!
            </p>
          </div>
          <div>
            <h3 className="company-h3">
              <span>02</span> 120+ clients
            </h3>
            <p className="company-p">
              Our clients are most satisfied from the moment they chose us for
              thier accounting company
            </p>
          </div>
          <div>
            <h3 className="company-h3">
              <span>03</span> The best team
            </h3>
            <p className="company-p">
              We have best team of accounting professionals that work for your
              financial part of company.
            </p>
          </div>
          <div>
            <h3 className="company-h3">
              <span>04</span> Long tradition
            </h3>
            <p className="company-p">
              This company has been on the market for over 30 years and has the
              largest number of satisfied clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContainer;
