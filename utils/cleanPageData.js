export function parseJson(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    // throw new Error(`Invalid JSON data: ${error.message}`);
  }
}
