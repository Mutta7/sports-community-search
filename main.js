const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/communities.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/communities.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

router.get("/undraw_join_of2w.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/undraw_join_of2w.png", res);
});

router.get("/undraw_Page_not_found_re_e9o6.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/undraw_Page_not_found_re_e9o6.png", res);
});

router.get("/undraw_team_work_k80m.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/undraw_team_work_k80m.png", res);
});

router.get("/undraw_Fans_re_cri3.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/undraw_Fans_re_cri3.png", res);
});

router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

router.get("/sports_community_search.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/sports_community_search.css", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);