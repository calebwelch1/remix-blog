import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),       
    route("/timer", "routes/timer.tsx"),
    // route("/blog", "routes/blog.tsx"),
    route("/blog/:blogId", "routes/blog.tsx"),
    route("/todo", "routes/todo.tsx"),
    // nested routes
    route("dashboard", "routes/dashboard.tsx", [
        // this will be dashboard/finances
        route("finances", "routes/finances.tsx"),
        route("personal-info", "routes/personalInfo.tsx"),
    ]),
    route("/.well-known/appspecific/com.chrome.devtools.json", "routes/well-known/appspecific/com.chrome.devtools.json.tsx"),
] satisfies RouteConfig;
