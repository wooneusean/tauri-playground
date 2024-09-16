// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

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
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            window_shadows::set_shadow(window, true).unwrap();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
