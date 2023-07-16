export const useUtils = () => {
  const getLastSymbolID = (url: string) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  }
  return {
    getLastSymbolID
  }
}