export function showDateUtility(container) {
    const now = new Date();
    container.innerHTML = `<p>Current Date and Time: ${now.toLocaleString()}</p>`;
}