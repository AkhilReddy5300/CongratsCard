const element = (
  <div className="bg-image">
    <h1 className="header">Congratulations</h1>
    <div className="card-cont">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="name">Kiran V</p>
      <p className="para">
        Akhil's Institute of Computer Education and technology. WARANGAL
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
