const express = require("express");
const { initMiddleware, routeMiddleware } = require("./middleware");
const app = express();
initMiddleware(app);
routeMiddleware(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, (_) => console.log(`APP is listening at PORT: ${PORT}`));
