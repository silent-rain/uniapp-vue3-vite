use std::path::Path;

use walkdir::WalkDir;
use wasm_bindgen::prelude::*;

// Import the \`window.alert\` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// Export a \`greet\` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("[rsw] Hello, {}!", name));
}

#[wasm_bindgen]
pub fn greet2(name: &str) {
    alert(&format!("[rsw] Hello, {}!", name));
}

// https://www.5axxw.com/questions/content/9xy533
#[wasm_bindgen]
pub fn greet3() {
    let paths = ["/home/one/Documents/code/uniappProject/uniapp-vue3-vite/@mywasm"];
    for path in paths.iter() {
        let path = Path::new(path);
        for entry in WalkDir::new(path) {
            let entry = entry.unwrap();
            // println!("{}", entry.path().display());
            alert(&format!("[rsw] Hello, {}!", entry.path().to_str().unwrap()));
        }
    }
}

#[wasm_bindgen]
pub fn greet4() {
    let paths = ["/home/one/Documents/code/uniappProject/uniapp-vue3-vite/@mywasm/foo/pkg"];
    for path in paths.iter() {
        let path: &Path = Path::new(path);
        alert(&format!("[rsw] Hello, {}!", path.to_str().unwrap()));
    }
}
