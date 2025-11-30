#include <drogon/drogon.h>
#include <filesystem>
#include <iostream>

int main() {
    using namespace drogon;

    // Log detail biar kelihatan masalahnya
    app().setLogLevel(trantor::Logger::kTrace);

    try {
        if (std::filesystem::exists("config.json")) {
            std::cout << "[info] Loading config.json\n";
            app().loadConfigFile("config.json");
        } else {
            std::cout << "[info] No config.json, using fallback 0.0.0.0:5555\n";
            app().addListener("0.0.0.0", 5555);

            app().registerPostHandlingAdvice([](const HttpRequestPtr&, const HttpResponsePtr& resp) {
                resp->addHeader("Access-Control-Allow-Origin", "*");
                resp->addHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
                resp->addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            });
        }

        std::cout << "[info] Starting server...\n";
        app().run();
    } catch (const std::exception& e) {
        std::cerr << "[fatal] " << e.what() << "\n";
        return 1;
    }
    return 0;
}
