import "./Subwork.css";

const Subwork = () => {
  return (
    <>
      <div className="list-of-works">
        <div className="work-container">
          <img src="./images/Rectangle 32.png" alt="work-img" />
          <div className="work-post-lists">
            <h3>Vibrant Portraits of 2020</h3>
            <div id="work-post-lists">
              <p className="btn">2018</p>
              <p className="sub-head">Illustration</p>
            </div>
            <p className="list-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </div>
    </>
  );
};

export default Subwork;
