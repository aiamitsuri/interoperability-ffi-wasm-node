const wasm = require("@aiamitsuri/interoperability-ffi-wasm");

async function deepSearch(pageNumber = 1) {
    console.log(`🚀 Starting Deep Wasm Test (Page: ${pageNumber})...`);
    
    const params = {
        language: null,
        integration: null,
        crates: null,
        developmentkit: null,
        page: pageNumber.toString(),
        ids: null
    };

    try {

        if (wasm.default) await wasm.default();

        const result = await wasm.fetch_from_js(params);

        const pagination = result?.pagination;
        const totalItems = pagination?.total_items ?? 0;
        const currentPage = pagination?.current_page ?? pageNumber;
        const totalPages = pagination?.total_pages ?? 1;

        if (totalItems > 0) {
            console.log(`✅ Success! [Page ${currentPage}/${totalPages}] Found ${totalItems} items total.`);
            console.dir(result, { depth: null, colors: true });

            if (pagination?.next_page_url) {
                console.log(`\n💡 Pro-tip: Run deepSearch(${currentPage + 1}) to see more.`);
            }
        } else {
            console.warn("⚠️ No items found matching those specific criteria.");
            console.log("Full Response:", result); 
        }

    } catch (err) {
        console.error("❌ Wasm Execution Error:", err.toString());
    }
}

deepSearch(1);