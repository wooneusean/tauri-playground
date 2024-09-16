#[tauri::command]
pub fn login(username: String, password: String) -> Result<String, String> {
    if username == "admin" && password == "password" {
        Ok("Login successful".to_string())
    } else {
        Err("Invalid credentials".to_string())
    }
}
