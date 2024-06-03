import "./CompanyContainer.css";

function CompanyContainer() {
  return (
    <div className="company-container">
      <h1 className="company-container-heading">Our work and our clients</h1>
      <div className="company-container-div">
        <div className="image-comapny-card">
          <img
            src="../../../../src/assets/types-uk-company.jpg"
            alt="company image"
            width="650px"
          />
        </div>
        <div className="info-comapny-card">
          <div>
            <h3 className="comapny-h3">Number one comany</h3>
          </div>
          <div>
            <h3 className="comapny-h3">120+ clients</h3>
          </div>
          <div>
            <h3 className="comapny-h3">The best team</h3>
          </div>
          <div>
            <h3 className="comapny-h3">Long tradition</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContainer;
