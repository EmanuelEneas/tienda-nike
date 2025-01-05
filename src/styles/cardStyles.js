export const card = {
  backgroundColor: "var(--card-bg-color)",
  padding: "1.5rem",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  height: "max-content",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  overflow: "hidden",
  color: "#333",
  fontFamily: "Roboto, Arial, sans-serif",
};

export const cardInnerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0",
};

export const cardPriceBtn = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const cardPrice = {
  textAlign: "center",
  fontFamily: "Verdana, sans-serif",
  fontSize: "2rem",
  fontWeight: "800",
  color: "var(--price-color)",
};

export const cardBtn = {
  border: "none",
  alignSelf: "center",
  height: "45px",
  width: "150px",
  cursor: "pointer",
  backgroundColor: "var(--btn-bg-color)",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.2s ease, background-color 0.3s ease",
};

export const cardBtnDisabled = {
  border: "none",
  alignSelf: "center",
  height: "45px",
  width: "150px",
  cursor: "not-allowed",
  backgroundColor: "var(--btn-disabled-bg)",
  color: "#aaa",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "12px",
};

export const cardBtnHover = {
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "var(--btn-hover-bg)",
  },
};

