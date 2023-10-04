export const load = async (loadEvent) => {
  const { fetch } = loadEvent
  const response = await fetch("api/chad")
  const products = await response.json();
  return { products }
}
