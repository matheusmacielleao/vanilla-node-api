const http = require("http");
const UserController = require("./src/controllers/user-controller");
const server = http.createServer(async (req, res) => {
    const userController = new UserController()
    if (req.url === "/users" && req.method === "GET") {
        await userController.get(req, res)
    }

    if (req.url === "/users" && req.method === "POST") {

        await userController.create(req, res)
    }

    // If no route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});