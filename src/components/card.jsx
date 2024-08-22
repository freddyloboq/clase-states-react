export const Card = ({ position, item }) => {
  // const styleCard = {
  //   width: "18rem"
  // }
  return (
    <div className="col-3">
      {/* <div className="card" style={styleCard}> */}
      <div className="card" style={{"width": "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere {item.id}
          </a>
        </div>
      </div>
    </div>
  );
}
