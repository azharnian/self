#pragma once
#include <drogon/HttpController.h>

using namespace drogon;

namespace api {
class Hello : public drogon::HttpController<Hello> {
public:
    METHOD_LIST_BEGIN
      // GET /health
      ADD_METHOD_TO(Hello::health, "/health", Get);

      // GET /hello?name=Anas
      ADD_METHOD_TO(Hello::hello, "/hello", Get);

      // POST /echo  (JSON body)
      // Contoh attach filter (AuthFilter) — kita buat di langkah 4
      ADD_METHOD_TO(Hello::echo, "/echo", Post, "AuthFilter");
    METHOD_LIST_END

    void health(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void hello(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void echo(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
};
} // namespace api
