/* Global page styling */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f4f9;

  /* center the card */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* The business card container */
.card {
  background-color: #ffffff;
  padding: 40px 50px;
  border-radius: 20px;
  width: 350px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Logo image */
.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 20px;
}

/* Name + title */
.name {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
}

.title {
  margin: 5px 0 20px 0;
  font-size: 16px;
  color: #555555;
}

/* Info text (email, phone, etc.) */
.info p {
  margin: 8px 0;
  font-size: 15px;
}

/* Links */
a {
  color: #007aff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
