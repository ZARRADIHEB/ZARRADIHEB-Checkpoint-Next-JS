import Image from "next/image";

const Card = ({ src, title, des }) => {
  return (
    <>
      <div className="card" style={cardStyle}>
        <h2 style={{ fontSize: "2rem", margin: "10px", padding: "0 10px" }}>
          {title}
        </h2>
        <div className="img">
          <Image
            src={src}
            alt="img"
            layout=""
            width={300}
            height={300}
            style={imgStyle}
          />
        </div>
        <p style={pStyle}>{des}</p>
      </div>
    </>
  );
};

export default Card;

const imgStyle = {
  borderRadius: "30%",
};

const cardStyle = {
  padding: "20px",
  backgroundColor: "#1d1d1d",
  borderRadius: "20%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
};

const pStyle = {
  padding: "0 10px",
  fontSize: "1.2rem",
  margin: "15px",
};
