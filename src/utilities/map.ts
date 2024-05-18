export default function map(
  value: number,
  startFrom: number,
  endFrom: number,
  startTo: number,
  endTo: number
) {
  return ((endTo - startTo) * (value - startFrom)) / (endFrom - startFrom);
}
