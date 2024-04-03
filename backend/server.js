const express = require("express");
const app = express();

// Route files
const usersRoutes = require("./routes/Users");

// Use routes
app.use("/users", usersRoutes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
