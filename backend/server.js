const express = require("express");
const app = express();

// Route files
const usersRoute = require("./routes/users");

// Use routes
app.use("/users", usersRoute);

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
