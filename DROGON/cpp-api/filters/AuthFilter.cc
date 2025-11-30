#include "AuthFilter.h"
#include <drogon/drogon.h>
#include <json/json.h>

void AuthFilter::doFilter(const drogon::HttpRequestPtr& req,
                          drogon::FilterCallback&& fcb,
                          drogon::FilterChainCallback&& fccb) {
    auto key = req->getHeader("x-api-key");
    if (key == "secret123") {
        fccb();  // lanjut ke controller
    } else {
        Json::Value j;
        j["error"] = "Unauthorized";
        j["hint"] = "Provide x-api-key: secret123";

        auto resp = drogon::HttpResponse::newHttpJsonResponse(j);
        resp->setStatusCode(drogon::k401Unauthorized);
        fcb(resp);
    }
}
