#include "Hello.h"
#include <json/json.h>     // Drogon pakai Json::Value
#include <chrono>

using namespace api;

void Hello::health(const HttpRequestPtr&, std::function<void (const HttpResponsePtr &)> &&callback) {
    Json::Value j;
    j["status"] = "ok";
    auto resp = HttpResponse::newHttpJsonResponse(j);
    callback(resp);
}

void Hello::hello(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) {
    auto name = req->getParameter("name");
    if (name.empty()) name = "World";

    Json::Value j;
    j["message"] = "Hello, " + name;

    auto resp = HttpResponse::newHttpJsonResponse(j);
    callback(resp);
}

void Hello::echo(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) {
    Json::CharReaderBuilder builder;
    Json::Value in;
    std::string errs;

    const auto &body = req->getBody();
    std::unique_ptr<Json::CharReader> reader(builder.newCharReader());
    bool ok = reader->parse(body.data(), body.data() + body.size(), &in, &errs);

    if (!ok) {
        Json::Value e;
        e["error"] = "Invalid JSON";
        e["detail"] = errs;
        auto resp = HttpResponse::newHttpJsonResponse(e);
        resp->setStatusCode(k400BadRequest);
        callback(resp);
        return;
    }

    auto now_ms = std::chrono::duration_cast<std::chrono::milliseconds>(
                      std::chrono::system_clock::now().time_since_epoch()).count();

    Json::Value out;
    out["received"] = in;
    out["server_time_ms"] = Json::Int64(now_ms);

    auto resp = HttpResponse::newHttpJsonResponse(out);
    callback(resp);
}
