const { fetch_from_js } = require("@aiamitsuri/interoperability-ffi-wasm");

async function deepSearch() {
    console.log("🚀 Starting Deep Wasm Test...");
    
    const params = {
        // language: "node",
        // integration: "done",
        // crates: "wasm",
        // developmentkit: "app",
        // page: "1",
		// ids: null,
		// ids: [1].join(","),
		ids: [1, 3, 4].join(",")
    };

    try {
        const result = await fetch_from_js(params);

        // 1. Use Optional Chaining (?.) to prevent "TypeError: Cannot read properties of undefined"
        // 2. Use Nullish Coalescing (??) to default to 0 if pagination is missing
        const totalItems = result?.pagination?.total_items ?? 0;

        if (totalItems > 0) {
            console.log(`✅ Success! Found ${totalItems} items.`);
            console.dir(result, { depth: null });
        } else {
            // This handles the "No match found" case gracefully
            console.warn("⚠️ No items found matching those specific criteria.");
            console.log("Full Response:", result); 
        }

    } catch (err) {
        // This handles actual WASM execution crashes (e.g., memory issues or invalid types)
        console.error("❌ Wasm Execution Error:", err.message);
    }
}

deepSearch();