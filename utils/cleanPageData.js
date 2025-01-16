export function parseJson(data) {
  try {
    console.log("data as raw", data)
    return JSON.parse(data);
  } catch (error) {
    // throw new Error(`Invalid JSON data: ${error.message}`);
  }
}
