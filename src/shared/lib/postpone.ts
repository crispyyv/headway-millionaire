export default function postpone(cb: () => void, ms = 1000) {
  return setTimeout(cb, ms);
}
