/**
 * Return all parameters of an URL.
 * @param url
 * @returns {{hostname: *, protocol: *, port: *, params: *}}
 */
export function parseURL (url) {
  if (typeof url !== 'string') {
    throw TypeError('Parameter must be a string.')
  }

  url = new URL(url)

  return {
    hostname: url.hostname,
    port: url.port,
    protocol: url.protocol.replace(':', ''),
    params: url.searchParams.entries()
  }
}
