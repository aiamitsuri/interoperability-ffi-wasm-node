const { fetch_from_js } = require("@aiamitsuri/interoperability-ffi-wasm");

async function deepSearch() {
    console.log("🚀 Starting Deep Wasm Test...");
    
    const params = {
        language: "node",
        integration: "done",
        crates: "wasm",
        developmentkit: "app",
        page: "1",
		ids: null
    };

    try {
        const result = await fetch_from_js(params);
        console.log(`✅ Success! Found ${result.pagination.total_items} items matching criteria.`);
        console.dir(result, { depth: null });
    } catch (err) {
        console.error("❌ Wasm Execution Error:", err);
    }
}

deepSearch();