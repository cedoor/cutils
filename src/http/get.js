/**
 * Send a GET HTTP request.
 * @param url
 * @param body
 * @returns {Promise<unknown>}
 */
export function get (url, body) {
  return new Promise(function (resolve, reject) {
    const http = new window.XMLHttpRequest()
    const json = function (string) {
      try {
        return JSON.parse(string)
      } catch (error) {
        return string
      }
    }

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          resolve(json(http.responseText))
        } else {
          reject(json(http.responseText))
        }
      }
    }

    http.onerror = reject

    http.open('GET', url, true)
    http.send(body)
  })
}
