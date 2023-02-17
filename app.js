const http = require("http");
const UserController = require("./src/controllers/user-controller");
const server = http.createServer(async (req, res) => {
    const userController = new UserController()
    if (req.url === "/users" && req.method === "GET") {
        return await userController.get(req, res)
    }

    if (req.url === "/users" && req.method === "POST") {

        return await userController.create(req, res)
    }

    if (req.url.includes("/users/") && req.method === "DELETE") {

        return await userController.delete(req, res)
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});