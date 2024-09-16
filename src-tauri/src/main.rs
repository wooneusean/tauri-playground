// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands {
    pub mod auth;
    pub mod profile;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::auth::login,
            commands::profile::greet
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
