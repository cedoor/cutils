/**
 * Send a GET HTTP request.
 * @param url
 * @param body
 * @returns {Promise<unknown>}
 */
export function get (url, body) {
  return new Promise(function (resolve, reject) {
    const http = new window.XMLHttpRequest()

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          resolve(http.responseText)
        } else {
          try {
            const json = JSON.parse(http.responseText)

            reject(json)
          } catch (error) {
            reject(http.responseText)
          }
        }
      }
    }

    http.onerror = reject

    http.open('GET', url, true)
    http.send(body)
  })
}
