// utils/googleLogout.js
export function fullGoogleLogout() {
  if (window.google?.accounts?.id) {
    window.google.accounts.id.disableAutoSelect();
  }
  localStorage.removeItem("id_token");
}